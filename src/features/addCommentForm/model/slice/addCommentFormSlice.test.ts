import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { AddCommentFormSchema } from 'features/addCommentForm/model/types/addCommentFormSchema';

describe('Testing addCommentFormSlice', () => {
  test('test setText action', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'Something' };
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('New text'),
      ),
    ).toEqual({ text: 'New text' });
  });
});
