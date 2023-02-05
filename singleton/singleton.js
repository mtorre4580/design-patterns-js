let instance;

/**
 * Class function to simulate the Singleton Pattern with FakeDB (simulate a connection)
 */
class FakeDB {
  constructor(uri = "fake_db://") {
    if (instance) {
      throw new Error("You cannot create a new instance for this class");
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.info("Connected to the fakeDB");
  }

  disconnect() {
    console.info("Disconected to the fakeDB");
  }
}

// Freeze the object to prevent extensions and change
// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
const fakeDB = Object.freeze(new FakeDB());

module.exports = fakeDB;
