import { Routes, Route } from 'react-router-dom';
import ClientRegisterScreen from '../screens/ClientRegisterScreen';
import ClientScreen from '../screens/ClientScreen';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientScreen />}/>
      <Route path='/clientes/registrar' element={<ClientRegisterScreen />}/>
      <Route path='/clientes/editar/:clientId' element={<ClientRegisterScreen/>}/>
    </Routes>
  )
}