const NavLink = (props) => {

    const { label } = props;

    return (
        <li className="py-[15px] pl-[40px] hover:bg-[#011130] group">
            <a className="text-nowrap text-[#011130] group-hover:text-white" href="#">
                {label}
            </a>
        </li>
    )

}

export default NavLink;
