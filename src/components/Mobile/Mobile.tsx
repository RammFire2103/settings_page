import "./Mobile.css";

import NavBar from "./NavBar/NavBar";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

function Mobile() {
  return (
    <div className="mobile">
      <NavBar title="Setting" />
      <SettingsPanel />
    </div>
  );
}

export default Mobile;
