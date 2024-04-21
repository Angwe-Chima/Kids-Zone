import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

function GoogleMap() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4104426888416!2d3.624233574992476!3d6.469578793522149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf979fee11457%3A0xa5d6185fb1770461!2sAptech%20Computer%20Education%20Ajah%20Centre!5e0!3m2!1sen!2sng!4v1713139513988!5m2!1sen!2sng";

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    // Set errors if any, otherwise submit the form
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form
      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contactPage">
      <GoogleMap className="googleMap" />

      <section>
        <h1>Contact Us</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="error">{errors.subject}</div>}
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
            <button className="Btn" type="submit">Submit</button>
          </form>
        </div>
      </section>
      <div className="reachOut">
        <h1>Reach Out To Us</h1>
        <div className="socialMedia">
          <div>
            <FaFacebook className="reachIcon" />
            <p>Facebook</p>
          </div>
          <div>
            <FaInstagram className="reachIcon" />
            <p>Instagram</p>
          </div>
          <div>
            <TiSocialTwitter className="reachIcon" />
            <p>X</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
