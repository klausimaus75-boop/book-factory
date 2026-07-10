import { describe, expect, it } from "vitest";
import { decodeGoogleCredential, mapGooglePayloadToAuthUser } from "./googleIdentity";

function base64UrlEncode(value: object) {
  return btoa(JSON.stringify(value)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

describe("google identity helpers", () => {
  it("decodes a Google credential payload and maps it to an auth user", () => {
    const credential = [
      base64UrlEncode({ alg: "none" }),
      base64UrlEncode({ sub: "abc", name: "Klaus", email: "klaus@example.com", picture: "https://example.com/me.png" }),
      "signature"
    ].join(".");

    const payload = decodeGoogleCredential(credential);
    const user = mapGooglePayloadToAuthUser(payload);

    expect(user).toEqual({
      id: "abc",
      name: "Klaus",
      email: "klaus@example.com",
      picture: "https://example.com/me.png",
      provider: "google"
    });
  });
});
