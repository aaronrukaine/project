import React from "react";

const ContactUs = () => {
  const contacts = [
    { img: "/img/phone.png", title: "+254711803601", subtitle: "Phone support", link: "tel:+254711803601", color: "#ff5f6d" },
    { img: "/img/whatsapp.jpeg", title: "+254787531295", subtitle: "WhatsApp support", link: "https://wa.me/254787531295", color: "#25d366" },
    { img: "/img/in.png", title: "@taraperstore", subtitle: "Instagram", link: "https://www.instagram.com/taraperstore", color: "#c13584" },
    { img: "/img/x.png", title: "@tarapetstore", subtitle: "Twitter", link: "https://www.x.com/tarapetstore", color: "#1da1f2" },
    { img: "/img/fb.png", title: "/yourFacebookPage", subtitle: "Facebook", link: "https://www.facebook.com/yourFacebookPage", color: "#1877f2" },
  ];

  const socials = [
    { href: "https://www.facebook.com", src: "/img/fb.png", alt: "Facebook", color: "#1877f2" },
    { href: "https://www.instagram.com", src: "/img/in.png", alt: "Instagram", color: "#c13584" },
    { href: "https://www.x.com", src: "/img/x.png", alt: "Twitter", color: "#1da1f2" },
    { href: "https://wa.me/254787531295", src: "/img/whatsapp.jpeg", alt: "WhatsApp", color: "#25d366" }
  ];

  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div className="hero-section text-center mb-5 p-4 rounded shadow">
        <h1 className="display-4 text-primary mb-3 fw-bold">Let's Talk</h1>
        <p className="lead text-muted">
          Reach out to us via phone, WhatsApp, or social media. We're always here to help!
        </p>
      </div>

      {/* Horizontal Contact Cards */}
      <div className="d-flex gap-4 overflow-auto pb-3 scrollable-cards">
        {contacts.map((contact, i) => (
          <a 
            key={i} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card glass-card flex-shrink-0 d-flex align-items-center gap-3 p-3"
            style={{ '--blur-color': contact.color }}
          >
            <img src={contact.img} alt={contact.subtitle} width={60} height={60} className="rounded-circle border border-2"/>
            <div>
              <h5 className="mb-1 fw-bold">{contact.title}</h5>
              <h6 className="mb-0 text-muted">{contact.subtitle}</h6>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="row g-4 mt-5 gradient-section p-4 rounded">

        {/* About Us */}
        <div className="col-md-4">
          <div className="about-card glass-card p-4 h-100">
            <h4 className="text-primary mb-3">About Us</h4>
            <p>
              Tara Pet Store Ltd provides healthy pets and care services. 
              We offer a wide range of pet food, accessories, and care solutions to keep your pets happy and healthy.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="contact-form-card glass-card p-4 h-100">
            <h4 className="text-primary mb-3">Contact Us</h4>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-3 px-3 py-2"/>
              <textarea placeholder="Leave a comment" className="form-control mb-3 px-3 py-2" rows="3"></textarea>
              <input type="submit" className="btn premium-btn w-100 py-2 fw-bold shadow-sm" value="Send Message"/>
            </form>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="col-md-4">
          <div className="social-card glass-card p-4 h-100">
            <h4 className="text-primary mb-3">Stay Connected</h4>
            <div className="d-flex gap-3 mb-3 justify-content-start align-items-center">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" style={{ '--blur-color': social.color }}>
                  <img src={social.src} alt={social.alt} width="50" className="hover-icon"/>
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

export default ContactUs;