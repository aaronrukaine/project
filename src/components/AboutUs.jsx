import React from 'react';

const AboutUs = () => {
  return (
    
    <div className="row col-md-12">
      <div className="row ">
      <div className="row">

        <div className='row col-md-3'>
          <h2>Pet Food and Treats</h2>
          <ul>
            <li>
              This is the largest sector, dominated by firms like J.M. Smucker, Diamond Pet Foods, United Petfood, and Simmons Pet Food. Specialty, raw, and fresh, or minimally processed foods are growing trends, with companies like Primal Pet Group leading in this space
            </li>
            
          </ul>
        </div>

        <div className='row col-md-3'>
          <h2>Pet Products & Supplies</h2>
          <ul>
            <li>
               Innovative toys, enrichment tools, and accessories are key. KONG is a major player in this category.
            </li>
            
            <li>
              All training programs are available.
            </li>
          </ul>
        </div>

        <div className='row col-md-3'>
          <h2>Pet Food Manufacturers</h2>
          <ul>
            
            <li>
              These companies produce specialized, nutritious food. Top companies include Nestlé Purina PetCare and Mars Petcare. Others focus on specific segments, such as Freshpet (fresh food) or Diamond Pet Company (high-quality ingredients)..
            </li>
          </ul>
        </div>

        <div className='row col-md-3'>
          <h2>Veterinary Services</h2>
          <ul>
            <li>
             A rapidly growing sector, with many independent practices consolidating under larger corporate networks.
            </li>
            <li>
              Provided Advanced Cybersecurity training in collaboration with
              Think Cyber.
            </li>
           
          </ul>
        </div>

      </div>
    </div>
      <div className="row justify-content-center">

        {/* About Us */}
        <div className="col-md-4 text-white mb-4 bg-dark">
          <h2 className='text-success'>Know Us</h2>
          <p>
            Tara Pet Store Ltd is dedicated to providing   healthy pets  
            and Cure services. We offer a wide range of pet food, accessories, and care 
            solutions to ensure your pets live happy and healthy lives. 
            Our mission is to bring joy to every pet and pet owner.
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-4 bg-dark text-success p-4 mb-4 rounded">
          <h2 className='text-success'>Contact Us</h2>
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
          <h2 className='text-success'>Stay Connected</h2>

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
  );
};

export default AboutUs;