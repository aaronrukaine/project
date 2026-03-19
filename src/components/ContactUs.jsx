import React from 'react'

const ContactUs = () => {
  return (
    <div>


        <div>
            <h1>Lets Talk</h1>

            <div className='col-md-4'>

                <div className='row'>
                  
                    <img src="/img/phone.png" alt="" />
                    

                    


                    <b><h1>+254711803601</h1></b>
                    <div>Phone support</div>
                </div>

            </div>
        </div><br />
        <br />
        





        <div className="row col-md-12">
      <div className="row justify-content-center">

        {/* About Us */}
        <div className="col-md-4 text-white mb-4 bg-dark">
          <h4>About Us</h4>
          <p>
            Tara Pet Store Ltd is dedicated to providing   healthy pets  
            and Cure services. We offer a wide range of pet food, accessories, and care 
            solutions to ensure your pets live happy and healthy lives. 
            Our mission is to bring joy to every pet and pet owner.
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-4 bg-dark text-success p-4 mb-4 rounded">
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
              className="btn btn-danger w-100" 
              value="Send Message" 
            />
          </form>
        </div>

        {/* Stay Connected */}
        <div className="col-md-4 text-white mb-4 bg-dark">
          <h4>Stay Connected</h4>

          <div className="mb-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/fb.png" alt="Facebook" width="40" className="me-2" />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/in.png" alt="Instagram" width="40" className="me-2" />
            </a>

            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <img src="/img/x.png" alt="X" width="40" />
            </a>
          </div>

          <p>
            Contact us for any inquiries or support. We are always ready to help you 
            and your pets.
          </p>

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
    </div>
    </div>
  )
}

export default ContactUs