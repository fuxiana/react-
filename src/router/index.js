import Index from "../pages/404";
import Login from "../pages/login/login";

export const routerList =[
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/404',
    element: <Index/>
  }
]