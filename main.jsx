import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import TestPage from "./components/TestPage/TestPage.jsx";
import "./main.css";
import MealsList from "../frontend/components/MealsList.jsx";
import MealDetailPage from "../frontend/components/MealDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // This route can be removed and replaced with your own page
  {
    path: "/nested",
    element: <TestPage />,
  },
  {
    path: "/meal",
    element: <MealsPage />,
  },
  {
    path: "/meals/:id",
    element: <MealDetailPage />,
  },
], { future: { v7_startTransition: true } });

// Create a new MealsPage component to fetch and pass meals to MealsList
function MealsPage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/all-meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  return <MealsList meals={meals} />;
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
