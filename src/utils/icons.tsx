const AvatarIcon = ({ width = 32 }) => (
  <img src={"/src/assets/icons/avatar.svg"} alt="home" width={width} />
);

const DataIcon = ({ width = 32 }) => (
  <img src={"/src/assets/icons/data.svg"} alt="home" width={width} />
);

const NotificationIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/notifications-outline.svg"}
    alt="home"
    width={width}
  />
);
const ExpenseIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/arrow-back-circle-outline.svg"}
    alt="home"
    width={width}
  />
);

const IncomeIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/arrow-forward-circle-outline.svg"}
    alt="home"
    width={width}
  />
);
export { AvatarIcon, DataIcon, NotificationIcon, ExpenseIcon, IncomeIcon };
