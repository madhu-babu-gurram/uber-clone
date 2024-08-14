import React, { useState } from 'react';
import './RideManagement.css'; // Import the CSS file

const RideManagement = () => {
  // Initial state for rides


    



  const [rides, setRides] = useState([
    {
      id: 1,
      username: 'Jaman',
      email: 'jaman@gmail.com',
      location: 'New York',
      destination: 'Los Angeles',
      status: 'ongoing',
    },
    {
      id: 2,
      username: 'Smitha',
      email: 'smitha@gmail.com',
      location: 'San Francisco',
      destination: 'Seattle',
      status: 'ongoing',
    },
    {
      id: 3,
      username: 'Farah',
      email: 'farah@gmail.com',
      location: 'surat',
      destination: 'Cubic Mall',
      status: 'past',
    },
    {
      id: 4,
      username: 'Nayna',
      email: 'nayna@gmail.com',
      location: 'shopping Mall',
      destination: 'Park',
      status: 'past',
    },
    // Add more rides as needed
  ]);

  // Filter rides into ongoing and past rides
  const ongoingRides = rides.filter((ride) => ride.status === 'ongoing');
  const pastRides = rides.filter((ride) => ride.status === 'past');

  return (
   <>
   <span id="ride"></span>
    <div className="ride-management">
      <h1>Ride Management</h1>
      
      <section>
        <h2>Ongoing Rides</h2>
        <ul>
          {ongoingRides.map((ride) => (
            <li key={ride.id} className="ride-item">
              <strong>Username:</strong> {ride.username}<br />
              <strong>Email:</strong> {ride.email}<br />
              <strong>Location:</strong> {ride.location}<br />
              <strong>Destination:</strong> {ride.destination}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Past Rides</h2>
        <ul>
          {pastRides.map((ride) => (
            <li key={ride.id} className="ride-item">
              <strong>Username:</strong> {ride.username}<br />
              <strong>Email:</strong> {ride.email}<br />
              <strong>Location:</strong> {ride.location}<br />
              <strong>Destination:</strong> {ride.destination}
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
};

export default RideManagement;


