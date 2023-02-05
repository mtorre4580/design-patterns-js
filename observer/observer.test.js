const UserLoggedObserver = require("./observer");

describe("observer", () => {
  test("should create an observer and notify the user logged for all subscribers", () => {
    const trackUserLogged = jest.fn();
    const getFeedsByUser = jest.fn();

    const userLogged = { name: "Frank", email: "frank@test.com" };

    const userLoggedObserver = new UserLoggedObserver();

    userLoggedObserver.subscribe(trackUserLogged);
    userLoggedObserver.subscribe(getFeedsByUser);

    userLoggedObserver.notify(userLogged);

    expect(trackUserLogged).toHaveBeenCalledWith(userLogged);
    expect(getFeedsByUser).toHaveBeenCalledWith(userLogged);
  });
});
