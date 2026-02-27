import './FlipCard.css';



const FlipCard = () => {

    return (
        <div className="w-full h-full perspective group">
            <div className="relative w-full h-full duration-500 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                    <img
                        src="./img/Layer-11.jpg"
                        alt="Front"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-[#232554] justify-center py-3 px-5">
                    <h2 className="text-[#A27E60] text-[.84rem] 2xl:text-xl font-[700] mt-2 leading-[1rem]">
                        Case study heading to go here
                    </h2>
                    <p className="text-[.78rem] 2xl:text-[1rem] text-white mt-2 leading-[1.2rem]">
                        End-to-End program experience is a must to deliver business outcomes. Experience is a must to deliver business outcomes.
                    </p>
                    <p className="text-[.74rem] 2xl:text-[1rem] text-white mt-2">
                        - Know more
                    </p>
                </div>

            </div>
        </div>
    )

}


export default FlipCard;
