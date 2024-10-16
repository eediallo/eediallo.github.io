import phoneLogo from "../images/phone-logo.svg"
import emailLogo from "../images/email-logo.svg"
import locationLogo from "../images/location.svg"


const Contact = ()=>{
    return(
        <div className="contact-wrapper">
            <h1>Contact</h1>
            <div className="contact-box">
                <img src={phoneLogo} alt="phone logo"/>
                <h2>+44 8876557867</h2>
            </div>
            <div className="contact-box">
                <img src={emailLogo} alt="phone logo"/>
                <h2>elhhabdouldiallo@gmail.com</h2>
            </div>
            <div className="contact-box">
                <img src={locationLogo} alt="phone logo"/>
                <h2>London, UK</h2>
            </div>
        </div>
    )
}

export default Contact