import ContactFormInput from "./ContactFormInput";
import Button from "../common/Button";



const ContactForm = () => {

    return (
        <form className="col-start-7 col-span-6">
            <ContactFormInput field="name" label="NAME" />
            <ContactFormInput field="email" label="EMAIL" type="email" required={true} />
            <ContactFormInput field="mobile" label="MOBILE" type="number" required={true} />
            <ContactFormInput field="whatsup" label="WHAT'S UP" type="textarea"  />
            <ContactFormInput field="terms " label="I have read and accepted the Terms and Conditions and Privacy Policy" type="checkbox" required={true} />
            <div className="my-6" />
            <Button label="submit" type="submit" />
        </form>
    )

}

export default ContactForm;