import AboutCard from './AboutCard'
import Header from '../common/Header'
import Footer from '../common/Footer'
import FAQSection from '../common/FAQSection'



const About = () => {

    const keyPeople = [
        {
            name: "Manish Chanana",
            img: "manish.jpg",
            designation: "Co-Founder & CEO",
            description:"Business Leader with 30+ years of experience particularly done a lot of work in Rewards and Loyalty services domain and spearheaded the business for India’s largest Rewards & Loyalty solutions company.",
            email:"",
            mobile:""
        },
        {
            name: "Varun Dutt",
            img: "varun.jpg",
            designation: "Co-Founder & COO",
            description:"A highly motivated and results driven loyalty marketing professional with 20+ years extensive experience in Sales & Marketing, Operations, Client Servicing, business development and team management.",
            email:"",
            mobile:""
        },
        {
            name: "Raj Chengappa",
            img: "raj.jpg",
            designation: "Co-Founder & CBO",
            description:"A loyalty and customer engagement professional with 20+ years of experience in implementing and operating Loyalty & Customer experience programs across multiple industries.",
            email:"",
            mobile:""
        }

    ]

    return (
        <div className="w-[calc(100%-4rem)] 2xl:w-[calc(100%-6rem)]">
            <Header />
            <div className="Content">
                <div className="flex flex-col items-center pt-12">
                    <div className="text-sm text-[#272A59]">
                        The Leadership
                    </div>
                    <h1>
                        Team
                    </h1>
                </div>
                <div className="w-5/10 2xl:w-4/10 mx-auto text-center mt-8 mb-4 ">
                    <p2>We bring together experience of 50+ man years and 100+programs in Rewards and Loyalty.</p2>
                </div>
                <div className="container grid grid-rows-1 grid-cols-3 p-10 justify-items-center gap-x-8 2xl:gap-x-10 w-fit mx-auto">
                    <AboutCard person={keyPeople[0]} />
                    <AboutCard person={keyPeople[1]} />
                    <AboutCard person={keyPeople[2]} />
                </div>
            </div>
            <FAQSection />            
            <Footer />
        </div>
    )
}


export default About;
