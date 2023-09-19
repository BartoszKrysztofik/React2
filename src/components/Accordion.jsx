import { useState } from "react";

const AccordionProfile = ({children}) => {
    const [open, setOpen] = useState(false);

    const setingAccordion = () => {
        setOpen(!open)
    }
    return (
        <div className="profile">
            <button className="profile" onClick={setingAccordion}>Profile</button>
        {open && children}
        </div>
    )
}
export default AccordionProfile