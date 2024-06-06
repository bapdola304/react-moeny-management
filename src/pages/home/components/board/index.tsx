import React from "react";
import "./style.scss";
import { ExpenseIcon, IncomeIcon } from "../../../../utils/icons";

export default function HomeBoard() {
  return (
    <div className="home-board d-flex justify-between align-center">
      <div className="home-board__expense-income-info">
        <div className="expense-income-info__income d-flex align-center justify-center">
          <div className="income__icon mr8 mt10">
            <IncomeIcon width={28} />
          </div>
          <div className="income__amount fs22 fw600">5.000.000đ</div>
        </div>
        <div className="expense-income-info__expense d-flex align-center">
          <div className="expense__icon mr8 mt10">
            <ExpenseIcon width={28} />
          </div>
          <div className="expense__amount fs22 fw600">5.000.000đ</div>
        </div>
      </div>
      <div className="home-board__image">
        <img src="/src/assets/icons/data.svg" alt="expense" width={120} />
      </div>
    </div>
  );
}
