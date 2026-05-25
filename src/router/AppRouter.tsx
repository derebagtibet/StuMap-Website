import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import CareerTestPage from "../pages/CareerTestPage";
import HomePage from "../pages/HomePage";
import SchoolPage from "../pages/SchoolPage";
import StudentPage from "../pages/StudentPage";
import { ROUTES } from "../constants/routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />
      },
      {
        path: ROUTES.SCHOOL,
        element: <SchoolPage />
      },
      {
        path: ROUTES.STUDENT,
        element: <StudentPage />
      },
      {
        path: ROUTES.CAREER_TEST,
        element: <CareerTestPage />
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />
      }
    ]
  }
]);
