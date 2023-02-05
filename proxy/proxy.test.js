const track = require("./proxy");

describe("proxy", () => {
  test("should throw an error for invalid payload", () => {
    expect(() => {
      expect(track({ origin: "home", id: "81237894" }));
    }).toThrow(new Error('Invalid type for the id property, must be "number"'));
  });

  test("should track correctly the payload is valid", () => {
    const logger = jest.spyOn(console, "log").mockImplementation(() => {});

    expect(track({ origin: "home", id: 81237894 }));

    expect(logger).toBeCalledWith(
      'track the event {"event_name":"button_clicked","origin":"home","id":81237894}'
    );
  });
});
