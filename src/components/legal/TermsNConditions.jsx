import Header from "../common/Header";
import Footer from "../common/Footer";


const TermsNConditions = () => {

    return (
        <div className="w-[calc(100%-4rem)] 2xl: w-[calc(100%-6rem)]">
            <Header />
            <div className="flex flex-col justify-center items-center pt-12">
                <div className="text-sm text-[#272A59]">
                    Terms & Conditions
                </div>
                <h1 className="text-8xl font-semibold uppercase text-[#272A59]">
                    Terms
                </h1>
                <p2 className="w-5/10 2xl:w-4/10 text-center m-12">
                    Lorem Ipsum is simply dummy sample text of the printing and typesetting industry.
                </p2>

                <div className="w-8/10 2xl:w-6/10 m-2">
                    <h2>Introduction, acceptance and general conditions</h2>
                    <p>By accessing our website and/or using our services (the “Site”), you agree to be bound by the following terms and conditions.</p>

                    <p>If you do not agree to be bound by these terms, you should leave the website immediately and refrain from using our services.</p>

                    <p>Any changes to this policy will be posted on this page. By accessing our website after such changes are posted, you indicate your acceptance of the revised policy. You should check this page regularly to ensure you are always aware of our terms and conditions.</p>

                    <p>Rewardgenix does not guarantee the accuracy, reliability or continuity of any of the information on this website. The content and services offered on this website are for general purposes only and are not intended to address your individual requirements.</p>

                    <p>All material contained on this website is the property of Rewardgenix. All rights are reserved and any unauthorized use or reproduction is strictly prohibited. Our content may not be used for commercial purposes unless expressly authorized by Rewardgenix.</p>

                    <p>Websites featured on our site remain the intellectual property of their creators. However, by submitting a site, you agree to its publication on our site and reproduction in other publications produced by Rewardgenix.</p>

                    <p>Rewardgenix accepts no responsibility for the information and/ or content provided on any of our winners' websites.</p>

                    <p>Rewardgenix accepts no responsibility for changes made to any winning site subsequent to its appearance on Rewardgenix. Altered designs and/ or content may be removed from our database with immediate effect if it is felt that the site in its current form does not meet our standards and criteria.</p>

                    <h2>Services and Products Offered</h2>
                    <p>
                    Rewardgenix offers a range of services to support, promote, and connect a global community and other industry stakeholders. These services are accessible through the Rewardgenix website and are governed by these Terms and Conditions, which constitute a legally binding agreement between the user and Rewardgenix.</p>

                    <h2>Contact</h2>
                    <p>If you have any queries about the website or these terms, you can contact us by e-mail or post:</p>
                    <p>
                        support@rewardgenix.com<br></br>
                        Rewardgenix Pvt Ltd<br></br>
                        Mumbai, India
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )

}


export default TermsNConditions;