import SettingsPanelAvatar from "./SettingsPanelAvatar/SettingsPanelAvatar";
import "./SettingsPanelContent.css";
import SettingsPanelForm from "./SettingsPanelForm/SettingsPanelForm";

function SettingsPanelContent() {
  return (
    <div className="settings-panel-content">
      <SettingsPanelAvatar />
      <SettingsPanelForm />
    </div>
  );
}

export default SettingsPanelContent;
