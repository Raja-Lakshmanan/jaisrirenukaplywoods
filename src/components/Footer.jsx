function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Royal Plywood House</h3>
          <p>Your trusted destination for premium plywood and interior materials.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Products</h4>
          <p>Plywood</p>
          <p>Laminates</p>
          <p>Doors</p>
          <p>Adhesives</p>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="ph">
            <p>P Gopinath-9894017095</p>
            <p>B Praveen kumar-8489719447</p>
            <p>S vinoth Babu-9940013848</p>
          </div>
          <p>jairenukaplywoods@gmail.com</p>
          <p>251, Nadar Lane, North Perumal Maistry Street, West Masi Street, Madurai-625001</p>
        </div>
      </div>
      <p className="copyright">
        Copyright © {new Date().getFullYear()} Jai Sri Renuka Plywoods. All rights reserved | Designed By Raja Lakshmanan
      </p>
    </footer>
  )
}

export default Footer
