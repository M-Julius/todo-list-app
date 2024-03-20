import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    getUsersAction: state => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccessAction: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersErrorAction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getUsersAction, getUsersSuccessAction, getUsersErrorAction } = userSlice.actions;
export default userSlice.reducer;
