const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    isAuth: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const {} = authSlice.actions;
