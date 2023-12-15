import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkOptionsConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getArtcileDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkOptionsConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const {
    dispatch, extra, rejectWithValue, getState,
  } = thunkAPI;
  try {
    const userData = getUserAuthData(getState());
    const article = getArtcileDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    const response = await extra.api.post<Comment>('/comments', {
      userId: userData?.id,
      articleId: article?.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }
    dispatch(fetchCommentsByArticleId(article.id));
    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
