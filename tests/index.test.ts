import { main, VERSION } from "../src/index";

describe("card-trade-social", () => {
  test("version is defined", () => {
    expect(VERSION).toBe("0.1.0");
  });

  test("main runs without error", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    main();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("card-trade-social"));
    consoleSpy.mockRestore();
  });
});
