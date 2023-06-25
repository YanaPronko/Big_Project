import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { AppRouter } from "app/providers/router";
import './styles/index.scss';


export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About us</Link>
      <button onClick={toggleTheme}>
        Toggle
      </button>
      <AppRouter/>
    </div>
  );
}
