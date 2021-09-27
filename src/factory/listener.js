// ABSTRACT CLASS FOR LISTEN NATS EVENT
class Listener {
  subject // ABSTRACT
  queueGroupName // ABSTRACT
  _client // PROTECTED
  _ackWait = 5 * 1000 // PROTECTED

  constructor(client) {
    this._client = client
  }

  // DEFAULT CONFIGURATION OF NATS STREAMING
  subscriptionOption() {
    return this._client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this._ackWait)
      .setDurableName(this.queueGroupName)
  }

  listen() {
    const subscription = this._client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOption()
    )

    subscription.on("message", msg => {
      console.log(`Event Received: ${this.subject} / ${this.queueGroupName}`)
      const parsedData = this.parseMessage(msg)
      this.onMessage(parsedData, msg)
    })
  }

  parseMessage(msg) {
    const data = msg.getData()
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"))
  }
}

exports.Listener = Listener
