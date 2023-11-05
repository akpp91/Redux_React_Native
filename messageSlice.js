import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: 'Initial message',
  },
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
//This line is exporting the action creator function setMessage that was automatically generated 
// by createSlice. You can use this function in your React components to dispatch actions 
// that the messageSlice reducer can respond to.

export default messageSlice.reducer;
