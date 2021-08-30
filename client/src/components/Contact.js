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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="pink" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,96C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
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