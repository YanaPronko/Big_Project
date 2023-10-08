import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer }
  from './articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
