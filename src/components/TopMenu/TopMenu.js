import { NavLink } from "react-router-dom";
import "./TopMenu.css";
import { TOP_MENU_DATAS } from "../../mocks/top-menu-datas";

function TopMenu() {
  return (
    <div className="top-menu">
      {TOP_MENU_DATAS.map((el) => (
        <NavLink
          key={el.name}
          className="top-menu__link"
          style={({ isActive }) => ({
            color: isActive ? "#1814F3" : "",
            borderBottom: isActive ? "1px solid #1814F3" : "",
          })}
          to={el.key}
        >
          {el.name}
        </NavLink>
      ))}
    </div>
  );
}

export default TopMenu;
