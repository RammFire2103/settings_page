import "./SettingsNavBarItem.css";

function SettingsNavBarItem({
  title,
  isActive,
}: {
  title: string;
  isActive: boolean;
}) {
  return (
    <li
      className={
        isActive
          ? "settings-panel__nav-bar_li settings-panel_nav-bar_li_active"
          : "settings-panel__nav-bar_li"
      }
    >
      {title}
    </li>
  );
}

export default SettingsNavBarItem;
