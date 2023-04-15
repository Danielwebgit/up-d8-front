import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paramsUrl: ''
};

const paramsUrlSlice: any = createSlice({
  name: 'paramsUrl',
  initialState,
  reducers: {
    setParamsUrl : (state: any, action: any) => {
        state.paramsUrl = action.payload;
    }
  }
});

export default paramsUrlSlice.reducer;

export const { setParamsUrl } = paramsUrlSlice.actions;