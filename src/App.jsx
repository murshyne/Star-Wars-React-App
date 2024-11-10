// App.js
import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api"; // Import the API service
import "./App.css"; // Import your CSS for styling

function App() {
  const [starships, setStarships] = useState([]);

  // Fetch starships when the component mounts
  useEffect(() => {
    async function fetchStarships() {
      const fetchedStarships = await getAllStarships();
      setStarships(fetchedStarships);
    }

    fetchStarships();
  }, []); // Empty array ensures it runs only once after the initial render

  return (
    <div className="App">
      {/* Navbar Section */}
      <nav className="navbar">
        <h1 className="navbar-title">Starships</h1>
      </nav>

      {/* Main Content */}
      <div className="starships-container">
        {starships.length > 0 ? (
          starships.map((starship, index) => (
            <div key={index} className="starship-card">
              {/* Starship Image */}
              <img
                src={starship.image}
                alt={starship.name}
                className="starship-image"
              />
              <h2>{starship.name}</h2>
            </div>
          ))
        ) : (
          <p>Loading starships...</p>
        )}
      </div>
    </div>
  );
}

export default App;
