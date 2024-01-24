import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk";

import { fetchNextArticles } from "./fetchNextArticles";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("Testing fetchNextArticles service", () => {
  test("success fetching", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
      articlesFilters: {
        page: 2,
      },
    });

    await thunk.callAthyncThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ replace: false });
  });

  test("fetchAritcleList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
      articlesFilters: {
        page: 2,
      },
    });

    await thunk.callAthyncThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
