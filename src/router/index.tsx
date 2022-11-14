import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import('../views/HomeViews'))
const CreateU = lazy(() => import('../views/CreateUsersViews'))

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/create-users",
        element: <CreateU />,
    }
]