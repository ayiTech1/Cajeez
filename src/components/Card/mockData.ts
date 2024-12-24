import { CardProps } from "./types";

const mockData: CardProps[] = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    companyName: "Tech Corp",
    salary: "60k",
    experience: "2 years",
    location: "New York",
    date: "2023-10-01",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
  {
    id: "2",
    jobTitle: "Backend Developer",
    companyName: "Innovate Ltd",
    salary: "70k",
    experience: "3 years",
    location: "San Francisco",
    date: "2023-09-15",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    companyName: "Web Solutions",
    salary: "80k",
    experience: "5 years",
    location: "Los Angeles",
    date: "2023-08-20",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
  {
    id: "4",
    jobTitle: " DevOps Engineer",
    companyName: "Tech Corp",
    salary: "60k",
    experience: "2 years",
    location: "New York",
    date: "2023-10-01",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
  {
    id: "5",
    jobTitle: "Mobile Developer",
    companyName: "Innovate Ltd",
    salary: "70k",
    experience: "3 years",
    location: "San Francisco",
    date: "2023-09-15",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
  {
    id: "6",
    jobTitle: "Software Developer",
    companyName: "Web Solutions",
    salary: "80k",
    experience: "5 years",
    location: "Los Angeles",
    date: "2023-08-20",
    onViewDetails: (id: string) => console.log(`View details for ${id}`),
  },
];

export default mockData;