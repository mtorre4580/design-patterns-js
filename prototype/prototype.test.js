const UserValidator = require("./withClass");
const userValidatorHelper = require("./withObjectCreate");

describe("prototype", () => {
  test("should create a prototype chain from validator Class", () => {
    expect(UserValidator.validatePassword).toEqual(expect.any(Function));
    expect(UserValidator.validateAge).toEqual(expect.any(Function));
    expect(UserValidator.validateEmail).toEqual(expect.any(Function));
  });

  test("should create a prototype chain from validator Object.create()", () => {
    expect(userValidatorHelper.validatePassword).toEqual(expect.any(Function));
    expect(userValidatorHelper.validateAge).toEqual(expect.any(Function));
    expect(userValidatorHelper.validateEmail).toEqual(expect.any(Function));
  });
});
