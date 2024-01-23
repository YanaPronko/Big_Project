import { DeepPartial } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { getLoginIsLoading } from "./getLoginIsLoading";

describe("Getting isLoading status", () => {
  test("Getting isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });

  test("Check work without state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
