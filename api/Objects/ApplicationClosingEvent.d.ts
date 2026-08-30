/**
 * Delivered to the callback registered via `Events.registerApplicationClosingEvent` when the viewer (or the
 * hosting app window) is about to close. The app should perform any required cleanup (e.g. release locks,
 * autosave) and then answer with {@link respondToClosing}.
 *
 * The viewer waits a limited time for a response. If the app stays silent past that timeout it is treated as
 * blocking the close and the user is shown a "close anyway?" dialog. If your cleanup may take longer than the
 * viewer's timeout, first call `respondToClosing(false)` to signal you are still busy - this suspends the
 * timeout and the viewer waits indefinitely - and then call `respondToClosing(true)` once cleanup is finished.
 *
 * The negotiation token is captured by this object, so it does not need to be passed manually.
 */
export declare class ApplicationClosingEvent {
    /**
     * Optional human readable reason describing why the close was triggered.
     */
    readonly reason: string;
    private readonly negotiationId;
    constructor(negotiationId: string, reason: string);
    /**
     * Answer the pending close negotiation.
     *
     * Pass `allowClose = true` once cleanup is finished to let the close proceed.
     *
     * Pass `allowClose = false` to signal the app is still busy: this suspends the viewer's response timeout so
     * the window is kept open and waited for. You must follow up with `respondToClosing(true)` when done -
     * otherwise the viewer waits indefinitely. Use this only when cleanup may exceed the viewer's timeout;
     * apps that finish quickly can simply call `respondToClosing(true)` once.
     *
     * @param allowClose true to allow the close (final answer), false to signal the app is still busy
     * @param appName optional app name shown to the user if the close is blocked
     * @param reason optional reason shown to the user if the close is blocked
     * @returns ApiResponse can be ignored and will likely change
     */
    respondToClosing(allowClose: boolean, appName?: string, reason?: string): Promise<import("..").ApiResponse>;
}
//# sourceMappingURL=ApplicationClosingEvent.d.ts.map