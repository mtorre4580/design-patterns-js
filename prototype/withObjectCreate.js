// Default object with the basic validations
const validator = {
  validateEmail: (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  },
  validatePassword: (password) => {
    return password.length > 6;
  },
};

// Create a new object with the prototype chain from validator
const validatorUser = Object.create(validator);

validatorUser.validateAge = (age) => {
  return age > 18;
};

module.exports = validatorUser;
