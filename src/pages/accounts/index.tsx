import React from "react";
import AppHeader from "../../components/app_header";
import { ReloadIcon, SearchIcon } from "../../utils/icons";
import AccountList from "./components/account_list";
import "./style.scss";
import FloatingActionButton from "../../components/floating_action_button";

export default function Account() {
  return (
    <div className="account">
      <AppHeader
        title="Accounts"
        leading={<SearchIcon width={26} />}
        actions={<ReloadIcon width={24} />}
      />
      <AccountList />
      <div className="account__add-button">
        <FloatingActionButton />
      </div>
    </div>
  );
}
