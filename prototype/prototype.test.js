const UserValidator = require("./withClass");
const userValidatorHelper = require("./withObjectCreate");

const userValidator = new UserValidator();

describe("prototype", () => {
  test("should create a prototype chain from validator Class", () => {
    expect(userValidator.validatePassword).toEqual(expect.any(Function));
    expect(userValidator.validateAge).toEqual(expect.any(Function));
    expect(userValidator.validateEmail).toEqual(expect.any(Function));
  });

  test("should create a prototype chain from validator Object.create()", () => {
    expect(userValidatorHelper.validatePassword).toEqual(expect.any(Function));
    expect(userValidatorHelper.validateAge).toEqual(expect.any(Function));
    expect(userValidatorHelper.validateEmail).toEqual(expect.any(Function));
  });
});
