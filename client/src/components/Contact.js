import './Contact.scss';
import {useState} from "react";

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true)
  }
  return(
    <div className="contact" id="contact">
        <div className="left-part">
          <img src="media/handshake.png" alt="contact"/>
        </div>
        <div className="right-part">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <imput type="text" placeholder="Email"/>
            <textarea placeholder="Enter your message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll be in touch with you shortly</span>}
          </form>
        </div>
    </div>
  )

}