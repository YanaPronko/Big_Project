import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";
import { AddCommentFormSchema } from "../types/addCommentFormSchema";

describe("Testing addCommentFormSlice", () => {
  test("test setText action", () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: "Something" };
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText("New text"),
      ),
    ).toEqual({ text: "New text" });
  });
});
