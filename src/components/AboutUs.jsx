import React from "react";

const AboutUs = () => {
  const sectors = [
    {
      title: "Pet Food & Treats",
      text: "Largest sector with premium and specialty foods. Companies like Primal Pet Group lead in fresh and minimally processed foods."
    },
    {
      title: "Pet Products & Supplies",
      text: "Innovative toys, enrichment tools, and accessories are key. KONG is a major player in this category."
    },
    {
      title: "Pet Food Manufacturers",
      text: "Specialized, nutritious foods by Nestlé Purina PetCare, Mars Petcare, Freshpet, and Diamond Pet Company."
    },
    {
      title: "Veterinary Services",
      text: "Growing sector with independent practices consolidating into larger networks."
    }
  ];

  const socials = [
    { href: "https://www.facebook.com", src: "/img/fb.png", alt: "Facebook" },
    { href: "https://www.instagram.com", src: "/img/in.png", alt: "Instagram" },
    { href: "https://www.x.com", src: "/img/x.png", alt: "X" }
  ];

  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        <h1 className="display-4 text-primary fw-bold mb-3">Welcome to Tara Pet Store</h1>
        <p className="lead text-muted">
          Caring for your pets with love, quality, and passion. Explore our products and services designed for your furry friends.
        </p>
      </div>

      {/* Pet Sectors */}
      <div className="row g-4 mb-5">
        {sectors.map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="sector-card glass-card p-4 h-100">
              <h5 className="text-success">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* About, Contact, Socials */}
      <div className="row g-4 mb-5">

        {/* About Us */}
        <div className="col-md-4">
          <div className="about-card glass-card p-4 h-100">
            <h3 className="text-primary mb-3">Know Us</h3>
            <p>
              Tara Pet Store Ltd is dedicated to providing healthy pets and care services. 
              We offer a wide range of pet food, accessories, and care solutions to ensure 
              your pets live happy and healthy lives. Our mission is to bring joy to every pet and pet owner.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="contact-card glass-card p-4 h-100">
            <h3 className="text-primary mb-3">Contact Us</h3>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-3" />
              <textarea placeholder="Leave a comment" className="form-control mb-3" rows="3"></textarea>
              <input type="submit" className="btn w-100 premium-btn" value="Send Message" />
            </form>
          </div>
        </div>

        {/* Social & Info */}
        <div className="col-md-4">
          <div className="social-card glass-card p-4 h-100">
            <h3 className="text-primary mb-3">Stay Connected</h3>
            <div className="mb-3 d-flex align-items-center gap-3">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.src} alt={social.alt} width="50" className="hover-icon" />
                </a>
              ))}
            </div>
            <p>Contact us for inquiries or support. We are always ready to help you and your pets.</p>
            <p><b>Tel:</b> +254 711 803 601</p>
            <p><b>Email:</b> pethub@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="footer text-center p-4 mt-5">
        <b>Developed by Tarayia &copy; All rights reserved</b>
      </footer>
    </div>
  );
};

export default AboutUs;