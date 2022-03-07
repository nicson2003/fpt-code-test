import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '.';

interface TaskData {
  id: number;
  taskId: string;
  title: string;
  completed: string;
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/?userId=10',
  );
  return (await response.json()) as TaskData[];
});

export const tasksAdapter = createEntityAdapter<TaskData>();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      tasksAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, state => {
      state.loading = false;
    });
  },
});

export const {
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  selectEntities: selectTaskEntities,
  selectAll: selectAllTasks,
  selectTotal: selectTotalTasks,
} = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export default tasksSlice.reducer;
