import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import CasinoGames from "./pages/CasinoGames";
import Promotions from "./pages/Promotions";
import News from "./pages/News";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
      { path: "/casino-games", element: <CasinoGames /> },
      { path: "/promotions", element: <Promotions /> },
      { path: "/news", element: <News /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
