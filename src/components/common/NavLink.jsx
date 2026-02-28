import { NavLink } from "react-router-dom";

const NavItem = (props) => {

    const { route, label, clickable=true } = props;

    return (
        <li className="py-[10px] pl-[40px] hover:bg-[#011130] group">
            <NavLink to={ (clickable) ? route : null } className={`text-nowrap text-[#011130] ${clickable ? "group-hover:text-white" : ""}`} href="#">
                {label}
            </NavLink>
        </li>
    )

}

export default NavItem;
