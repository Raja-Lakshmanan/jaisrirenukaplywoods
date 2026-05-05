import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ebi8347',     // ✅ Your Service ID
        'template_7otqo4s',    // ✅ Your Template ID
        form.current,
        'P4delT29XxokSszZU'    // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('✅ Message sent successfully!');
          e.target.reset(); // Clear form after sending
        },
        (error) => {
          console.error('Error:', error.text);
          alert('❌ Failed to send message. Please try again later.');
        }
      );
  };
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={premiumTransition}
        >
          <h2>Contact Us</h2>
          <p className="section-lead">Get product assistance, quotations, and quick delivery support.</p>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt /> 251, Nadar Lane, North Perumal Maistry Street, West Masi Street, Madurai-625001
            </li>
            <li>
              <FaPhoneAlt /> P Gopinath-9894017095
            </li>
            <li>
              <MdEmail />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jairenukaplywoods@gmail.com&su=Product%20Enquiry%20-%20Royal%20Plywood%20House&body=Hello%20Royal%20Plywood%20House,%0D%0A%0D%0AI%20want%20to%20know%20about%20your%20plywood%20products." target='_blank'>jairenukaplywoodsa@gmail.com</a>
            </li>
          </ul>
          <a href="https://wa.me/919894017095" className="btn btn-gold" target="_blank" rel="noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
          <div className="map-placeholder">
            <iframe
              title="Jai Sri Renuka Plywoods location map"
              src="https://www.google.com/maps?q=251,Nadar%20Lane,North%20Perumal%20Maistry%20Street,West%20Masi%20Street,Madurai-625001&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=251,Nadar%20Lane,North%20Perumal%20Maistry%20Street,West%20Masi%20Street,Madurai-625001"
            className="btn btn-outline map-open-btn"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          ref={form}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...premiumTransition, delay: 0.08 }}
          onSubmit={sendEmail}
        >
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name='name' placeholder="Enter your name" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name='email' placeholder="Enter Email Address" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" type='text' name='message' placeholder="Tell us your requirement" required />
          <button type="submit" className="btn btn-gold">
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
