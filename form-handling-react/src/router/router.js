import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegistrationForm from '../components/RegistrationForm';
import FormikForm from '../components/formiForm';

const Router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '../components/RegistrationForm.jsx',
    Component: RegistrationForm,
  },
  {
    path: '../components/formiForm.js',
    Component: FormikForm,
  }
]);

export default Router;