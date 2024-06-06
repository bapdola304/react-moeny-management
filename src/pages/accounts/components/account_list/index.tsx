import React from "react";
import "./style.scss";
import { VerticalDotIcon } from "../../../../utils/icons";

export default function AccountList() {
  function renderListAccount() {
    return new Array(12).fill(null).map((item, index) => {
      return (
        <div className="account-list__item d-flex align-center justify-between mt12">
          <div className="account-list__content d-flex align-center">
            <img
              src="/src/assets/icons/wallet.png"
              alt="home"
              width={40}
              height={40}
            />
            <div className="account-list__info ml16">
              <div className="account-list__title fs18 fw600">Wallet</div>
              <div className="account-list__amount">50.000.000 đ</div>
            </div>
          </div>
          <div className="account-list__actions mt8">
            <VerticalDotIcon width={26} />
          </div>
        </div>
      );
    });
  }

  return <div className="account-list">{renderListAccount()}</div>;
}
