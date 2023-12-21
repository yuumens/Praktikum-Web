import { useState } from "react";
import './Contact.css'
import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactComponents = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const alertMessage =
          "Full Name: " +
          formData.fullName +
          "\n" +
          "Email Address: " +
          formData.emailAddress +
          "\n" +
          "Phone Number: " +
          formData.phoneNumber +
          "\n" +
          "Subject: " +
          formData.subject +
          "\n" +
          "Message: " +
          formData.message;
        alert(alertMessage);
      };

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Pilar Kontinental - Contact Us</title>
        </Helmet>
    </HelmetProvider>
    <section className="contact-start" id="contact-us">
    </section>
    <section className="contact-area">
    <div className="container-sm">
      <div className="col-10">
        <div className="section-title mt-40">
          <h3 className="title">Get in touch</h3>
        </div>
        <div className="contact-form form-style-four ">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Full Name</label>
                  <div className="input-items default custom-input">
                    <i className="lni lni-user" />
                    <input 
                      type="text"
                      name='fullName' 
                      placeholder="Full name" 
                      value={formData.fullName} 
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Email Address</label>
                  <div className="input-items default">
                    <i className="lni lni-envelope" />
                    <input 
                      type="text" 
                      name='emailAddress'
                      placeholder="example@gmail.com"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Phone Number</label>
                  <div className="input-items default">
                    <i className="lni lni-phone" />
                    <input 
                      type="text"
                      name='phoneNumber' 
                      placeholder="Your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-6">
                <div className="form-input mt-15">
                  <label>Subject</label>
                  <div className="input-items default">
                    <i className="lni lni-bubble" />
                    <input 
                      type="text" 
                      name='subject'
                      placeholder="Type here"
                      value={formData.subject}
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-12">
                <div className="form-input mt-15">
                  <label>Your Message</label>
                  <div className="input-items default">
                    <i className="lni lni-pencil-alt" />
                    <textarea
                      placeholder="Type your message here"
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* form input */}
              </div>
              <div className="col-md-12">
                <div className="single-form mt-15">
                  <div className="input-form rounded-buttons">
                    <button
                      className="btn primary-btn rounded-full"
                      type="submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default ContactComponents