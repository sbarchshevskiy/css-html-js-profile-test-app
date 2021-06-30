import './Contact.scss';

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
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
          </form>
        </div>
    </div>
  )

}