import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'; // Ensure these icons are correctly installed
import "./SearchBar.css"; // Import the custom CSS
import SearchList from "./SearchList"; // Import the SearchList component

const SearchBar: React.FC = () => {
  return (
    <header className="main-header">
    <header className="search-bar-header">
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <div className="search-bar">
            {/* Container for inputs */}
            <div className="input-group">
              {/* Left section: Job search input with search icon */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control rounded-start job-input"
                  placeholder="Search jobs"
                />
                <FaSearch className="search-icon" />
              </div>
              
              {/* Vertical line separator */}
              <div className="vr separator"></div>
              
              {/* Right section: Location input with icon */}
              <div className="input-container">
                <input
                  type="text"
                  className="form-control location-input"
                  placeholder="Search location"
                />
                <FaMapMarkerAlt className="location-icon" />
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* Search button with icon */}
      <button className="search-btn">
        Search <FaSearch className="search-btn-icon" />
      </button>
      {/* Add the SearchList component */}
    
    </header>
    <SearchList />
    </header>
  );
};

export default SearchBar;