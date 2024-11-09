import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const MealsList = ({ limit }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/meals')
            .then(response => response.json())
            .then(data => setMeals(limit ? data.slice(0, limit) : data))
            .catch(error => console.error("Error fetching meals:", error));
    }, [limit]);

    return (
        <div>
            {meals.map(meal => (
                <Meal key={meal.id} meal={meal} />
            ))}
        </div>
    );
};

export default MealsList;
