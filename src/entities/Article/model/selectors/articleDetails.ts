import { StateSchema } from "@/app/providers/StoreProvider";

export const getArtcileDetailsError = (state: StateSchema) =>
  state.articleDetails?.error;
export const getArtcileDetailsIsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
export const getArtcileDetailsData = (state: StateSchema) =>
  state.articleDetails?.data;
