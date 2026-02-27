import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactForm from "./ContactForm";

const Contact = () => {

    return (
        <div className="content w-[calc(100%-4rem)] 2xl:w-[calc(100%-6rem)]">
            <Header />
            <div className="flex flex-col items-center pt-12">
                <div className=" text-[#272A59]">
                    Get in touch
                </div>
                <h1>
                    Contact Us
                </h1>
                <div className="grid grid-cols-12 gap-[1.5rem] mt-14 mx-50 mb-20">
                    <div className="col-1 col-span-5 2xl:col-span-4">
                        <h3>
                            We are Rewardgenix and we are here to serve! How can we help you?
                        </h3>
                        <p>
                            If you have any questions about your submission, directory, billing, courses or anything else, we're here to help!
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>  
            <Footer />
        </div>
    )

}

export default Contact;