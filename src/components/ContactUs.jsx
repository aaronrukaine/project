import React from 'react';

const ContactUs = () => {
  return (
    <div className="container my-4">

      {/* Lets Talk Section */}
      <div>
        <h1 className="mb-4 text-center">Let's Talk</h1>

        <div 
          className="d-flex gap-4"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            paddingBottom: "10px"
          }}
        >

          {/* Phone Support */}
          <div 
            className="d-flex align-items-center p-3 border rounded bg-light"
            style={{ minWidth: "260px", flexShrink: 0 }}
          >
            <img 
              src="/img/phone.png" 
              alt="Phone" 
              width={60} 
              height={60} 
              style={{ objectFit: "contain", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1 fw-bold">+254711803601</h5>
              <h6 className="mb-0">Phone support</h6>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div 
            className="d-flex align-items-center p-3 border rounded bg-light"
            style={{ minWidth: "260px", flexShrink: 0 }}
          >
            <img 
              src="/img/whatsapp.jpeg" 
              alt="WhatsApp" 
              width={60} 
              height={60} 
              style={{ objectFit: "contain", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1 fw-bold">+254787531295</h5>
              <h6 className="mb-0">WhatsApp support</h6>
            </div>
          </div>

          {/* Instagram Support */}
          <div 
            className="d-flex align-items-center p-3 border rounded bg-light"
            style={{ minWidth: "260px", flexShrink: 0 }}
          >
            <img 
              src="/img/in.png" 
              alt="Instagram" 
              width={60} 
              height={60} 
              style={{ objectFit: "contain", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1 fw-bold">@taraperstore</h5>
              <h6 className="mb-0">Instagram</h6>
            </div>
          </div>

          {/* Twitter / X Support */}
          <div 
            className="d-flex align-items-center p-3 border rounded bg-light"
            style={{ minWidth: "260px", flexShrink: 0 }}
          >
            <img 
              src="/img/x.png" 
              alt="X / Twitter" 
              width={60} 
              height={60} 
              style={{ objectFit: "contain", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1 fw-bold">@tarapetstore</h5>
              <h6 className="mb-0">Twitter</h6>
            </div>
          </div>

          {/* Facebook Support */}
          <div 
            className="d-flex align-items-center p-3 border rounded bg-light"
            style={{ minWidth: "260px", flexShrink: 0 }}
          >
            <img 
              src="/img/fb.png" 
              alt="Facebook" 
              width={60} 
              height={60} 
              style={{ objectFit: "contain", marginRight: "15px" }} 
            />
            <div>
              <h5 className="mb-1 fw-bold">/yourFacebookPage</h5>
              <h6 className="mb-0">Facebook</h6>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="row mt-5 dark-section">

        {/* About Us */}
        <div className="col-md-4 text-white mb-4 p-4">
          <h4>About Us</h4>
          <p>
            Tara Pet Store Ltd is dedicated to providing healthy pets and care services. 
            We offer a wide range of pet food, accessories, and care solutions to ensure your pets live happy and healthy lives. 
            Our mission is to bring joy to every pet and pet owner.
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-4 text-success p-4 mb-4">
          <h4>Contact Us</h4>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="form-control mb-3" 
            />
            <textarea 
              placeholder="Leave a comment" 
              className="form-control mb-3"
              rows="3"
            ></textarea>
            <input 
              type="submit" 
              className="btn btn-danger w-100 py-2 fw-bold"
              value="Send Message" 
            />
          </form>
        </div>

        {/* Stay Connected */}
        <div className="col-md-4 text-white mb-4 p-4">
          <h4>Stay Connected</h4>

          <div className="mb-3 d-flex gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/fb.png" alt="Facebook" width="40" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/in.png" alt="Instagram" width="40" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/x.png" alt="X / Twitter" width="40" />
            </a>
          </div>

          <p>Contact us for any inquiries or support. We are always ready to help you and your pets.</p>
          <p><b>Tel:</b> +254 711 803 601</p>
          <p><b>Email:</b> pethub@gmail.com</p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-dark text-center p-4 mt-4 rounded">
        <b className="text-white">
          Developed by Tarayia &copy; All rights reserved
        </b>
      </footer>

      {/* Extra Styles */}
      <style>
        {`
          .dark-section {
            background: linear-gradient(to right, #1c1c1c, #2c2c2c);
            border-radius: 10px;
          }

          /* Optional scrollbar styling */
          .d-flex::-webkit-scrollbar {
            height: 6px;
          }
          .d-flex::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
        `}
      </style>

    </div>
  );
};

export default ContactUs;