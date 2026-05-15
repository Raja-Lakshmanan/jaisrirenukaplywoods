import { AnimatePresence, motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Contact() {
  const form = useRef();
  const toastTimer = useRef(null);
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  const branches = [
    {
      name: 'Main Address',
      address: '251, N Perumal Maistry St, W Masi St, Madurai Main, Madurai, Tamil Nadu 625001',
      mapSrc: 'https://www.google.com/maps?q=251,N%20Perumal%20Maistry%20St,W%20Masi%20St,Madurai%20Main,Madurai,Tamil%20Nadu%20625001&z=17&output=embed',
      openLink: 'https://maps.app.goo.gl/XbKVdu3P4uGNWe5s5?g_st=aw'
    },
    {
      name: 'Puttu Thoppu Branch',
      address: '125a, Puttu Thoppu Main Rd, Arappalayam, Madurai, Tamil Nadu 625016',
      mapSrc: 'https://www.google.com/maps?q=125a,Puttu%20Thoppu%20Main%20Rd,Ponnagaram,Mangla%20Puram,Padi%20Thurai,Arappalayam,Madurai,Tamil%20Nadu%20625016&z=17&output=embed',
      openLink: 'https://maps.app.goo.gl/Mb1ScBkpcJVDuCtq6?g_st=aw'
    },
    {
      name: 'Arappalayam Branch',
      address: 'NO 17, Arappalayam main road, Madurai, Tamil Nadu 625016',
      mapSrc: 'https://www.google.com/maps?q=NO%2017,Salem%20-%20Madurai%20Rd,Puttuthoppu,Arappalayam,Madurai,Tamil%20Nadu%20625016&z=17&output=embed',
      openLink: 'https://maps.app.goo.gl/kYEsYKzW7sg63erMA?g_st=aw'
    }
  ];

  const contactPersons = [
    {
      name: 'P Gopinath',
      phone: '9894017095',
      callLink: 'tel:+919894017095',
      whatsappLink: 'https://wa.me/919894017095',
    },
    {
      name: 'B Praveen Kumar',
      phone: '8489719447',
      callLink: 'tel:+918489719447',
      whatsappLink: 'https://wa.me/918489719447',
    },
    {
      name: 'S Vinoth Babu',
      phone: '9940013848',
      callLink: 'tel:+919940013848',
      whatsappLink: 'https://wa.me/919940013848',
    },
  ];

  const selectedBranch = branches[selectedBranchIndex];
  const isMobileToast = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  const toastAnimation = isMobileToast
    ? {
      initial: { opacity: 0, y: 36 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 36 },
    }
    : {
      initial: { opacity: 0, x: 80, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 80, y: 20 },
    };

  const showToast = (type, message) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  const goToBranch = (direction) => {
    setSelectedBranchIndex((currentIndex) => (
      (currentIndex + direction + branches.length) % branches.length
    ));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        'service_ebi8347',     // Your Service ID
        'template_7otqo4s',    // Your Template ID
        form.current,
        'P4delT29XxokSszZU'    // Your Public Key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          showToast('success', 'Enquiry sent successfully! We will contact you soon.');
          e.target.reset(); // Clear form after sending
        },
        (error) => {
          console.error('Error:', error.text);
          showToast('error', 'Something went wrong. Please try again or contact us on WhatsApp.');
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={premiumTransition}
        >
          <h2>Contact Us</h2>
          <p className="section-lead">Get product assistance, quotations, and quick delivery support.</p>
          <ul className="contact-list">
            <li>
              <MdEmail />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jairenukaplywoods@gmail.com&su=Product%20Enquiry%20-%20Royal%20Plywood%20House&body=Hello%20Royal%20Plywood%20House,%0D%0A%0D%0AI%20want%20to%20know%20about%20your%20plywood%20products." target='_blank'>jairenukaplywoods@gmail.com</a>
            </li>
          </ul>
          <div className="contact-persons">
            {contactPersons.map((person) => (
              <div className="contact-person-card" key={person.phone}>
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.phone}</p>
                </div>
                <div className="person-actions">
                  <a href={person.callLink}>
                    <FaPhoneAlt /> Call
                  </a>
                  <a href={person.whatsappLink} target="_blank" rel="noreferrer">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="branch-address-list">
            {branches.map((branch) => (
              <div className="branch-address-card" key={`${branch.name}-card`}>
                <h4>
                  <FaMapMarkerAlt />
                  {branch.name}
                </h4>
                <p>{branch.address}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/918489719447" className="btn btn-gold" target="_blank" rel="noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...premiumTransition, delay: 0.08 }}
        >
          <motion.form
            className="contact-form"
            ref={form}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...premiumTransition, delay: 0.08 }}
            onSubmit={sendEmail}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name='name' placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name='email' placeholder="Enter Email Address" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" type='text' name='message' placeholder="Tell us your requirement" required />
            </div>
            <button type="submit" className="btn btn-gold" disabled={sending}>
              {sending ? 'Sending...' : 'Send Enquiry'}
            </button>
          </motion.form>
          <div className="map-placeholder branch-map-card">
            <div className="branch-map-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBranch.name}
                  className="branch-map-slide"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <iframe
                    title={`${selectedBranch.name} Location Map`}
                    src={selectedBranch.mapSrc}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </AnimatePresence>
              <button
                className="map-arrow map-arrow-prev"
                type="button"
                aria-label="Previous branch map"
                onClick={() => goToBranch(-1)}
              >
                ‹
              </button>
              <button
                className="map-arrow map-arrow-next"
                type="button"
                aria-label="Next branch map"
                onClick={() => goToBranch(1)}
              >
                ›
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedBranch.name}-address`}
                className="branch-address"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <strong>{selectedBranch.name}</strong>
                <p>{selectedBranch.address}</p>
              </motion.div>
            </AnimatePresence>
            <div className="branch-map-dots" aria-label="Branch map selector">
              {branches.map((branch, index) => (
                <button
                  key={branch.name}
                  type="button"
                  className={index === selectedBranchIndex ? 'active' : ''}
                  aria-label={`Show ${branch.name}`}
                  aria-current={index === selectedBranchIndex}
                  onClick={() => setSelectedBranchIndex(index)}
                />
              ))}
            </div>
          </div>
          <a
            href={selectedBranch.openLink}
            className="btn btn-outline map-open-btn"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`toast-message ${toast.type}`}
            {...toastAnimation}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{toast.type === 'success' ? '✓' : '!'}</span>
            <p>{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact
