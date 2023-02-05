# Factory Pattern

Dessign pattern that wraps a constructor for different types of objects and returns instances of the objects via a simple function

## Example

- Create a factory **createNotification** to handle the notification status for "info", "error", "success"

```
const successNotification = createNotification(Types.SUCCESS, {
    title: "Home",
    message: "Login success",
    icon: "login.png",
});
```