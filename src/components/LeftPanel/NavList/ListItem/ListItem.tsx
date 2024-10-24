import { ReactNode } from "react";
import "./ListItem.css";

function NavList({
  title,
  icon,
  isActive,
}: {
  title: string;
  icon: ReactNode;
  isActive: boolean;
}) {
  return (
    <li className={isActive ? "list-item list-item_active" : "list-item"}>
      {icon} <div className="list-item__title">{title}</div>
    </li>
  );
}

export default NavList;
