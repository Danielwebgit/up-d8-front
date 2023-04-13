import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: []
};

const clientsSlice: any = createSlice({
  name: 'clients',
  initialState,
  reducers: {
      setClients : (state: any, action: any) => {
        state.clients = action.payload;
    },
    deleteClient: (state: any, action: any) => {
      state.clients = {...state.clients, 'data': state.clients.data.filter((client: any) =>  client.id !=  action.payload)};
    }
  }
});

export default clientsSlice.reducer;

export const { setClients, deleteClient } = clientsSlice.actions;