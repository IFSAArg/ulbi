import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  ABOUT = 'about',
  MAIN = 'main',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.MAIN]: '/mainpage',
  [AppRoutes.NOT_FOUND]: '*',
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
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
