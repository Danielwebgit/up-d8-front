import api from '../../../Services/api';
import { setClients, deleteClient } from '../ducks/clients';
import Swal from 'sweetalert2';
import axios from 'axios';
import useUrlPageLink from '../../../huks/useUrlPageLink';

export const fetchClients = (): any => {
  return (dispatch: any) => {
    api.get('/clients').then((response) => {

      dispatch(setClients(response.data));
    }).catch((error: any) => {
      console.log(error)
    });
  }
}

export const actionPagination = (linkPagination: any) => {
  
    return (dispatch: any) => {
   
        axios.get(linkPagination).then((response) => {
          console.log(response.data?.clients)
        dispatch(setClients(response.data?.clients));
    })
  }
}

export const searchCustomer = (formData: any): any => {
  return (dispatch: any) => {
    return api.get(`/clients?
      cpf=${formData.cpf}
      &name=${formData.name}
      &date_of_birth=${formData.date_of_birth}
      &gender=${formData.gender}
      &state_id=${formData.state_id}
      &city_id=${formData.city_id}`).then((response) => {

    const newUrl: any = [];

    //const { newData, fetchData } = useUrlPageLink(response.data.clients.links);

        response.data.clients.links.map((links: any, index: any) => {
          newUrl[index] = {'url' : links.url+`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}`, label: links.label, active: links.active};
        
          if(index == 0){
            newUrl[index] = {'url' : response.data.clients.links[0].url, 'label' : response.data.clients.links[0].label, active: response.data.clients.links[0].active};
          }
          if(index == response.data.clients.links.length - 1){
            const ind = response.data.clients.links.length - 1;
            newUrl[index] = {'url' : response.data.clients.links[ind].url, 'label' : response.data.clients.links[ind].label, active: response.data.clients.links[ind].active};
          }
        });

        const data = {...response.data.clients, 'links': newUrl}

        console.log(data)
      
      dispatch(setClients(data));
    }).catch((response) => {
      console.log(response)
    });
  }
}

export const registerClient = (data: any): any => {
  return (dispatch: any) => {
    api.post('/clients/store', { data }).then((response) => {

      dispatch(setClients(response.data));
    }).catch((error: any) => {
      console.log(error)
    });
  }
}

export const actionDeleteClient = (clientId: any) => {
  return (dispatch: any) => {

    Swal.fire({
      title: 'Excluir cliente?',
      text: "Tem certeza que deseja excluir esse cliente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, manda ver!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        api.delete(`/clients/destroy/${clientId}`).then((response) => {
          console.log(response)
          dispatch(deleteClient(clientId))
        }).catch((response) => {
          console.log(response)
        })
        Swal.fire(
          'Deletado!',
          'Esse cliente não consta mais na lista.',
          'success'
        )
      }
    })
  }
}