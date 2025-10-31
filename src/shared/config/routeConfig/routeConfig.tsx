import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  ABOUT = 'about',
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.MAIN]: '/mainpage',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
