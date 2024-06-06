import React from "react";
import HomeHeader from "./components/header";
import "./style.scss";
import HomeBoard from "./components/board";
import HomeCategoryMenu from "./components/category_menu";
import HomeHistoryList from "./components/history_list";

export default function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBoard />
      <HomeCategoryMenu />
      <HomeHistoryList />
    </div>
  );
}
