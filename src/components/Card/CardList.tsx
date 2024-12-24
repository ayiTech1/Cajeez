import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardDetails from "./CardDetails"; // Import CardDetails component
import { CardProps } from "./types";
import mockData from "./mockData"; 
import "./Card.css"; 
import { Modal, Button, Form } from "react-bootstrap"; // Import Bootstrap components

interface CardListProps {
  apiEndpoint?: string; // API endpoint to fet
  // ch data from (optional for testing)
}

const CardList: React.FC<CardListProps> = ({ apiEndpoint }) => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);
  const [salaryFilter, setSalaryFilter] = useState<string>("");
  const [experienceFilter, setExperienceFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (apiEndpoint) {
      // Fetch data from the API
      fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data); // Log the fetched data
          setCards(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      // Use mock data for testing
      setCards(mockData);
    }
  }, [apiEndpoint]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    if (name === "salary") setSalaryFilter(value);
    if (name === "experience") setExperienceFilter(value);
    if (name === "location") setLocationFilter(value);
    if (name === "date") setDateFilter(value);
  };

  const handleViewDetails = (id: string) => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      setSelectedCard(card);
    }
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-list-container">
      <div className="card-list">
        {/* Filter link */}
        <div className="filter-link">
        
          <a href="#" onClick={toggleFilters}>click on the link sort by prference</a>
        </div>
        {/* Filter modal */}
        <Modal show={showFilters} onHide={toggleFilters}>
          <Modal.Header closeButton>
            <Modal.Title>Filter Cards</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control as="select" name="salary" value={salaryFilter} onChange={handleFilterChange}>
                  <option value="">All Salaries</option>
                  <option value="50k">50k</option>
                  <option value="60k">60k</option>
                  <option value="70k">70k</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control as="select" name="experience" value={experienceFilter} onChange={handleFilterChange}>
                  <option value="">All Experiences</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control as="select" name="location" value={locationFilter} onChange={handleFilterChange}>
                  <option value="">All Locations</option>
                  <option value="New York">New York</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Los Angeles">Los Angeles</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={dateFilter} onChange={handleFilterChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleFilters}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleFilters}>
              Apply Filters
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Render cards */}
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              onViewDetails={handleViewDetails}
              salaryFilter={salaryFilter}
              experienceFilter={experienceFilter}
              locationFilter={locationFilter}
              dateFilter={dateFilter}
            />
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
      {/* Render card details */}
      {selectedCard && (
        <div className="card-details-sidebar">
          <CardDetails card={selectedCard} onClose={handleCloseDetails} />
        </div>
      )}
    </div>
  );
};

export default CardList;