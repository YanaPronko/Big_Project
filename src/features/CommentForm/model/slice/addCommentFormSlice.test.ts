import { AddCommentFormSchema } from '../types/addCommentFormSchema';

import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

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
