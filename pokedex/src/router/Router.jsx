import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import PokemonDetail from "../pages/PokemonDetail";
import CardGame from "../pages/CardGame";

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
          path: "/card-game",
          element: <CardGame />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />,
        },
      ],
    },
  ]);