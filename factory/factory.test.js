const { Types, createNotification } = require("./factory");

describe("factory", () => {
  test("should create the notification success", () => {
    const successNotification = createNotification(Types.SUCCESS, {
      title: "Home",
      message: "Login success",
      icon: "login.png",
    });

    expect(successNotification).toEqual({
      title: "Home",
      message: "Login success",
      icon: "login.png",
      color: "green",
    });
  });

  test("should create the notification error", () => {
    const errorNotification = createNotification(Types.ERROR, {
      title: "Home",
      message: "Login failed, check your internet connection",
      icon: "login.png",
    });

    expect(errorNotification).toEqual({
      title: "Home",
      message: "Login failed, check your internet connection",
      icon: "login.png",
      color: "red",
    });
  });

  test("should create the notification info", () => {
    const infoNotification = createNotification(Types.INFO, {
      title: "Home",
      message: "You need to confirm the account",
      icon: "login.png",
    });

    expect(infoNotification).toEqual({
      title: "Home",
      message: "You need to confirm the account",
      icon: "login.png",
      color: "aliceblue",
    });
  });
});
