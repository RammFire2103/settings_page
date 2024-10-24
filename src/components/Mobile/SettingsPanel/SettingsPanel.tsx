import "./SettingsPanel.css";

import SettingsNavBar from "./SettingsNavBar/SettingsNavBar";
import SettingsPanelContent from "./SettingsPanelContent/SettingsPanelContent";

function SettingsPanel() {
  return (
    <div className="settings-panel">
      <SettingsNavBar />
      <SettingsPanelContent />
    </div>
  );
}

export default SettingsPanel;
