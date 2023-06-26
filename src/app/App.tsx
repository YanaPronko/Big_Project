import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { AppRouter } from "app/providers/router";
import './styles/index.scss';
import { NavBar } from "widgets/NavBar";


export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar/>
      <button onClick={toggleTheme}>
        Toggle
      </button>
      <AppRouter/>
    </div>
  );
}
