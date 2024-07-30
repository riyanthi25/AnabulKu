import Home, { loader as homeLoader } from "./pages/homePage";

import AdoptionPage from "./pages/adoptionPage";

import BreedInfoPage, { loader as breedLoader } from "./pages/breedInfoPage";

import QuizPage from "./pages/quizPage";

import LayoutMain from "./layout/main";
import { createBrowserRouter } from "react-router-dom";

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
        loader: breedLoader,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);

export { router };
