# Module Pattern

- Design pattern used for improving the maintainability and reusability of the code by creating public and private access levels
- Keeps the privacy of the state using closures

## Example

Create a module in javascript **module.js** that expose only this 3 methods

- addUser: Add a user in the list users
- createUser: Create an user with email and name
- getUsers: Retrieve the list of users

```
<!DOCTYPE html>
<html>
  <head>
    <title>Module Pattern</title>
  </head>
  <body>
    <script src="module.js"></script>
    <script>
      const { createUser, addUser, getUsers } = usersModule();

      const frank = createUser({
        name: "Frank",
        email: "frank@test.com",
      });

      const carol = createUser({
        name: "Carol",
        email: "carol@test.com",
      });

      addUser(frank);
      addUser(carol);

      console.log('Users: ', getUsers());
    </script>
  </body>
</html>
```