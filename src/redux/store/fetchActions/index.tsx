import api from '../../../Services/api';
import { setClients, deleteClient } from '../ducks/clients';
import Swal from 'sweetalert2';

export const fetchClients = (): any => {
  return (dispatch: any) => {
    api.get('/clients').then((response) => {
     
      dispatch(setClients(response.data));
    }).catch((error: any) => {
      console.log(error)
    });
  }
}

export const registerClient = (data: any): any => {
  return (dispatch: any) => {
    api.post('/clients/store', {data}).then((response) => {
     
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