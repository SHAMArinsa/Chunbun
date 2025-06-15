import React, { useState, useEffect } from 'react';

const inputStyle: React.CSSProperties = {
  padding: '12px 15px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  color: '#000',
  backgroundColor: '#fff',
  width: '100%',
  boxSizing: 'border-box',
};

const ConnectWithUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [customISD, setCustomISD] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'countryCode') {
      setFormData({ ...formData, countryCode: value });
      if (value !== 'other') setCustomISD('');
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) return alert('Please enter a valid email address.');
    if (formData.countryCode === 'other' && !/^\+\d{1,4}$/.test(customISD.trim()))
      return alert('Enter a valid ISD code (e.g. +61)');
    if (!/^\d{10}$/.test(formData.phoneNumber))
      return alert('Please enter a valid 10-digit phone number.');
    if (!formData.subject) return alert('Please select a subject.');

    const fullPhone =
      formData.countryCode === 'other'
        ? customISD.trim() + formData.phoneNumber
        : formData.countryCode + formData.phoneNumber;

    try {
      const response = await fetch(`https://api.arinsaaiminds.com/api/v1/enquiries/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: fullPhone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('enquirySessionId', result.session_id || '');
        localStorage.setItem('enquiryFormData', JSON.stringify(formData));
        alert('Thank you for reaching out! We’ll get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+91',
          phoneNumber: '',
          subject: '',
          message: '',
        });
        setCustomISD('');
        window.location.href = '/';
      } else {
        alert('There was a problem submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      aria-label="Connect With Us Background"
      style={{
        backgroundImage: 'url("/image/contact1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <div
        style={{
          position: 'relative',
          padding: '30px 20px',
          maxWidth: '700px',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          boxSizing: 'border-box',
        }}
      >
        <style>
          {`
            @media (max-width: 768px) {
              h1 {
                font-size: 2rem !important;
              }
              p {
                font-size: 1rem !important;
              }
              form {
                gap: 12px !important;
              }
              button {
                font-size: 16px !important;
                padding: 12px !important;
              }
            }
          `}
        </style>

        <h1
          style={{
            marginBottom: '10px',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '2.5rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
          }}
        >
          Connect With Us
        </h1>
        <p
          style={{
            marginBottom: '30px',
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: 1.5,
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
          }}
        >
          We love hearing from you! Reach out to us through our contact page, follow us on social media,
          or visit one of our offices. Let's collaborate to shape the future together.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required style={inputStyle} />

          <div
            className="phone-container"
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%',
            }}
          >
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
              style={{ ...inputStyle, flex: 1, minWidth: '120px' }}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="other">🌍 Other</option>
            </select>

            {formData.countryCode === 'other' && (
              <input
                type="text"
                name="customISD"
                placeholder="Enter ISD code (e.g. +61)"
                value={customISD}
                onChange={(e) => setCustomISD(e.target.value)}
                required
                style={{ ...inputStyle, flex: 1, minWidth: '120px' }}
              />
            )}

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              maxLength={10}
              pattern="\d{10}"
              style={{ ...inputStyle, flex: 2, minWidth: '200px' }}
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              whiteSpace: 'normal',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            <option value="" disabled>
              {isMobile ? 'Select Subject' : 'Need assistance? We’re here to help.'}
            </option>
            <option value="Services for clients">Services for clients</option>
            <option value="Course enquiry">Course enquiry</option>
            <option value="Project Collaboration (For other companies)">
              {isMobile ? 'Project Collaboration' : 'Project Collaboration (For other companies)'}
            </option>
            <option value="Special Live AI Courses">Special Live AI Courses</option>
            <option value="Internship enquiry">Internship enquiry</option>
            <option value="Our product Services">Our product Services</option>
            <option value="Outsourcing">Outsourcing</option>
            <option value="Helping Startup">Helping Startup</option>
            <option value="Career opportunities">Career opportunities</option>
            <option value="Media inquiries">Media inquiries</option>
            <option value="Sponsorships">Sponsorships</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '120px',
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#5D758E',
              color: '#fff',
              fontWeight: '600',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'background-color 0.3s ease',
              width: '100%',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#5D758E')}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectWithUs;
