import { createBrowserRouter } from "react-router-dom";
import  {App}  from "./App";
import  {Home}  from "./pages/Home";
import  {QuemSou}  from "./pages/QuemSou";
import Error from "./components/Error";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //  as rotas serão incluídas aqui!
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
