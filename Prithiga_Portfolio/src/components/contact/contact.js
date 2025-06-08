import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [loading, setLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 1000); // Delay to ensure loading animation finishes
    }, 3500); // Loading animation duration (3.5s)

    return () => clearTimeout(loadingTimer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mgdypio","template_faemwf4", form.current,
        "fRmrwX4jJHopiJaZe")
      .then(
        () => {
          setMessage("Message Sent Successfully!");
          setIsSent(true);
          setButtonText("Sent");
          e.target.reset();
          setTimeout(() => {
            setMessage("");
            setIsSent(false);
            setButtonText("Send");
          }, 3000);
        },
        () => {
          setMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {loading ? (
        <div className="loading-container">
          <div className="bouncing-ball"></div>
        </div>
      ) : (
        <>
          <h2
            className={`contact-heading ${isContentLoaded ? "animate-in" : ""}`}
            style={{
              opacity: isContentLoaded ? 1 : 0,
              transition: "opacity 0.6s ease 0.1s",
            }}
          >
            My Contact
          </h2>

          {/* Map and Contact Info Section */}
          <div
            className={`map-info-container ${isContentLoaded ? "animate-in" : ""
              }`}
            style={{
              opacity: isContentLoaded ? 1 : 0,
              transform: isContentLoaded
                ? "translateX(0)"
                : "translateX(-50px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.3392228457756!2d80.19507438854171!3d13.056128209690913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c82ccda17f%3A0x4d132a49b6017b8e!2sVenkatesh%20Nagar%2C%20Virugambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1749368575448!5m2!1sen!2sin" 
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="contact-info">
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Address</h4>
                  <p> No. 12/F3 Narayana Apartments,</p>
                  <p>Venkatesa Nagar, Saligramam, Chennai-600093</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>prithisingar@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaPhoneAlt className="contact-icon" />
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <p>+91 91235 10757</p>
                </div>
              </div>
            </div>
          </div>

          {/* "Let's Connect" Section */}
          <div
            className={`connect-form ${isContentLoaded ? "animate-in" : ""}`}
            style={{
              opacity: isContentLoaded ? 1 : 0,
              transform: isContentLoaded ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            }}
          >
            <h3
              className={`contact-heading ${isContentLoaded ? "animate-in" : ""
                }`}
              style={{
                opacity: isContentLoaded ? 1 : 0,
                transition: "opacity 0.6s ease 0.5s",
              }}
            >
              Let's Connect
            </h3>
            <div className="form-logo-container">
              
              <div className="form-container">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    style={{
                      opacity: isContentLoaded ? 1 : 0,
                      transition: "opacity 0.6s ease 0.6s",
                    }}
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    style={{
                      opacity: isContentLoaded ? 1 : 0,
                      transition: "opacity 0.6s ease 0.7s",
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    style={{
                      opacity: isContentLoaded ? 1 : 0,
                      transition: "opacity 0.6s ease 0.8s",
                    }}
                  />
                  <div className="button-container">
                    <button type="submit">
                      {buttonText}
                      {isSent && <FaPaperPlane className="button-icon" />}
                    </button>
                  </div>
                  {message && (
                    <p
                      className="message"
                      style={{
                        opacity: isContentLoaded ? 1 : 0,
                        transition: "opacity 0.6s ease 0.9s",
                      }}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div
            className={`contact-social-icons ${isContentLoaded ? "animate-in" : ""}`}
            style={{
              opacity: isContentLoaded ? 1 : 0,
              transition: "opacity 0.6s ease 1.0s",
            }}
          >
            <a
              href="https://github.com/Prithiga023"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub profile"
            >
              <FaGithub size={30} /> {/* Requires importing FaGithub from react-icons/fa6 */}
            </a>
            <a
              href="https://www.instagram.com/prithiga_2310/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram profile"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/prithiga-s-67b2b7225/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <Footer
            style={{
              opacity: isContentLoaded ? 1 : 0,
              transition: "opacity 0.6s ease 1.2s",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Contact;