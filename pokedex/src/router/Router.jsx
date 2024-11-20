import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import PokemonDetail from "../pages/PokemonDetail";
import PokemonTradingCardGame from "../pages/PokemonTradingCardGame";
import Dashboard from "../pages/Dashboard";
import Bookmark from "../pages/Bookmark";
import About from '../pages/About'

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
          path: "/news",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
          {
          path: "/bookmark",
          element: <Bookmark />,
        },
      ],
    },
  ]);