import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegistrationForm from '../pages/RegistrationForm';
import FormikForm from '../components/formiForm';
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
    path: '../components/formiForm.js',
    Component: FormikForm,
  },
  {
    path: '/login',
    Component: Login,
  }
]);

export default Router;