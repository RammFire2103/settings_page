import "./NavRight.css";

import Settings from "../../../../assets/navBarIcons/Settings";
import Notivicationt from "../../../../assets/navBarIcons/Notivication";
import ProfileIcon from "../../../../assets/navBarIcons/ProfileIcon.png";

function NavRight() {
  return (
    <div className="nav-bar__right">
      <form className="nav-bar__form">
        <input
          className="nav-bar__form_input"
          type="search"
          placeholder="Search for something"
        />
      </form>
      <button className="nav-button">
        <Settings />
      </button>
      <button className="nav-button">
        <Notivicationt />
      </button>
      <div>
        <img src={ProfileIcon}></img>
      </div>
    </div>
  );
}

export default NavRight;
