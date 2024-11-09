import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  return (
    <div>
      <h2>{meal.title}</h2>
      <p>Price: ${meal.price}</p>
      <Link to={`/meals/${meal.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Meal;
