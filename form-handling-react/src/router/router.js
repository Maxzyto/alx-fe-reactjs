import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegistrationForm from '../components/RegistrationForm';
import FormikForm from '../components/formikForm';
import Login from '../pages/LoginPage';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/RegistrationForm.jsx',
    Component: RegistrationForm,
  },
 
  {
    path: '/login',
    Component: Login,
  }
]);

export default Router;