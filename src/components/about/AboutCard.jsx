import './AboutCard.css';



const AboutCard= () => {

    return (
        <div className="h-120 w-100">
            <div className="rounded-lg overflow-hidden">
                <img className="zoom-in" src="./img/maleFace.jpeg" />
            </div>
            <h2 className="text-xl font-[500] mt-3 text-[#272A59]">
                Name Surname
            </h2>
            <h3 className="text-md">
                Designation
            </h3>
            <p className="text-xs mt-1 font-[300]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
        </div>
    )

}


export default AboutCard;
