import React, { useState, useEffect } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const experienceData = [
    {
      company: "AMS ENGINEERING TECHNOLOGIES",
      position: "Web developer (Intern) ",
      duration: "jul 2023 - aug 2023",
      description: [
        "Collaborated with a team to design, develop, and deploy a responsive business website for AMS Engineering Technologies, significantly enhancing the company's digital visibility and client engagement.",
        "Contributed to both front-end and back-end development, integrating modern UI/UX design principles and ensuring seamless user interaction across devices.",
        "Worked closely with stakeholders to gather requirements, iterate on design feedback, and implement functionalities that align with the company’s business objectives.",
        "Assisted in optimizing website performance and security, resulting in faster load times, improved accessibility, and a stronger online brand presence.",
      ],

    },
    {
      company: " JPMORGAN CHASE & CO ",
      position: "Data Analyst (Virtual Internship through Forage)",
      duration: "Jun 2023-jul 2023",
      description: [
        "Developed hands-on skills by working with real-time stock price data feeds, applying financial data concepts in a simulated trading environment using JPMorgan Chase & Co. proprietary frameworks and tools.",
        "Designed and implemented visual data representations tailored for traders, enhancing clarity and aiding rapid decision-making through intuitive dashboards and charts.",
        "Completed an optional bonus task involving open-source contributions, demonstrating initiative, collaboration, and a strong grasp of industry-relevant technologies.",
        "Gained practical experience in financial data analysis, UI development, and working within enterprise-grade toolsets, preparing for real-world FinTech challenges.",
      ],

    },
    {
      company: "Ava-Soft",
      position: "Dev Ops(cloud) Intern",
      duration: "May 2025 - Jun 2025",
      description: [
        "Assisted in setting up CI/CD pipelines using GitHub Actions, streamlining development workflows and reducing manual deployment time by 40%.",
        "Gained hands-on experience with cloud services on AWS, including EC2, S3, and IAM, to provision and manage scalable infrastructure.",
        "Utilized Docker to containerize applications and simplify environment consistency across development and production.",
        "Monitored system performance using tools like CloudWatch and implemented basic alerting mechanisms for service uptime.",
        "Wrote and maintained shell scripts to automate routine tasks, improving system reliability and operational efficiency.",
      ],
    },
  ];

  useEffect(() => {
    if (selectedExperience) {
      setTimeout(() => setShowModal(true), 50);
    } else {
      setShowModal(false);
    }
  }, [selectedExperience]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedExperience(null), 400);
  };

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-inner">
              <div className="experience-card-front">
                <h3 className="company-name">{exp.company}</h3>
                <h4 className="position-name">{exp.position}</h4>
                <p className="experience-description">{exp.duration}</p>
              </div>
              <div className="experience-card-back">
                <button
                  className="view-more-button"
                  onClick={() => setSelectedExperience(exp)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {selectedExperience && (
        <div
          className={`experience-modal ${showModal ? "active" : ""}`}
          onClick={closeModal}
        >
          <div
            className="experience-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>

            <div className="header">
              <h2>{selectedExperience.company}</h2>
              <div className="duration">{selectedExperience.duration}</div>
            </div>

            <h3>{selectedExperience.position}</h3>

            {/* Display description as bullet points */}
            <ul className="experience-points">
              {selectedExperience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
