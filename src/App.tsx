import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"

const App = () => {
  return (
    <div className="app">
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