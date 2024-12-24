import React from "react";
import CardList from "../../components/Card/CardList"; // Import CardList component
import SearchBar from "../../components/SearchBar"; 

const HomePage: React.FC = () => {

  return (
    <div>
      <SearchBar />
  
      <CardList />
    </div>
  );
};

export default HomePage;