// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";git
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Button = (props) => {

    const { type, label } = props;

    return (
        <button
            type={`${(type) ? type : ""}`}
            className="bg-linear-to-r from-[#916137] to-[#c3966e] text-white py-2.5 px-5 rounded-full capitalize
                        hover:cursor-pointer hover:bg-linear-to-l transition-colors duraction-500"
        >
            <label className="mr-2">{label}</label>
            <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
    )

}

export default Button;