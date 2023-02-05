# Proxy Pattern

- Design Pattern that uses a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to intercept and control interactions to target objects

## Example

Create a payload proxy to validate the payload properties (**origin** | **id**) before track the current event (like google-analytics)

``
const payload = { event_name: "button_clicked", origin: "string", id: "number" };
``