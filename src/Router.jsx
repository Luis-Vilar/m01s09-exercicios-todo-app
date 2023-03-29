import { createBrowserRouter } from "react-router-dom";
import  {App}  from "./App";
import  {Home}  from "./pages/Home";
import  {QuemSou}  from "./pages/QuemSou";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error!</h1>,
    children: [
      //  as rotas serão incluídas aqui!
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);
