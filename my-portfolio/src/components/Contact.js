import phoneLogo from "../images/phone-logo.svg"

const Contact = ()=>{
    return(
        <div className="contact-wrapper">
            <h1>Contact</h1>
            <div>
                <img src={phoneLogo} alt="phone logo"/>
                <h2>+44 8876557867</h2>
            </div>
        </div>
    )
}

export default Contact