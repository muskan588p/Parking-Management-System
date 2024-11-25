import React from "react";
import "../styles/ParkingSpace.css";

const ParkingSection = ({ title, slots }) => (
  <div className="parking-section">
    <h2>{title}</h2>
    <div className="slots">
      {slots.map((slot) => (
        <div key={slot} className="slot">
          {slot}
        </div>
      ))}
    </div>
  </div>
);

const ParkingSpace = () => {
  const slotNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="main-container">
      <div className="parking-space">
        <ParkingSection title="2-Wheeler Parking" slots={slotNumbers} />
        <ParkingSection title="3-Wheeler Parking" slots={slotNumbers} />
        <ParkingSection title="4-Wheeler Parking" slots={slotNumbers} />
      </div>
    </div>
  );
};

export default ParkingSpace;
