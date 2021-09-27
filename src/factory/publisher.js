// ABSTRACT CLASS FOR PUBLISH NATS EVENT
class Publisher {
  subject // ABSTRACT
  _client // PROTECTED
  constructor(client) {
    this._client = client
  }
  publish(data) {
    return new Promise((resolve, reject) => {
      this._client.publish(this.subject, JSON.stringify(data), err => {
        if (err) {
          return reject(err)
        }
        console.log(`Event Published: ${this.subject}`)
        resolve()
      })
    })
  }
}

exports.Publisher = Publisher
