import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./frontend/components/HomePage";
import MealsPage from "./components/MealsPage";
import MealDetailPage from "./components/MealDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/meals/:id" element={<MealDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
