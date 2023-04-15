import api from '../../../Services/api';
import { setClients, deleteClient } from '../ducks/clients';
import { setParamsUrl } from '../ducks/paramsUrl';
import Swal from 'sweetalert2';
import axios from 'axios';

export const fetchClients = (): any => {
  return (dispatch: any) => {
    api.get('/clients').then((response) => {
      dispatch(setClients(response.data.clients));
    }).catch((error: any) => {
      console.log(error)
    });
  }
}

export const actionPagination = (linkPagination: any, paramsUrl: any) => {
    return (dispatch: any) => {

      if(paramsUrl != '') {
        const vl = url(linkPagination, paramsUrl)
        vl.then((res: any) => {
          dispatch(setClients(res));
        })
      } 
      else {
    axios.get(linkPagination).then((response) => {
        dispatch(setClients(response.data?.clients));
    })
      }
  }
}

function url(linkPagination: any, formData: any){

  return api.get(linkPagination).then((response) => {

    const newUrl: any = [];
        response.data.clients.links.map((links: any, index: any) => {
          newUrl[index] = {'url' : links?.url+`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}`, label: links?.label, active: links?.active};
        
          if(index == 0){
            newUrl[index] = {'url' :  links?.url != null ? links?.url +`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}` : null, 'label' : response.data.clients.links[0]?.label, active: response.data.clients.links[0]?.active};
            console.log(newUrl[index]);
          }
          if(index == response.data.clients.links.length - 1){
            const ind = response.data.clients.links.length - 1;
            newUrl[index] = {'url' : links?.url != null ? links?.url +`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}` : null, label : response.data.clients.links[ind]?.label, active: response.data.clients.links[ind]?.active};
          }
        });

        return {...response.data.clients, 'links': newUrl}
      
    }).catch((response) => {
      console.log(response)
    });
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
        response.data.clients.links.map((links: any, index: any) => {
        newUrl[index] = {'url' : links.url+`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}`, label: links.label, active: links.active};
        
          if(index == 0){
            newUrl[index] = {'url' :  links?.url != null ? links?.url +`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}` : null, 'label' : response.data.clients.links[0]?.label, active: response.data.clients.links[0]?.active};
          }
          if(index == response.data.clients.links.length - 1){
            const ind = response.data.clients.links.length - 1;
            newUrl[index] = {'url' : links?.url != null ? links?.url +`&cpf=${formData.cpf}&name=${formData.name}&date_of_birth=${formData.date_of_birth}&gender=${formData.gender}&state_id=${formData.state_id}&city_id=${formData.city_id}` : null, label : response.data.clients.links[ind]?.label, active: response.data.clients.links[ind]?.active};
          }
        });

        const data = {...response.data.clients, 'links': newUrl}
      
      dispatch(setClients(data));
      dispatch(setParamsUrl(formData))
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