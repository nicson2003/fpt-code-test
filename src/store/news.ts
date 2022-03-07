import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '.';

export interface newsSource {
  id: string | null;
  name: string;
}

export interface newsData {
  id: string | null;
  sourceName: string | null;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
  source?: newsSource;
}

export interface rawData {
  status: string;
  totalResults: Number;
  articles: newsData[];
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=ph&apiKey=bca8dcfe8766414492ead705184b1334',
  );

  const res = await response.json();
  const {articles, status, totalResults} = await res;
  const data = await articles.map((article: newsData, index: number) => {
    const {
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
      source,
    } = article;
    const newArticle = {
      sourceName: source?.name,
      id: index,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    };
    return newArticle;
  });

  return {data, status, totalResults};
});

export const newsAdapter = createEntityAdapter<newsData>();

const newsSlice = createSlice({
  name: 'news',
  initialState: newsAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      newsAdapter.setAll(state, action.payload.data);
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, state => {
      state.loading = false;
    });
  },
});

export const {
  selectById: selectNewsById,
  selectIds: selectNewsIds,
  selectEntities: selectNewsEntities,
  selectAll: selectAllNews,
  selectTotal: selectTotalNews,
} = newsAdapter.getSelectors((state: RootState) => state.news);

export default newsSlice.reducer;
