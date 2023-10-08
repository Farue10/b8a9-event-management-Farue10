import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/errorpage/ErrorPage";
import Catagories from "../Pages/Catagroies/Catagories";
import Feature from "../Pages/Feature/Feature";

const router =createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json')
        },
        {
            path: '/cards/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader:()=> fetch('/data.json')
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
            path: 'register',
            element: <Register></Register>,
        },
        {
            path: 'catagori',
            element:<PrivateRoute><Catagories></Catagories></PrivateRoute>,
        },
        {
            path: 'feature',
            element:<PrivateRoute> <Feature></Feature> </PrivateRoute>,
        },
    ]
    },
  ]);

  export default router