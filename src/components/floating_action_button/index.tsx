import React from "react";
import "./style.scss";
import { AddIcon } from "../../utils/icons";

export default function FloatingActionButton() {
  return (
    <div className="floating-action-button">
      <AddIcon width={32} />
    </div>
  );
}
