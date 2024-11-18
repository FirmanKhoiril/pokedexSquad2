import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import PokemonDetail from "../pages/PokemonDetail";
import PokemonTradingCardGame from "../pages/PokemonTradingCardGame";
import Bookmark from "../pages/Bookmark";

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
          element: <PokemonTradingCardGame />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail />,
        },
        {
          path: "/bookmark",
          element: <Bookmark />,
        },
      ],
    },
  ]);