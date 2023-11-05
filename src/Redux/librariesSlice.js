import { createSlice } from '@reduxjs/toolkit';
import LibraryReducer from '../LibraryReducer';
const initialState = {
  libraries: [], // Initial state for your libraries
};
export const librariesSlice = createSlice({
  name: 'libraries',
  initialState  ,
  reducers: 
  {
    showData: (state, action) => 
      {
        state.libraries = action.payload
      } 
  },
});

export const { showData } = librariesSlice.actions;
//This line is exporting the action creator function setMessage that was automatically generated 
// by createSlice. You can use this function in your React components to dispatch actions 
// that the messageSlice reducer can respond to.

export default librariesSlice.reducer;
