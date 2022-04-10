import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '.';

export interface charData {
  id: string | number;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  title: string | null;
  family: string | null;
  image: string | null;
  imageUrl: string | null;
}

export const fetchCharacters = createAsyncThunk(
  'thrones/fetchCharacters',
  async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters/');
    return (await response.json()) as any[];
  },
);

export const charsAdapter = createEntityAdapter<charData>();

const newsSlice = createSlice({
  name: 'thrones',
  initialState: charsAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCharacters.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      charsAdapter.setAll(state, action.payload);
      console.log('fulfilled');
      state.loading = false;
    });
    builder.addCase(fetchCharacters.rejected, state => {
      console.log('rejected');
      state.loading = false;
    });
  },
});

export const {
  selectById: selectCharactersById,
  selectIds: selectCharactersIds,
  selectEntities: selectCharactersEntities,
  selectAll: selectAllCharacters,
  selectTotal: selectTotalCharacters,
} = charsAdapter.getSelectors((state: RootState) => state.characters);

export default newsSlice.reducer;
