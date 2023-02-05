// Default class with the basic validations
class Validator {
  validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  validatePassword(password) {
    return password.length > 6;
  }
}

// Extends the Validator class to get the prototype chain
class UserValidator extends Validator {
  validateAge(age) {
    return age > 18;
  }
}

module.exports = UserValidator;
