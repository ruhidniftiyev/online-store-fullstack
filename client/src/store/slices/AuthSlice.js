const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;

export const {} = authSlice.actions;
