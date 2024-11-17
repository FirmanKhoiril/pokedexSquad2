import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import PokemonDetail from "../pages/PokemonDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />,
        },
      ],
    },
  ]);