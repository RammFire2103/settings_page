import "./RightPanel.css";

import NavBar from "./NavBar/NavBar";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

function RightPanel() {
  return (
    <div className="right-panel">
      <NavBar title="Setting" />
      <SettingsPanel />
    </div>
  );
}

export default RightPanel;
