import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentForm';

describe('Testing addCommentForm selectors', () => {
  test('test getAddCommentFormText selector', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { text: 'Something' },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('Something');
  });

  test('test getAddCommentFormText selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });

  test('test getAddCommentFormError selector', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { error: 'some error' },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('some error');
  });

  test('test getAddCommentFormError selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
