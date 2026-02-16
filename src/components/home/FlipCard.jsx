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
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-[#232554] justify-center p-5">
                    <h2 className="text-[#A27E60] text-sm font-medium mt-3">
                        Case study heading to go here
                    </h2>
                    <p className="text-[11px] text-white mt-6">
                        End-to-End program experience is a must to deliver business outcomes. End-to-End program experience is a must to deliver business outcomes.
                    </p>
                    <p className="text-[11px] text-white mt-4">
                        - Name Surname
                    </p>
                </div>

            </div>
        </div>
    )

}


export default FlipCard;
