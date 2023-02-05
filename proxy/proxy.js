// Object to handle the payload for event to analytics for example
const payloadButtonEvent = {
  event_name: "button_clicked",
};

// Basic validations of the current payload
const validator = {
  origin: "string",
  id: "number",
};

const payloadButtonEventProxy = new Proxy(payloadButtonEvent, {
  set: (target, property, value) => {
    const typeValue = validator[property];
    if (typeof value != typeValue) {
      throw new Error(
        `Invalid type for the ${property} property, must be "${validator[property]}"`
      );
    }
    return Reflect.set(target, property, value);
  },
});

function track({ origin, id }) {
  payloadButtonEventProxy.origin = origin;
  payloadButtonEventProxy.id = id;

  console.log(`track the event ${JSON.stringify(payloadButtonEventProxy)}`);
}

module.exports = track;
