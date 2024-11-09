import React, { useState } from "react";

const ReviewForm = ({ mealId }) => {
  const [reviewData, setReviewData] = useState({
    title: "",
    description: "",
    rating: "",
  });

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...reviewData, meal_id: mealId }),
      });
      if (response.ok) {
        alert("Review submitted!");
      } else {
        alert("Review submission failed.");
      }
    } catch (error) {
      alert("Error submitting review");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Review Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
