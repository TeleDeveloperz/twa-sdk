import { TWASDK } from "../src";

describe("TWASDK User", () => {
  const mockInitData = encodeURIComponent(JSON.stringify({
    initData: {
      user: {
        id: 123456789,
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
        language_code: "en",
        is_premium: true
      },
      auth_date: Date.now(),
      hash: "mock_hash"
    }
  }));

  const sdk = new TWASDK(mockInitData);

  test("User ID is correct", () => {
    expect(sdk.user.getId()).toBe(123456789);
  });

  test("Username is correct", () => {
    expect(sdk.user.getUsername()).toBe("johndoe");
  });

  test("Full name is correct", () => {
    expect(sdk.user.getFullName()).toBe("John Doe");
  });

  test("Language code is correct", () => {
    expect(sdk.user.getLanguageCode()).toBe("en");
  });

  test("Premium status is correct", () => {
    expect(sdk.user.isPremium()).toBe(true);
  });

  test("Account age is a number", () => {
    expect(typeof sdk.user.getAccountAge()).toBe("number");
  });
});
