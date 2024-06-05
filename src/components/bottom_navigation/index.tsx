import { appRoutes } from "../../routing/Routes";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();
  function renderBottomNavigation() {
    return appRoutes.map((route, index) => {
      return (
        <Link
          to={route.layout + route.path}
          className={
            location.pathname === route.layout + route.path ? "active" : ""
          }
        >
          <div className={route.className}>
            <img src={route.icon} alt="home" width={32} />
          </div>
        </Link>
      );
    });
  }

  return <>{renderBottomNavigation()}</>;
}
