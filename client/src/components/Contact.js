import './Contact.scss';
import {useState} from "react";
import emailjs from 'emailjs-com';



export default function Contact() {

  const [message, setMessage] = useState(false)
  const [form, setForm] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
    setForm(form)

    emailjs.sendForm("service_odazgot", "template_te35r3f", event.target, "user_u4nCnFGM0QSd2tmcbls1z"
    ).then(res => {
      console.log('email sent')
    }).catch(error => {
      console.log(error)
    })
  }
  return(
    <div className="contact" id="contact">
        <div className="left-part">
          <div className="right-part">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="name"/>

              <input type="email" placeholder="user-mail"/>
              <textarea name="message" placeholder="Enter your message"></textarea>
              <button type="submit">Send</button>
            </form>
            <div className="email-confirm">
              {message && <span>Thanks, I'll be in touch with you shortly</span>}
            </div>
          </div>
          <img src="media/handshake.png" alt="contact"/>
        </div>

    </div>
  )
}

