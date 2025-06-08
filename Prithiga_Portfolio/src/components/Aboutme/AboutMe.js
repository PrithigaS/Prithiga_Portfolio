import React, { useEffect, useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";
import profileDark from "../../assets/profile.jpg";
import profileLight from "../../assets/profile.jpg";
import { ThemeContext } from "../ParticleBackground/ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const aboutMeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate(); // Use the navigate function

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const container = aboutMeRef.current;
      const top = container.getBoundingClientRect().top;
      const bottom = container.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Duration: 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle content animations
  useEffect(() => {
    setTimeout(() => {
      if (isVisible && !loading) {
        aboutMeRef.current
          .querySelectorAll(
            ".about-me-title, .about-me-card, .about-me-introduction, .about-me-quote"
          )
          .forEach((element, index) => {
            if (element.classList.contains("about-me-title")) {
              element.style.animation = `slideDown 1s ease forwards`;
            } else if (element.classList.contains("about-me-card")) {
              element.style.animation = `slideUp 1s ease forwards`;
              element.style.animationDelay = `${index * 0.3}s`;
            } else if (
              element.classList.contains("about-me-introduction") ||
              element.classList.contains("about-me-quote")
            ) {
              element.style.animation = `fadeIn 1.3s ease forwards`;
              element.style.animationDelay = `${index * 0.3}s`;
            }
          });
      }
    }, 300);
  }, [isVisible, loading]);

  // Function to handle resume button click
  const handleResumeClick = () => {
    navigate("/resume"); // Navigate to the resume page
  };

  return (
    <section
      className={`about-me-section ${isVisible ? "visible" : ""}`}
      aria-labelledby="about-me-title"
      ref={aboutMeRef}
    >
      {loading ? (
        <div className="loading-container">
          <div className="bouncing-ball"></div>
        </div>
      ) : (
        <div className="about-me-container">
          <h2 id="about-me-title" className="about-me-title">
            👋 About Me
          </h2>
          <div className="about-me-card">
            <div className="about-me-profile-picture">
              <img
                src={isDarkTheme ? profileDark : profileLight}
                alt="Rohan Goyal"
                className="about-me-profile-image"
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
            <div className="about-me-content">
              <p className="about-me-introduction">
                Hello! I'm Prithiga Singarevelu, a driven and enthusiastic Computer Science graduate from the 2025 batch. 🎓 I’m passionate about building innovative web applications and automating workflows that enhance efficiency. 💻✨
              </p>
              <p className="about-me-introduction">
                    While I may be new to the industry, I've spent the last few years diving deep into frontend and backend development, and exploring DevOps practices like CI/CD, containerization, and cloud deployment. 🚀🔧
              </p>
              <p className="about-me-introduction">
                I enjoy turning ideas into real-world solutions and constantly seek out new tools and technologies to expand my skill set. 🌱 My goal is to contribute meaningfully to development teams, while continuously growing as a developer and engineer.
              </p>
              <blockquote className="about-me-quote">
                ""The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt
              </blockquote>
              <div className="about-me-cta-button">
                <button
                  onClick={handleResumeClick}
                  className="about-me-download-resume"
                  aria-label="View Rohan Goyal's Resume"
                >
                  View Resume 📝
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;