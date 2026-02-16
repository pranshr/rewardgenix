import FlipCard from "./FlipCard";



const CaseStudy = () => {

    return (
            <div className="flex flex-col items-center bg-[#F3F1FE]">
        <h2 className="text-3xl text-[#2B2E5B] my-8 font-semibold uppercase">
            Case Study
        </h2>

        <div className="grid grid-cols-5 gap-x-4 mt-6 mb-19">
            <div className="h-70 w-48 relative -top-5">
                <FlipCard />
            </div>
            <div className="h-70 w-48 relative top-5">
                <FlipCard />
            </div>
            <div className="h-70 w-48 relative -top-5">
                <FlipCard />
            </div>
            <div className="h-70 w-48 relative top-5">
                <FlipCard />
            </div>
            <div className="h-70 w-48 relative -top-5">
                <FlipCard />
            </div>
        </div>
    </div>

    )

}


export default CaseStudy;
