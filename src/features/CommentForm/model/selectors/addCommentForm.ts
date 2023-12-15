import { StateSchema } from '@/app/providers/StoreProvider';

import { initialState } from '../slice/addCommentFormSlice';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? initialState.text;
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
