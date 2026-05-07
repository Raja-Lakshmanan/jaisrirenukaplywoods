import { FaEnvelope, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=jairenukaplywoods@gmail.com&su=Product%20Enquiry%20-%20Royal%20Plywood%20House&body=Hello%20Royal%20Plywood%20House,%0D%0A%0D%0AI%20want%20to%20know%20about%20your%20plywood%20products."

function WhatsAppButton() {
  return (
    <div className="floating-actions">
      <a
        className="float-btn email-float"
        href={gmailComposeUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Send email"
      >
        <FaEnvelope />
      </a>

      <a
        className="float-btn instagram-float"
        href="#"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        className="float-btn whatsapp-float"
        href="https://wa.me/919894017095"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        className="float-btn call-float"
        href="tel:+919894017095"
        aria-label="Call now"
      >
        <FaPhoneAlt />
      </a>
    </div>
  )
}

export default WhatsAppButton
