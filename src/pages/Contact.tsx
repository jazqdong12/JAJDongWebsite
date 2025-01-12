import { useEffect } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import MyButton from "../components/MyButton";
import { FaHome, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const emailServiceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY;
const emailTemplateKey = import.meta.env.VITE_TEMPLATE_KEY;

function Contact() {
  useEffect(() => {
    emailjs.init(emailPublicKey);
  }, []);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .sendForm(
        emailServiceKey,
        emailTemplateKey,
        event.target as HTMLFormElement
      )
      .then(() => {
        alert("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      })
      .catch((error: string) => {
        alert({ error });
      });
  };
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <h2>Office</h2>
          <p>
            <FaHome className="icon-home" />
            405 Brian Ave N, Lehigh Acres, FL 33971
          </p>
          <h2>Hours</h2>
          <p>
            <FaClock className="icon" /> By Appointment Only
          </p>
          <h2>Email</h2>
          <p>
            <FaEnvelope className="icon" />
            jajdonghomes@gmail.com
          </p>
          <h2>Phone</h2>
          <p>
            <FaPhone className="icon" />
            239 - 770 - 7720
          </p>
        </div>
        <div className="contact-border"></div>
        <div className="contact-form">
          <h1>Send A Message</h1>
          <Form id="contact-form" onSubmit={sendEmail}>
            <Form.Group controlId="from_name" className="form-group">
              <Form.Label className="label-medium">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group controlId="from_email" className="form-group">
              <Form.Label className="label-medium">Email</Form.Label>
              <Form.Control
                type="email"
                name="from_email"
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group controlId="from_phone" className="form-group">
              <Form.Label className="label-medium">Phone</Form.Label>
              <Form.Control
                type="tel"
                name="from_phone"
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="form-group">
              <Form.Label className="label-medium">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                className="input-field"
                required
              />
            </Form.Group>

            <MyButton label="Send" type="submit" />
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
