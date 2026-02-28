import Header from "../common/Header";
import Footer from "../common/Footer";


const PrivacyPolicy = () => {

    return (
        <div className="w-[calc(100%-4rem)] 2xl:w-[calc(100%-6rem)]">
            <Header />
            <div className="flex flex-col justify-center items-center pt-12">
                <div className="text-sm text-[#272A59]">
                    Privacy Policy
                </div>
                <h1 className="text-8xl font-semibold uppercase text-[#272A59]">
                    Privacy
                </h1>
                <p2 className="w-5/10 2xl:w-4/10 text-center m-12">
                    We respect your privacy and your rights.
                </p2>
                <div className="w-8/10 2xl:w-6/10 m-2">
                    <h2>Personal information we collect</h2>
                    <p>
                    In order to register on the Platform and identify yourself, we will request your email. To create your profile on the Platform you may include personal information such as your country or city of residence, a photograph, first and last names, education, work experience, and any other additional information you might want to share in your profile. The profile information helps you make the most out of our Services, like helping other professionals find you and finding business opportunities or projects you might be interested in. However, if you do not want this information to be published, you may leave the profile information fields blank or delete the information already provided. When you visit or use our Services, We register data such as frequency of use, date and time Services were accessed, when you see or click a specific content, your content preferences. We use information when you log in, when you read our emails, and Internet protocol ("IP") addresses to identify you and register your use in the Platform. We do not make decisions based on profiles, beyond personalization of advertisement and for the purpose of the legitimate prevention of Internet fraud. We obtain information through other platforms, for example, when you register via Facebook or similar technologies. This might include personal texts or images available in an external website.</p>

                    <h2>Purpose</h2>
                    <p>
                    Rewardgenix as the Party Responsible of Data Handling, will handle your personal data for the following purposes:<br></br><br></br>
                    <ul>
                        <li>1. Manage your registration as Platform user, to identify you and give you access to Services available for registered Platform users.</li>
                        <li>2. Contacting you through email regarding updates or information related to features, products or services and updates, as long as they are needed or reasonable.</li>
                        <li>3. Respond to any request or inquiry you make through the customer service channels available at our Platform.</li>
                        <li>4. We also use your information to generate aggregated non-identifying data. For instance, generate statistics regarding our users, their jobs or areas of expertise, number of impressions or clicks in a specific project or visitor demographics.</li>
                    </ul></p>

                    <h2>Data Protection Rights</h2>
                    <p>
                    As the Party Responsible for Data Handling, we are committed to respecting the confidential nature of your personal data and guaranteeing the full exercise of these rights. At all times, you will have the following rights:</p>

                    <p>Right to access. You have the right to confirm whether we are handling your personal data and, if we are, you have the right to obtain a copy of such data and information regarding the handling.</p>

                    <p>Right to amend. You have the right to correct errors, modify incomplete or wrong data and guarantee the authenticity of the information that is being handled.</p>

                    <p>Right to delete. You have the right to request the deletion of your data without undue delay, if it were being handled wrongfully or if the end to which it was handled or collected has ceased to exist.</p>

                    <p>Right to limitation of handling. You have the right to request that the suspension of the handling of your information if it is illegal or the accuracy of the data has been contested.</p>

                    <p>Right to oppose. You have the right to oppose to the handling of your data when it has been used for purposes of direct marketing or when the handling must be terminated due to a personal situation, except when there is legitimate interest or it is necessary for the exercise or defense of claims.</p>

                    <p>Right not to be subjected to personalized decisions. You have the right of not being subjected to a decision based solely on the automatic handling of your data, including profiling, with binding legal effects or which affects you, except when necessary for the execution of an agreement, as permitted by the law or if you have expressly authorized it.</p>

                    <p>In order to exercise these rights, please send an email to: legal@rewardgenix.com indicating your<br></br><br></br>
                    (i) identity, by sharing your full name and email address used to register or make a purchase, an ID to establish your identity, and <br></br>
                    (ii) the right or rights you're exercising.</p>

                    <p>You may also visit the agency overseeing the protection of data in your country to file a claim or request the protection of your rights, if deemed necessary.</p>

                    <p>The exercise of such rights is free, except when requests are deliberately unfounded or excessive, in which case the individual will be required to bear the processing costs.</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}


export default PrivacyPolicy;