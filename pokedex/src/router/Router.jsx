import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import PokemonDetail from "../pages/PokemonDetail";
import PokemonTCG from "../pages/PokemonTCG";

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
          path: "/trading-card-game",
          element: <PokemonTCG />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />,
        },
      ],
    },
  ]);