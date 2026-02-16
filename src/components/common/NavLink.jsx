import { NavLink } from "react-router-dom";

const NavItem = (props) => {

    const { route, label } = props;

    return (
        <li className="py-[15px] pl-[40px] hover:bg-[#011130] group">
            <NavLink to={route} className="text-nowrap text-[#011130] group-hover:text-white" href="#">
                {label}
            </NavLink>
        </li>
    )

}

export default NavItem;
