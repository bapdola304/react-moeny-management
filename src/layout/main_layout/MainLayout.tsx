import React from "react";
import "./style.scss";
import BottomNavigation from "../../components/bottom_navigation";
import { AppRouter } from "../../routing/Router";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout__content">
        <AppRouter />
      </div>
      <div className="main-layout__bottom-menu">
        <BottomNavigation />
      </div>
    </div>
  );
}
