import Dashboard_Icon from "../images/home_icon.svg";
import Transactions_Icon from "../images/transfer_icon.svg";
import Accounts_Icon from "../images/user_icon.svg";
import Investments_Icon from "../images/economic-investment_icon.svg";
import Credit_Icon from "../images/credit-card_icon.svg";
import Loans_Icon from "../images/loan_icon.svg";
import Services_Icon from "../images/service_icon.svg";
import Privileges_Icon from "../images/econometrics_icon.svg";
import Settings_Icon from "../images/settings_icon.svg";

// Active
import Dashboard_Icon_Active from "../images/active/home_icon_active.svg";
import Transactions_Icon_Active from "../images/active/transfer_icon_active.svg";
import Accounts_Icon_Active from "../images/active/user_icon_active.svg";
import Investments_Icon_Active from "../images/active/economic-investment_icon_active.svg";
import Credit_Icon_Active from "../images/active/credit-card_icon_active.svg";
import Loans_Icon_Active from "../images/active/loan_icon_active.svg";
import Services_Icon_Active from "../images/active/service_icon_active.svg";
import Privileges_Icon_Active from "../images/active/econometrics_icon_active.svg";
import Settings_Icon_Active from "../images/active/settings_icon_active.svg";

export const NAVBAR_DATAS = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: Dashboard_Icon,
    active: Dashboard_Icon_Active,
  },
  {
    key: "/transactions",
    label: "Transactions",
    icon: Transactions_Icon,
    active: Transactions_Icon_Active,
  },
  {
    key: "/accounts",
    label: "Accounts",
    icon: Accounts_Icon,
    active: Accounts_Icon_Active,
  },
  {
    key: "/investments",
    label: "Investments",
    icon: Investments_Icon,
    active: Investments_Icon_Active,
  },
  {
    key: "/cards",
    label: "Credit Cards",
    icon: Credit_Icon,
    active: Credit_Icon_Active,
  },
  {
    key: "/loans",
    label: "Loans",
    icon: Loans_Icon,
    active: Loans_Icon_Active,
  },
  {
    key: "/services",
    label: "Services",
    icon: Services_Icon,
    active: Services_Icon_Active,
  },
  {
    key: "/privileges",
    label: "My Privileges",
    icon: Privileges_Icon,
    active: Privileges_Icon_Active,
  },
  {
    key: "/",
    label: "Setting",
    icon: Settings_Icon,
    active: Settings_Icon_Active,
  },
];
