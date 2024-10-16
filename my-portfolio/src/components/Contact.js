import phoneLogo from "../images/phone-logo.svg";
import emailLogo from "../images/email-logo.svg";
import locationLogo from "../images/location.svg";

const Contact = () => {
  return (
    <>
    <h1 className="contact-title">Contact</h1>
    <div className="contact-wrapper">
      <div>
        <div className="contact-box">
          <img src={phoneLogo} alt="phone logo" />
          <p><important>+44 9939 99393939</important></p>
        </div>
        <div className="contact-box">
          <img src={emailLogo} alt="phone logo" />
          <p><import>elhhabdouldiallo@gmail.com</import></p>
        </div>
        <div className="contact-box">
          <img src={locationLogo} alt="phone logo" />
          <p><important>London, UK</important></p>
        </div>
      </div>

      <div className="contact-form">
        <form>
            {/* main form input */}
            <div>
            <div>
                <label for="full-name" ></label>
                <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required/>
            </div>
            <br></br>
            <div>
                <label for="email" ></label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
            </div>
            <br></br>

            <div>
                <label for="enquiry" ></label>
                <select id="enquiry" name="enquiry" >
                    <option value="EDA Academy">EDA Academy</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Partnership">Partnership</option>
                </select>
            </div>
            </div>

            {/* text area */}
            <div>
                <label for="message"></label><br/>
                <textarea id="message" name="message" rows={8} cols={50} placeholder="write your message here">
                </textarea>
            </div>
                <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
