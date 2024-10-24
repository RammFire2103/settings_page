import "./NavBar.css";

import NavRight from "./NavRight/NavRight";

function NavBar({ title }: { title: string }) {
  return (
    <div className="nav-bar">
      <h1 className="h1-title">{title}</h1>
      <NavRight />
    </div>
  );
}

export default NavBar;
