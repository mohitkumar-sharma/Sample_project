import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '../states';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;

export { store };
