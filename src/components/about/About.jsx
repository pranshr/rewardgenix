import AboutCard from './AboutCard'
import Header from '../common/Header'
import Footer from '../common/Footer'



const About = () => {

    const keyPeople = [
        {
            name: "Manish Chanana",
            img: "manish.jpg",
            designation: "Co-Founder & CEO",
            description:"Lorem Ipsum is simply dummy sample text of the printing and typesetting industry. Lorem Ipsum has been.",
            email:"",
            mobile:""
        },
        {
            name: "Varun Dutt",
            img: "varun.jpg",
            designation: "Co-Founder & COO",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            email:"",
            mobile:""
        },
        {
            name: "Raj Chengappa",
            img: "raj.jpg",
            designation: "Co-Founder & CBO",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            email:"",
            mobile:""
        }

    ]

    return (
        <div className="w-[calc(100%-6rem)]">
            <Header />
            <div className="Content">
                <div className="flex flex-col items-center pt-12">
                    <div className="text-sm text-[#272A59]">
                        The Leadership
                    </div>
                    <h1 className="text-8xl font-semibold uppercase text-[#272A59]">
                        About Us
                    </h1>
                </div>
                <div className="w-5/10 mx-auto text-center m-12 text-[32px] leading-10">
                    <p>We bring together experience of 50+ man years and 100+programs in Rewards and Loyalty.</p>
                </div>
                <div className="container grid grid-rows-1 grid-cols-3 p-10 justify-items-center gap-x-10 w-fit mx-auto">
                    <AboutCard person={keyPeople[0]} />
                    <AboutCard person={keyPeople[1]} />
                    <AboutCard person={keyPeople[2]} />
                </div>
            </div>
            <img src="./img/faqs.jpg" alt="faq" />
            <Footer />
        </div>
    )
}


export default About;
