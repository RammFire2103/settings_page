import "./SettingsPanelAvatar.css";

import avatar from "../../../../../assets/Avatar.png";
import Pencil from "../../../../../assets/Pencil";

function SettingsPanelAvatar() {
  return (
    <div className="settings-panel-avatar">
      <img src={avatar}></img>
      <div className="pencil">
        <Pencil />
      </div>
    </div>
  );
}

export default SettingsPanelAvatar;
