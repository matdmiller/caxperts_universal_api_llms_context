"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConnectorVuplex = void 0;
const APIConnector_1 = require("./APIConnector");
/**
 * @internal
 */
class ApiConnectorVuplex {
    get available() {
        return window.vuplex != null;
    }
    inIframe() {
        try {
            return window.self !== window.top;
        }
        catch (_a) {
            return true;
        }
    }
    initialize() {
        if (this.available) {
            this.attachListener();
        }
        else {
            window.addEventListener('vuplexready', this.attachListener);
        }
        //add another handler for window.message. If we are in an Iframe. window.vuplex is available but the event is not working
        if (this.inIframe()) {
            console.log("Detected Iframe. Adding additional IFrame Hook");
            addEventListener("message", (event) => {
                const json = JSON.parse(event.data);
                if (json.type == "ApiResponse") {
                    APIConnector_1.Api.get().handleEvent(json.message);
                }
            });
        }
    }
    attachListener() {
        window.vuplex.addEventListener('message', (event) => {
            const json = JSON.parse(event.data);
            if (json.type == "ApiResponse") {
                APIConnector_1.Api.get().handleEvent(json.message);
            }
        });
    }
    async sendCommand(command) {
        window.vuplex.postMessage({
            type: 'Command',
            message: JSON.stringify(command)
        });
    }
}
exports.ApiConnectorVuplex = ApiConnectorVuplex;
