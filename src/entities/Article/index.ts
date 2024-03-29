export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
export {
  getArtcileDetailsData,
  getArtcileDetailsError,
  getArtcileDetailsIsLoading,
} from "./model/selectors/articleDetails";
export type { ArticleView, ArticleType, Article } from "./model/types/article";
export { ArticlesList } from "./ui/ArticlesList/ArticlesList";
export { ArticleListItemSkeleton } from "./ui/ArticleListItem/ArtcileListItemSkeleton/ArticleListItemSkeleton";
export { articleDetailsReducer } from "./model/slice/articleDetailsSlice";
export { fetchArticleById } from "./model/services/fetchArticleById/fetchArticleById";


