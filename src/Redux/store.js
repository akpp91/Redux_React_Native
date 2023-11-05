import { configureStore } from '@reduxjs/toolkit';
import librariesReducer from './librariesSlice';

export default configureStore({
  reducer: {
    libraries: librariesReducer,
  },
});
