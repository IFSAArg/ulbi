import { Suspense, useContext, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>About</Link>
      <Link to={"/mainpage"}>MainPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AboutPageAsync/>}/>
          <Route path="/mainpage" element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App