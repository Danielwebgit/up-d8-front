import api  from "./api";

export const fetchStates = () => {
  return api.get(`/states`);
}

export const fetchCities = (stateId: any) => {
  return api.get(`/cities?state_id=${stateId}`);
}

export const addClient = (data: any) => {
  return api.post(`/clients/store`, data);
}

export const updateClient = (clientId: any, data: any) => {
  return api.put(`/clients/update/${clientId}`, data);
}

export default {
  fetchStates,
  fetchCities,
  addClient,
  updateClient
}