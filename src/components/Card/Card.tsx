import React, { useEffect, useState } from "react";
import { FaHeart, FaRegEyeSlash } from "react-icons/fa";
import "./Card.css"; // Import the regular CSS file
import { CardProps } from "./types";

interface CardComponentProps extends CardProps {
  onViewDetails: (id: string) => void;
}

const Card: React.FC<CardComponentProps> = ({
  id,
  jobTitle,
  companyName,
  salary,
  experience,
  location,
  date,
  onViewDetails,
  salaryFilter,
  experienceFilter,
  locationFilter,
  dateFilter,
}) => {
  const [, setHeartColor] = useState<string>("black");

  useEffect(() => {
    const brandElement = document.querySelector(".brand");
    if (brandElement) {
      const computedStyle = window.getComputedStyle(brandElement);
      setHeartColor(computedStyle.backgroundColor || "black");
    }
  }, []);

  // Check if card matches the filter criteria
  const matchesFilters = () => {
    if (salaryFilter && !salary.includes(salaryFilter)) {
      return false;
    }
    if (experienceFilter && !experience.includes(experienceFilter)) {
      return false;
    }
    if (locationFilter && !location.includes(locationFilter)) {
      return false;
    }
    if (dateFilter && date !== dateFilter) {
      return false;
    }
    return true;
  };

  // If it doesn't match the filter, return null to prevent rendering
  if (!matchesFilters()) return null;

  return (
    <div className="card" data-id={id}>
      <div className="card-head">
        <span className="brand">{companyName}</span>
        <FaHeart />
      </div>

      <div className="job-info">
        <span>Full-Time</span> · <span>{date}</span>
      </div>

      <h5 className="job-title">{jobTitle}</h5>

      <div className="salary-location">
        <div className="salary">{salary}</div>
        <div className="experience">{experience}</div>
        <div className="location">{location}</div>
      </div>

      <p className="card-text">
        We are looking for a skilled {jobTitle} to join our team and help build amazing user interfaces.
      </p>

      <button className="card-btn" onClick={() => onViewDetails(id)}>
        View Details
        <span className="icon-container">
          <FaRegEyeSlash className="card-icon" />
        </span>
      </button>
    </div>
  );
};

export default Card;