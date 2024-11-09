import React, { useState } from "react";

const ReservationForm = ({ mealId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/reservations/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, meal_id: mealId }),
      });
      if (response.ok) {
        alert("Reservation successful!");
      } else {
        alert("Reservation failed.");
      }
    } catch (error) {
      alert("Error submitting reservation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phonenumber"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />
      <button type="submit">Book Seat</button>
    </form>
  );
};

export default ReservationForm;
