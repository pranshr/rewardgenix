import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="bg-[#e5e6f8] p-3">
            <img className="h-10 2xl:h-10 ml-25 hover:cursor-pointer" src="img/logo.png" alt="logo" onClick={() => navigate("/")} />
        </header>
    )

}


export default Header;