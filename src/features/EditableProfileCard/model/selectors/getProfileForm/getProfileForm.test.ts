import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

import { getProfileForm } from "./getProfileForm";

describe("Getting Profile Form from state", () => {
  test("getting form from profile", () => {
    const data = {
      first: "Yana",
      lastname: "Prankonkjj,",
      age: 78,
      currency: "USD" as Currency,
      country: "Kazakhstan" as Country,
      city: "Minsk",
      username: "adminbnm,",
    };
    const state: DeepPartial<StateSchema> = {
      profile: { form: data },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("check selector without state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
