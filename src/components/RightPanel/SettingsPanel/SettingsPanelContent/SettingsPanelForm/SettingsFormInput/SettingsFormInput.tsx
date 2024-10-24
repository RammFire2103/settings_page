import "./SettingsFormInput.css";

function SettingsFormInput({
  type,
  placeholder,
  title,
}: {
  type: string;
  placeholder: string;
  title: string;
}) {
  return (
    <div className="settings-form-input">
      <span className="span">{title}</span>
      <input className="settings-form-input__input" type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default SettingsFormInput;
