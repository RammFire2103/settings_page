import "./SettingsPanelForm.css";

import SettingsFormInput from "./SettingsFormInput/SettingsFormInput";

function SettingsPanelForm() {
  return (
    <form className="settings-panel-form">
      <SettingsFormInput
        title="Your Name"
        placeholder="Charlene Reed"
        type="text"
      />
      <SettingsFormInput
        title="User Name"
        placeholder="Charlene Reed"
        type="login"
      />
      <SettingsFormInput
        title="Email"
        placeholder="charlenereed.@gmail.com"
        type="email"
      />
      <SettingsFormInput
        title="Password"
        placeholder="**********"
        type="password"
      />
      <SettingsFormInput
        title="Date of Birth"
        placeholder="25 January 1990"
        type="date"
      />
      <SettingsFormInput
        title="Present Address"
        placeholder="San Jose, California, USA"
        type="text"
      />
      <SettingsFormInput
        title="Permanent Address"
        placeholder="San Jose, California, USA"
        type="text"
      />
      <SettingsFormInput title="City" placeholder="San Jose" type="text" />
      <SettingsFormInput
        title="Postal Code"
        placeholder="Charlene Reed"
        type="number"
      />
      <SettingsFormInput title="Country" placeholder="USA" type="text" />
      <button className="settings-panel-form__button">Save</button>
    </form>
  );
}

export default SettingsPanelForm;
