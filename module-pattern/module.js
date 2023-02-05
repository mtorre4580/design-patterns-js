/**
 * Users Module that expose the 3 methods only
 * @returns object
 */
function usersModule() {
  const users = [];

  // Private function not exports
  function getDate() {
    return new Date().toLocaleDateString();
  }

  function createUser({ name, email }) {
    return { name, email, createdAt: getDate() };
  }

  function addUser(user) {
    users.push(user);
  }

  function getUsers() {
    return users;
  }

  return {
    createUser,
    addUser,
    getUsers,
  };
}
