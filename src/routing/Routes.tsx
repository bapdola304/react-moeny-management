import Account from "../pages/accounts/Account";
import Category from "../pages/category/Category";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

import homeIcon from "/src/assets/icons/home-outline.svg";
import accountIcon from "/src/assets/icons/cash-outline.svg";
import categoryIcon from "/src/assets/icons/grid-outline.svg";
import profileIcon from "/src/assets/icons/person-outline.svg";
import addIcon from "/src/assets/icons/add-outline.svg";

export const appRoutes = [
  {
    path: "",
    element: <Home />,
    icon: homeIcon,
    layout: "/app",
    className: "main-layout__bottom-menu__icon",
  },
  {
    path: "/accounts",
    element: <Account />,
    icon: accountIcon,
    layout: "/app",
    className: "main-layout__bottom-menu__icon",
  },
  {
    path: "/add-expense",
    element: <Profile />,
    icon: addIcon,
    layout: "/app",
    className: "main-layout__bottom-menu__add",
  },
  {
    path: "/category",
    element: <Category />,
    icon: categoryIcon,
    layout: "/app",
    className: "main-layout__bottom-menu__icon",
  },
  {
    path: "/profile",
    element: <Profile />,
    icon: profileIcon,
    layout: "/app",
    className: "main-layout__bottom-menu__icon",
  },
];
