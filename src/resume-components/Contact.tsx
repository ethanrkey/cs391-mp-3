import { Link } from "react-router-dom";

export default function Contact() {
    return(
        <>
                <h2>Contact Me</h2>
            <div id="contact-sec">
            <div>
                <img id="contact-icons" src="email.png" alt="Email"/>
                <h3>ethankey@bu.edu</h3>
            </div>
            <div>
                <img src="phone.png" alt="Phone"/>
                <h3>+1 (817) 287 - 8935</h3>
            </div>
            <div>
                <img src="linkedin2.png" alt="LinkedIn"/>
                <h3> 
                    <Link to={`https://www.linkedin.com/in/ethan-key/`} target="_blank">in/ethan-key</Link>
                </h3>
            </div>
            <div>
                <img src="snapchat2.png" alt="Snapchat"/>
                <h3>eath.23</h3>
            </div>    
            </div>
        </>
    );
}