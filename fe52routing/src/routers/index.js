import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import HOCPage from "../containers/HomeTemplate/HOCPage";
import DashBoardPage from "../containers/AdminTemplate/DashBoardPage";
import UserPage from "../containers/AdminTemplate/UserPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HOCPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashBoardPage,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];

export { routesHome, routesAdmin };
