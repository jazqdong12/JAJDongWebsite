// Replace `YOUR_GOOGLE_API_KEY` with your actual Google Maps API key
const axios = require('axios');

const addresses = [
  {
    date: "February 28, 2025",
    address: "1508 Haviland Ave S, Lehigh Acres, FL 33976",
  },
  {
    date: "February 28, 2025",
    address: "2810 Martin Ave S, Lehigh Acres, FL 33976",
  },
  {
    date: "February 28, 2025",
    address: "4516 26th St SW, Lehigh Acres, FL 33976",
  },
  {
    date: "February 28, 2025",
    address: "4601 14th St SW, Lehigh Acres, FL 33976",
  },
  {
    date: "February 28, 2025",
    address: "4649 29th St SW, Lehigh Acres, FL 33976",
  },
];



const apiKey = "AIzaSyD6n8Xn3TgYM068YhzJ1m8OspiR0gtlk6k"
const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";

async function getCoordinates() {
  const pendingAddresses = [];

  for (const entry of addresses) {
    const url = `${baseUrl}?address=${encodeURIComponent(entry.address)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);

      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        pendingAddresses.push({
          date: entry.date,
          address: entry.address,
          lat: location.lat,
          lng: location.lng,
        });
      } else {
        console.error(`Error for address ${entry.address}: ${response.data.status}`);
      }
    } catch (error) {
      console.error(`Failed to fetch coordinates for address ${entry.address}:`, error.message);
    }
  }

  console.log(JSON.stringify(pendingAddresses, null, 2));
}

getCoordinates();
