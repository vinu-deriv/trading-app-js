class APISocket {
  constructor() {
    this.ws = new WebSocket(
      `wss://ws.binaryws.com/websockets/v3?app_id=${localStorage.getItem(
        "config.app_id"
      )}`
    );
  }

  onOpen(eventHandler) {
    this.ws.addEventListener("open", eventHandler);
  }

  onMessage(eventHandler) {
    this.ws.addEventListener("message", eventHandler);
  }

  onClose(eventHandler) {
    this.ws.addEventListener("close", eventHandler);
  }

  sendRequest(payload) {
    if (this.ws.readyState === 1) {
      this.ws.send(JSON.stringify(payload));
    }
  }
}

export default new APISocket();
