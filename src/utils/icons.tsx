const AvatarIcon = ({ width = 32 }) => (
  <img src={"/src/assets/icons/avatar.svg"} alt="home" width={width} />
);

const DataIcon = ({ width = 32 }) => (
  <img src={"/src/assets/icons/data.svg"} alt="home" width={width} />
);

const AddIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/add-outline.svg"}
    alt="home"
    width={width}
    style={{ filter: "brightness(0) invert(1)" }}
  />
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

const SearchIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/search-outline.svg"}
    alt="home"
    width={width}
    style={{ filter: "invert(100%)" }}
  />
);

const ReloadIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/reload-outline.svg"}
    alt="home"
    width={width}
    style={{ filter: "invert(100%)" }}
  />
);

const VerticalDotIcon = ({ width = 32 }) => (
  <img
    src={"/src/assets/icons/ellipsis-vertical.svg"}
    alt="home"
    width={width}
  />
);
export {
  AvatarIcon,
  DataIcon,
  NotificationIcon,
  ExpenseIcon,
  IncomeIcon,
  SearchIcon,
  ReloadIcon,
  VerticalDotIcon,
  AddIcon,
};
