import { Suspense, useContext, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Theme, ThemeContext } from "./theme/ThemeContext"

const App = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? Theme.LIGHT : Theme.DARK)
  }

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