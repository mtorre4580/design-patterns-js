# Singleton Pattern

- Pattern that restricts the instantiation of a class and ensures that only one instance of the class exists

## Example

Create a class **FakeDB** with two methods connect and disconnect, should must be a singleton instance for the app

```
const FakeDB = require('./singleton');

FakeDB.connect();
```