import {Link} from "react-router-dom"
import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {AppRouter} from "app/providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>About</Link>
      <Link to={"/mainpage"}>MainPage</Link>
      <AppRouter/>
    </div>
  )
}

export default App