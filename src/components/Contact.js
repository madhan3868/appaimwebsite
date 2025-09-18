import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message)'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.title} ${formData.name}`.trim(),
          email: formData.email,
          subject: 'General Inquiry',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        });
        // Reset form
        setFormData({
          title: 'Mr.',
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>CONTACT US</h2>
      <div className="contact-container">
        {/* Left side form */}
        <div className="contact-form">
          <h3><em>Let's work together</em></h3>

          {/* Status Message */}
          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.type === 'success' ? '✅' : '❌'} {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="title">Title</label>
              <select 
                id="title" 
                name="title" 
                value={formData.title}
                onChange={handleInputChange}
                disabled={isSubmitting}
              >
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Your email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-row">
              <textarea 
                placeholder="Your message here..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={isSubmitting ? 'submitting' : ''}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
          </form>

          {/* Social icons */}
          <div className="social-icons">
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>

        {/* Right side map */}
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.489372761486!2d78.5393!3d17.4026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99008e6c1b5d%3A0x8c377f5c8cf9ed41!2sRamanthapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1695551111111"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
