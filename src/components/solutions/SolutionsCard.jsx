import './SolutionsCard.css';



const SolutionsCard= (props) => {

    const {solution} = props;

    return (
        <div className="w-70 2xl:w-90">
            <div className="rounded-2xl overflow-hidden">
                <img className="zoom-in aspect-9/10" src={`./img/${solution.img}`} />
            </div>
            <h2 className="mt-6 text-2xl 2xl:text-4xl font-[500] mt-4 text-[#1c1f5d]">
                {solution.title}
            </h2>
            <p className="text-[1rem] 2xl:text-[1.125rem] mt-5 font-[400]">
                {solution.description}
            </p>
        </div>
    )

}


export default SolutionsCard;
