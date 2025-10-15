import { lazy } from "react";


export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // Это сделано исключительно дя имитации загрузки
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))