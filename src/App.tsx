import { Routes, Route, Link } from "react-router-dom"
import "./index.scss"
import MainPage from "./pages/MainPage/MainPage"
import AboutPage from "./pages/AboutPage/AboutPage"

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>About</Link>
      <Link to={"/mainpage"}>MainPage</Link>
      <Routes>
        <Route path="/" element={<AboutPage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App