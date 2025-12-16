import OverviewSVG from "../../assets/Icons/Overview.svg?react";
import TransactionSVG from "../../assets/Icons/Transaction.svg?react";
import BalanceSVG from "../../assets/Icons/wallet.svg?react";
import BillSVG from "../../assets/Icons/Bill.svg?react";
import ExpenseSVG from "../../assets/Icons/Expencces.svg?react";
import GoalSVG from "../../assets/Icons/Goal.svg?react";
import SettingSVG from "../../assets/Icons/Settings.svg?react";
import DetailSVG from "../../assets/Icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/Icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/Icons/Icon2.svg?react";

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG width={size} height={size} stroke={color} {...props} />
  ),
  Transaction: ({ size = 24, color = "currentColor", ...props }) => (
    <TransactionSVG width={size} height={size} stroke={color} {...props} />
  ),
  Balance: ({ size = 24, color = "currentColor", ...props }) => (
    <BalanceSVG width={size} height={size} stroke={color} {...props} />
  ),
  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <BillSVG width={size} height={size} stroke={color} {...props} />
  ),
  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <ExpenseSVG width={size} height={size} stroke={color} {...props} />
  ),
  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <GoalSVG width={size} height={size} stroke={color} {...props} />
  ),
  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <SettingSVG width={size} height={size} stroke={color} {...props} />
  ),
  Detail: ({ size = 24, color = "currentColor", ...props }) => (
    <DetailSVG width={size} height={size} stroke={color} {...props} />
  ),
  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ChevronRightSVG width={size} height={size} stroke={color} {...props} />
  ),
  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <LogoutSVG width={size} height={size} stroke={color} {...props} />
  ),
};

export default Icon;