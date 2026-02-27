import './AboutCard.css';



const AboutCard= (props) => {

    const {person} = props;

    return (
        <div className="w-70 2xl:w-90">
            <div className="rounded-2xl overflow-hidden">
                <img className="zoom-in aspect-9/10" src={`./img/${person.img}`} />
            </div>
            <h2 className="mt-6 text-3xl 2xl:text-4xl font-[500] mt-3 text-[#1c1f5d]">
                {person.name}
            </h2>
            <h3 className=" text-xl font-[500] my-2 2xl:my-3">
                {person.designation}
            </h3>
            <p>
                {person.description}
            </p>
        </div>
    )

}

export default AboutCard;
