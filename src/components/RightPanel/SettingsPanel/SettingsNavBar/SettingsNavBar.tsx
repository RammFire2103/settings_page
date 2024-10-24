import "./SettingsNavBar.css";

import SettingsNavBarItem from "./SettingsNavBarItem/SettingsNavBarItem";

function SettingsNavBar() {
  return (
    <nav className="settings-panel__nav-bar">
      <ul className="settings-panel__nav-bar_ul">
        <SettingsNavBarItem isActive={true} title={"Edit Profile"} />
        <SettingsNavBarItem isActive={false} title={"Preferences"} />
        <SettingsNavBarItem isActive={false} title={"Security"} />
      </ul>
    </nav>
  );
}

export default SettingsNavBar;
