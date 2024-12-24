export interface CardProps {
  id: string; // Unique ID for the card
  jobTitle: string;
  companyName: string;
  salary: string;
  experience: string;
  location: string;
  date: string; // Date property
  onViewDetails: (id: string) => void; // Callback with the card ID
  salaryFilter?: string; // Optional filter for salary
  experienceFilter?: string; // Optional filter for experience
  locationFilter?: string; // Optional filter for location
  dateFilter?: string; // Optional filter for date
}