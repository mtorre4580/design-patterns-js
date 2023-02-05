class Observer {
  constructor() {
    this.subscribers = [];
  }

  notify(payload) {
    this.subscribers.forEach((subscriber) => {
      subscriber(payload);
    });
  }

  subscribe(f) {
    this.subscribers.push(f);
  }

  unsubscribe(f) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber != f);
  }
}

module.exports = Observer;
