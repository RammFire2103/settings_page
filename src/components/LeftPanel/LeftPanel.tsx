import "./LeftPanel.css";

import Logo from "./Logo/Logo";
import NavList from "./NavList/NavList";

function LeftPanel() {
  return (
    <nav className="left-panel">
      <Logo />
      <NavList />
    </nav>
  );
}

export default LeftPanel;
