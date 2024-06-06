import React, { useState } from "react";
import "./style.scss";

const menus = ["Tất cả", "Hôm nay", "7 ngày qua", "30 ngày qua"];
export default function HomeCategoryMenu() {
  const [active, setActive] = useState(0);

  function renderCategoryMenu() {
    return menus.map((menu, index) => {
      return (
        <div
          onClick={() => setActive(index)}
          className={`home-category-menu__item mr16 ${
            active === index && "active"
          }`}
        >
          {menu}
        </div>
      );
    });
  }

  return (
    <div className="home-category-menu d-flex">
      <div className="home-category-menu__list">{renderCategoryMenu()}</div>
    </div>
  );
}
