const url = "https://swapi.dev/api/starships/";

// Function to fetch all starships
export async function getAllStarships() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch starships");
    }
    const data = await res.json();

    // Map starships to include their images
    const starshipsWithImages = data.results.map((starship) => {
      // Associate each starship with an image URL
      const image = getStarshipImage(starship.name);
      return { ...starship, image }; // Return the starship with the image property
    });

    return starshipsWithImages; // Return starships with images
  } catch (error) {
    console.error("Error fetching starships:", error);
    return []; // Return an empty array in case of an error
  }
}

// Manually associate images with starships
function getStarshipImage(starshipName) {
  const starshipImages = {
    "CR90 corvette":
      "https://starwars-visualguide.com/assets/img/starships/2.jpg",
    "Star Destroyer":
      "https://starwars-visualguide.com/assets/img/starships/3.jpg",
    "Millennium Falcon":
      "https://starwars-visualguide.com/assets/img/starships/21.jpg",
    "Y-wing": "https://starwars-visualguide.com/assets/img/starships/10.jpg",
    "X-wing": "https://starwars-visualguide.com/assets/img/starships/11.jpg",
    "TIE fighter":
      "https://starwars-visualguide.com/assets/img/starships/12.jpg",
    "Slave 1": "https://starwars-visualguide.com/assets/img/starships/21.jpg",
    "Imperial shuttle":
      "https://starwars-visualguide.com/assets/img/starships/22.jpg",
    "Rebel transport":
      "https://starwars-visualguide.com/assets/img/starships/5.jpg",
    "Death Star": "https://starwars-visualguide.com/assets/img/starships/9.jpg",
  };

  // Return the image URL if it exists, or a default image if not
  return (
    starshipImages[starshipName] ||
    "https://via.placeholder.com/200?text=No+Image"
  );
}
