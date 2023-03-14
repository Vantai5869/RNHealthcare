import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { getUser } from '../api/fakeApiUser';

export const fetchUser = createAsyncThunk('user/getUser', async () => {
  const response = await getUser();
  return response.data;
});

const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data:undefined
  },
  reducers: {
    setUser:(state, action:any)=>{
      state.data=action
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: any) => {
        // userAdapter.setAll(state, action.payload);
        state.data=action.payload,
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.auth,
);


export const { setUser } = userSlice.actions
export default userSlice.reducer;
