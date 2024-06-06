import React from "react";
import "./style.scss";
import { AvatarIcon, NotificationIcon } from "../../../../utils/icons";

export default function HomeHeader() {
  return (
    <div className="home-header pt16 d-flex justify-between align-center">
      <div className="home-header__avatar">
        <AvatarIcon width={50} />
      </div>
      <div className="home-header__title">
        <div className="title1">Hello, Hưng Ngô</div>
        <div className="title2">Hôm nay, 06/06/2024, 08:27 AM</div>
      </div>
      <div className="notification">
        <NotificationIcon width={30} />
      </div>
    </div>
  );
}
