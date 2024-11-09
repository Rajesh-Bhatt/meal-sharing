import React from "react";
import { Link } from "react-router-dom";
import MealsList from "./MealsList";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Meal Sharing</h1>
        <p>Your place to share meals and stories</p>
      </header>
      <MealsList limit={5} />
      <Link to="/api/meals">
        <button>See More Meals</button>
      </Link>
      <footer>
        <p>© 2024 Meal Sharing</p>
        <nav>Menu | Contact | About</nav>
      </footer>
    </div>
  );
};

export default HomePage;
