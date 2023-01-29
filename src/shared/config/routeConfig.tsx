import {MainPage} from "pages/MainPage";
import {About} from "pages/About";
import {PathRouteProps} from "react-router-dom";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: PathRouteProps[] = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/about',
        element: <About />
    }
]