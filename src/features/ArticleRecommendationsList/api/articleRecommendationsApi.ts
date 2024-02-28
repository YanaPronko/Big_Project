import { Article } from "@/entities/Article";
import { rtkApi } from "@/shared/api/rtk";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
          _expand: "user"
        },
      }),
    }),
  }),
});

export const useGetArticleRecommendations =
  recommendationsApi.useGetArticleRecommendationsQuery;
