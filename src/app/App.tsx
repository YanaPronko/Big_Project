import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar/>
      <ThemeSwitcher/>
      <AppRouter/>
    </div>
  );
}
