import React from "react";
import "./style.scss";

interface IAppHeaderProps {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  actions?: React.ReactNode;
}
export default function AppHeader({
  leading,
  title,
  actions,
}: IAppHeaderProps) {
  return (
    <div className="app-header d-flex align-center justify-between">
      <div className="app-header__leading">{leading}</div>
      <div className="app-header__title">{title}</div>
      <div className="app-header__actions">{actions}</div>
    </div>
  );
}
