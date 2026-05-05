import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logo from '../assets/logo-navbar-cropped.png'

const navLinks = ['Home', 'About', 'Products', 'Brands', 'Gallery', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    const navOffset = 84
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
    window.history.replaceState(null, '', `#${sectionId}`)
    setMenuOpen(false)
  }

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.toLowerCase())

    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const navOffset = 120
      const scrollPosition = window.scrollY + navOffset
      let currentSection = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) {
          return
        }
        if (scrollPosition >= section.offsetTop) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo navbar-logo" onClick={(event) => scrollToSection(event, 'home')}>
        <img src={logo} alt="Jai Sri Renuka Plywoods Logo" />
      </a>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(event) => scrollToSection(event, link.toLowerCase())}
            className={activeSection === link.toLowerCase() ? 'active' : ''}
            aria-current={activeSection === link.toLowerCase() ? 'page' : undefined}
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="menu-btn"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </header>
  )
}

export default Navbar
