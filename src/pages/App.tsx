import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./LoginPage";
import MainPage from "./MainPage";
import GamePage from "./GamePage";
import BufferPage from "./BufferPage";
import ResultPage from "./ResultPage";

interface PropTypes {}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <MainPage />,
    children: [
      {
        path: "/home/game",
        element: <GamePage />,
      },
      {
        path: "/home/buffer",
        element: <BufferPage />,
      },
      {
        path: "/home/result",
        element: <ResultPage />,
      },
    ],
  },
]);

const App: React.FC<PropTypes> = () => {
  useEffect(() => {
    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
