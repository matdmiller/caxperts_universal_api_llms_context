"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConnectorBrowser = void 0;
const APIConnector_1 = require("./APIConnector");
/**
 * @internal
 */
class ApiConnectorBrowser {
    constructor() {
        this.webSocket = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 2000;
        this.port = 45123;
        this.userRejected = false;
        this.connected = false;
        this.wsUrl = `ws://127.0.0.1:${this.port}`;
    }
    get available() {
        return this.connected;
    }
    initialize() {
        if (!window.vuplex && 'WebSocket' in window) {
            this.connectWebSocket();
        }
    }
    connectWebSocket() {
        try {
            this.webSocket = new WebSocket(this.wsUrl);
            this.webSocket.onopen = () => {
                console.log('WebSocket connection established');
                this.connected = true;
            };
            this.webSocket.onmessage = (event) => {
                try {
                    const json = JSON.parse(event.data);
                    if (json.type === "ApiResponse") {
                        // check if the response contains Rejected error message
                        if (json.message && json.message.ErrorCode != 0 && json.message.ErrorMessage.startsWith("Rejected")) {
                            console.error("API Response Error:", json.message.ErrorMessage);
                            this.userRejected = true;
                        }
                        else {
                            APIConnector_1.Api.get().handleEvent(json.message);
                        }
                    }
                }
                catch (error) {
                    console.error('Error parsing message:', error);
                }
            };
            this.webSocket.onclose = () => {
                this.connected = false;
                if (this.userRejected) {
                    return;
                }
                if (this.reconnectAttempts < this.maxReconnectAttempts) {
                    this.reconnectAttempts++;
                    console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
                    setTimeout(() => this.connectWebSocket(), this.reconnectDelay);
                }
                else {
                    console.error('Connection failed after maximum retry attempts');
                }
            };
            this.webSocket.onerror = (error) => {
                console.error('Error:', error);
            };
        }
        catch (error) {
            console.error('Error creating connection:', error);
        }
    }
    async sendCommand(command) {
        // Wait for WebSocket connection to be ready
        await this.waitForConnection();
        if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket is not connected');
        }
        this.webSocket.send(JSON.stringify({
            type: 'Command',
            message: JSON.stringify(command)
        }));
    }
    waitForConnection(timeoutMs = 5000) {
        return new Promise((resolve, reject) => {
            if (!this.webSocket) {
                return reject(new Error('No WebSocket instance available'));
            }
            const timeout = setTimeout(() => {
                reject(new Error('WebSocket connection timeout'));
            }, timeoutMs);
            const checkConnection = () => {
                var _a, _b;
                if (((_a = this.webSocket) === null || _a === void 0 ? void 0 : _a.readyState) === WebSocket.OPEN) {
                    clearTimeout(timeout);
                    resolve();
                }
                else if (((_b = this.webSocket) === null || _b === void 0 ? void 0 : _b.readyState) === WebSocket.CONNECTING) {
                    setTimeout(checkConnection, 100);
                }
                else {
                    clearTimeout(timeout);
                    reject(new Error('WebSocket connection failed'));
                }
            };
            checkConnection();
        });
    }
}
exports.ApiConnectorBrowser = ApiConnectorBrowser;
