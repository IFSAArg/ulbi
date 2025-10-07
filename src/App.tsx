import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"
import "./styles/index.scss"

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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