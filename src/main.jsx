import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/homePage";
import AdoptionPage from "./pages/adoptionPage";
import BreedInfoPage from "./pages/breedInfoPage";
import QuizPage from "./pages/quizPage";
import LayoutMain from "./layout/main";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/adopt",
        element: <AdoptionPage />,
      },
      {
        path: "/breed",
        element: <BreedInfoPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Josefin Sans, sans-serif",
        headings: { fontFamily: "Josefin Sans, sans-serif" },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
