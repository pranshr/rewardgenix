import SolutionsCard from './SolutionsCard'
import Header from '../common/Header'
import Footer from '../common/Footer'



const Solutions = () => {

    const keySolutions = [
        {
            title: "Enablement",
            img: "manish.jpg",
            description:"Lorem Ipsum is simply dummy sample text of the printing and typesetting industry. Lorem Ipsum has been.",
        },
        {
            title: "Engagement",
            img: "manish.jpg",
            description:"Lorem Ipsum is simply dummy sample text of the printing and typesetting industry. Lorem Ipsum has been.",
        },
        {
            title: "Rewards",
            img: "manish.jpg",
            description:"Lorem Ipsum is simply dummy sample text of the printing and typesetting industry. Lorem Ipsum has been.",
        }

    ]

    return (
        <div className="w-[calc(100%-6rem)]">
            <Header />
            <div className="Content">
                <div className="flex flex-col items-center pt-12">
                    <div className="text-sm text-[#272A59]">
                        What do we do
                    </div>
                    <h1 className="text-8xl font-semibold uppercase text-[#272A59]">
                        Solutions
                    </h1>
                </div>
                {/* <div className="w-5/10 mx-auto text-center m-12 text-[32px] leading-10">
                    <p>We bring together experience of 50+ man years and 100+programs in Rewards and Loyalty.</p>
                </div> */}
                <div className="container grid grid-rows-1 grid-cols-3 p-10 justify-items-center gap-x-10 w-fit mx-auto">
                    <SolutionsCard solution={keySolutions[0]} />
                    <SolutionsCard solution={keySolutions[1]} />
                    <SolutionsCard solution={keySolutions[2]} />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Solutions;
