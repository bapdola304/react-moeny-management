import React from "react";
import "./style.scss";
import { AvatarIcon } from "../../../../utils/icons";

export default function HomeHistoryList() {
  function renderListHistory() {
    return new Array(12).fill(null).map((item, index) => {
      return (
        <div className="home-history-list__item d-flex align-center justify-between mt10">
          <div className="home-history-list__icon d-flex">
            <AvatarIcon width={40} />
            <div className="home-history-list__info ml16">
              <div className="home-history-list__name fw600 fs18">Hưng Ngô</div>
              <div className="home-history-list__date fs15">
                Thứ 2, 06/06/2024
              </div>
              <div className="home-history-list__account fs14">Tài khoản 1</div>
            </div>
          </div>
          <div className="home-history-list__amount fs18">-5.000.000đ</div>
        </div>
      );
    });
  }

  return (
    <div className="home-history-list">
      <div className="home-history-list__title fs18 mt16 mb16">
        Lịch sử thu chi
      </div>
      <div className="home-history-list__content">{renderListHistory()}</div>
    </div>
  );
}
