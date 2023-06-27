import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";
import { SideBar } from "widgets/SideBar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
}
