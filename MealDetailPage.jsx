import React, { useEffect, useState } from 'react';
import ReservationForm from './ReservationForm';
import ReviewForm from './ReviewForm';
import { useParams } from 'react-router-dom';

const MealDetailPage = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/meals/${id}`)
            .then(response => response.json())
            .then(data => setMeal(data))
            .catch(error => console.error("Error fetching meal:", error));
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    return (
        <div>
            <h1>{meal.title}</h1>
            <p>{meal.description}</p>
            <p>Price: ${meal.price}</p>
            {meal.available_reservations ? (
                <ReservationForm mealId={id} />
            ) : (
                <p>Sorry, no available reservations.</p>
            )}
            <ReviewForm mealId={id} />
        </div>
    );
};

export default MealDetailPage;
