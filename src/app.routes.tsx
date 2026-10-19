import { Navigate, type RouteObject } from "react-router-dom";

import HomeComponent from "./app/features/home/home.component";

const Home = HomeComponent;

export const routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
