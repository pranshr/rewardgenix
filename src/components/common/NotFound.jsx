import Header from "./Header";
import Footer from "./Footer";


const NotFound = () => {

    return (
        <div className="Content">
            <Header />
            <div className="flex flex-col justify-center items-center pt-12">
                <div className="text-sm text-[#272A59]">
                    Page not found...
                </div>
                <h1 className="text-8xl font-semibold uppercase text-[#272A59]">
                    Coming soon.
                </h1>
                <p2 className="w-5/10 2xl:w-4/10 text-center m-12">
                    Lorem Ipsum is simply dummy sample text of the printing and typesetting industry.
                </p2>
                <div className="h-[400px]"></div>
            </div>
            <Footer />
        </div>
    )

}

export default NotFound;