import "./NavList.css";

import ListItem from "./ListItem/ListItem";

import Accounts from "../../../assets/navListIcons/Accounts";
import CreditCards from "../../../assets/navListIcons/CreditCards";
import Dashboard from "../../../assets/navListIcons/Dashboard";
import Investments from "../../../assets/navListIcons/Investments";
import Loans from "../../../assets/navListIcons/Loans";
import MyPrivileges from "../../../assets/navListIcons/MyPrivileges";
import Services from "../../../assets/navListIcons/Services";
import Settings from "../../../assets/navListIcons/Settings";
import Transactions from "../../../assets/navListIcons/Transactions";

function NavList() {
  return (
    <ul className="nav-list__ul">
      <ListItem icon={<Dashboard />} title={"Dashboard"} isActive={false} />
      <ListItem
        icon={<Transactions />}
        title={"Transactions"}
        isActive={false}
      />
      <ListItem icon={<Accounts />} title={"Accounts"} isActive={false} />
      <ListItem icon={<Investments />} title={"Investment"} isActive={false} />
      <ListItem
        icon={<CreditCards />}
        title={"Credit Cards"}
        isActive={false}
      />
      <ListItem icon={<Loans />} title={"Loans"} isActive={false} />
      <ListItem icon={<Services />} title={"Services"} isActive={false} />
      <ListItem
        icon={<MyPrivileges />}
        title={"My Privileges"}
        isActive={false}
      />
      <ListItem icon={<Settings />} title={"Settings"} isActive={true} />
    </ul>
  );
}

export default NavList;
