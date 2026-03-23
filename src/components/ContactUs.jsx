import React from "react";

const ContactUs = () => {
  const contacts = [
    { img: "/img/phone.png", title: "+254711803601", subtitle: "Phone support" },
    { img: "/img/whatsapp.jpeg", title: "+254787531295", subtitle: "WhatsApp support" },
    { img: "/img/in.png", title: "@taraperstore", subtitle: "Instagram" },
    { img: "/img/x.png", title: "@tarapetstore", subtitle: "Twitter" },
    { img: "/img/fb.png", title: "/yourFacebookPage", subtitle: "Facebook" },
  ];

  const socials = [
    { href: "https://www.facebook.com", src: "/img/fb.png", alt: "Facebook" },
    { href: "https://www.instagram.com", src: "/img/in.png", alt: "Instagram" },
    { href: "https://www.x.com", src: "/img/x.png", alt: "Twitter" },
  ];

  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary mb-3">Let's Talk</h1>
        <p className="lead text-muted">
          Reach out to us via phone, WhatsApp, or social media. We're always here to help!
        </p>
      </div>

      {/* Horizontal Contact Cards */}
      <div className="d-flex gap-4 overflow-auto pb-3 scrollable-cards">
        {contacts.map((contact, i) => (
          <div key={i} className="contact-card p-3 bg-light rounded shadow flex-shrink-0">
            <div className="d-flex align-items-center">
              <img 
                src={contact.img} 
                alt={contact.subtitle} 
                width={60} height={60} 
                className="me-3"
              />
              <div>
                <h5 className="mb-1 fw-bold">{contact.title}</h5>
                <h6 className="mb-0 text-muted">{contact.subtitle}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="row g-4 mt-5 gradient-section p-4 rounded">

        {/* About Us */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow h-100 about-card">
            <h4 className="text-primary mb-3">About Us</h4>
            <p>
              Tara Pet Store Ltd provides healthy pets and care services. 
              We offer a wide range of pet food, accessories, and care solutions to keep your pets happy and healthy.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow h-100 contact-form-card">
            <h4 className="text-primary mb-3">Contact Us</h4>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-3" />
              <textarea placeholder="Leave a comment" className="form-control mb-3" rows="3"></textarea>
              <input type="submit" className="btn btn-primary w-100 py-2 fw-bold" value="Send Message" />
            </form>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow h-100 social-card">
            <h4 className="text-primary mb-3">Stay Connected</h4>
            <div className="mb-3 d-flex gap-3">
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
      <footer className="bg-dark text-center p-4 mt-5 rounded">
        <b className="text-white">Developed by Tarayia &copy; All rights reserved</b>
      </footer>

      {/* Extra CSS */}
      <style>
        {`
          .scrollable-cards::-webkit-scrollbar {
            height: 6px;
          }
          .scrollable-cards::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          .contact-card {
            min-width: 260px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
          }

          .gradient-section {
            background: linear-gradient(135deg, #f0f4ff, #ffffff);
          }

          .about-card, .contact-form-card, .social-card {
            background: linear-gradient(135deg, #fff, #f0f8ff);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .about-card:hover, .contact-form-card:hover, .social-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15);
          }

          .hover-icon {
            transition: transform 0.3s, filter 0.3s;
          }
          .hover-icon:hover {
            transform: scale(1.2);
            filter: brightness(1.3);
          }

          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0,123,255,0.5);
          }
        `}
      </style>

    </div>
  );
};

export default ContactUs;