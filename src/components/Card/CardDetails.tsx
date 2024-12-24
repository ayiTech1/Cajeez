import React, { useEffect, useState } from "react";
import { FaHeart, FaPaperPlane, FaClock, FaCalendarAlt } from "react-icons/fa"; // Import icons
import { CardProps } from "../Card/types"; // Correct import path for types
import "./CardDetails.css";

interface CardDetailsProps {
  card: CardProps;
  onClose: () => void; // Callback to close the details view
}

const CardDetails: React.FC<CardDetailsProps> = ({ card }) => {
  const [heartColor, setHeartColor] = useState<string>("black");

  useEffect(() => {
    // Dynamically get the background color of the .brand element
    const brandElement = document.querySelector(".brand");
    if (brandElement) {
      const computedStyle = window.getComputedStyle(brandElement);
      setHeartColor(computedStyle.backgroundColor || "black");
    }
  }, []);

  return (
    <div className="card-details">
      <div className="card-head-details">
        <span className="brand-card-details">{card.companyName}</span>
        <FaHeart style={{ color: heartColor, cursor: "pointer" }} />
      </div>

      <div className="card-details-job-info">
        <span>Full-Time</span> · <span>{card.date}</span>
      </div>

      <h5 className="card-details-job-title">{card.jobTitle}</h5>

      <p className="company-name-details">
        <a
          href="https://www.techcorp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {card.companyName}
        </a>
      </p>

      <div className="salary-location">
        <div className="salary">{card.salary}</div>
        <div className="experience">{card.experience}</div>
        <div className="location">{card.location}</div>
      </div>

      <p className="card-text">
        We are looking for a skilled {card.jobTitle} to join our team and help build amazing user interfaces.
      </p>

      <button className="btn">
        Apply Now
        <span className="icon-container">
          <FaPaperPlane />
        </span>
      </button>

      <hr></hr>

      <div>
        <h6>Job Details</h6>

        <div style={styles.iconWrapper}>
          <FaClock style={styles.icon} />
          <span>Shift</span>
        </div>
        <div>
          <h6> Day shift</h6>
        </div>

        <div style={styles.iconWrapper}>
          <FaCalendarAlt style={styles.icon} />
          <span>Scheduling</span>
        </div>
        <div className="job">
          <h6> 40 hours a week shift</h6>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h6>Job Benefits</h6>
        </div>
        <div style={styles.iconWrapper}>
          <FaCalendarAlt style={styles.icon} />
          <span>Advantages and offers</span>
        </div>
        <ul>
          <li>Dental insurance</li>
          <li>Health insurance</li>
          <li>Vision insurance</li>
          <li>Retirement plan</li>
        </ul>
      </div>

      <hr />

      <div>
        <h6>Full Description</h6>
        <p>We are looking for a skilled {card.jobTitle} to join our team and help build amazing user interfaces.</p>
      </div>

      <hr />

      <button className="card-btn">
        Report job
        <span className="icon-container">
          <FaPaperPlane className="card-icon"/>
        </span>
      </button>
    </div>
  );
};

const styles = {
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "13px",
    color: "black" // Icon color
  },
};

export default CardDetails;