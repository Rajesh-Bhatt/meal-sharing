import React from 'react';
import { Link } from 'react-router-dom';

import "./HomePage.css";
import MealsList from '../../../frontend/components/MealsList.jsx';

const HomePage = () => {
  return (
    <div className='heading'>
      <header>
        <h1>Welcome to Meal Sharing</h1>
        <p>Your place to share meals and stories</p>
      </header>
      <MealsList limit={5} />
      <Link to="http://localhost:3001/api/meals">
        <button className='button'>See More Meals</button>
      </Link>
      <footer>
        <p>© 2024 Meal Sharing</p>
        <nav>Menu | Contact | About</nav>
      </footer>
    </div>
  );
};

export default HomePage;
