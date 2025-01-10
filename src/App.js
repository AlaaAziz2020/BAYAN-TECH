import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store'; // Only import once
import Layout from './Component/Layout/Layout';

import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import TrainerSlider from './Component/TrainerSlider/TrainerSlider';
import CoursesDetails from './Component/CoursesDetails/CoursesDetails';
import TrainerDetails from './Component/TrainerDetails/TrainerDetails';
import Loadar from './Component/Loadar/Loadar';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'footer', element: <Footer /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'navbar', element: <Navbar /> },
      { path: '', element: <Home /> },
      { path: 'trainer', element: <TrainerSlider /> },
      { path: 'coursesdetails/:id/:category', element: <CoursesDetails /> },
      { path: 'trainerdetails/:id/:category', element: <TrainerDetails /> },
      { path: 'home', element: <Home /> },
      { path: 'loadar', element: <Loadar /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
