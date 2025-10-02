import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // Это сделано исключительно дя имитации загрузки
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))