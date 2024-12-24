import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './Styles/global.css';
import NavBar from "./components/Navbar"; 
import Home from './pages/HomePage'; 
import JobList from './pages/JobList'; 
import Companies from './pages/Companies'; 
import PostJob from './pages/PostJob'; 
import Footer from './components/Footer/Footer';
const App: React.FC = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/companies" element={<Companies />} /> 
        <Route path="/postjob" element={<PostJob />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
