const ContactFormInput = (props) => {

    const { type, field, label, required=false } = props;
    const style = `border border-[#e4e5eb] p-2 ${(type === "checkbox") ? "" : "w-full"}`;

    return (
    <div className={`${(type === "checkbox")? "flex flex-row-reverse justify-end gap-2 items-start 2xl:items-center mb-4" : "mb-4"}`}>
        <label 
            className="font-[300] text-sm"
            htmlFor={field}
        >
            {(required) ? label + " (*)" : label}
        </label>
        
        {(type !== "textarea")?
            <input 
                className={style}
                type={type? type : "text"}
                id={field}
                name={field}
                required={required}
            />
            :
            <textarea
                className={style}
                id={field}
                name={field}
                rows={8}
            />
        }
    </div>
    )

}

export default ContactFormInput;