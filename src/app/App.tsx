import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>About</Link>
      <Link to={"/mainpage"}>MainPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AboutPage/>}/>
          <Route path="/mainpage" element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App