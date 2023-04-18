import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import clientsReduce from './ducks/clients';
import paramsUrlReduce from './ducks/paramsUrl';

const store = configureStore({
  reducer: {
      clients: clientsReduce,
      paramsUrl: paramsUrlReduce
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store