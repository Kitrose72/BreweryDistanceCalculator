import React from 'react';
const Brewery = (props) => {
  const { breweries } = props;
  if (!breweries || breweries.length === 0) return <p>Loading...</p>;
  return (
    <ul>
      <h2>Breweries near Beaver Stadium</h2>
      {breweries.slice(0,3).map((brewery) => {
        const distance = calculateDistance(brewery);
        return (
          <div>{brewery.name} is {distance} miles away</div>
        );
      })}
    </ul>
  );
};

function calculateDistance(brewery){
  //Haversine Methods
  const beaverLat = 40.812195;
  const beaverLon = -77.856102;
  const R = 6371e3; // meters
  const φ1 = beaverLat * Math.PI/180; // φ, λ in radians
  const φ2 = brewery.latitude  * Math.PI/180;
  const Δφ = (brewery.latitude-beaverLat) * Math.PI/180;
  const Δλ = (brewery.longitude-beaverLon) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = (R * c) / 1609.344; //Meters to miles

  return d.toString().substring(0,5);
}

export default Brewery;