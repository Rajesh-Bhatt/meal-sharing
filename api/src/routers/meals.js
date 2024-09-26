import express from "express";
import knex from "../database_client.js";

const mealsRouter = express.Router();

//Returns all meals
mealsRouter.get("/", async (req, res) => {
  try {
    const meals = await knex("meal").select("*");
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meals" });
  }
});

//Adds a new meal to the database
mealsRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const data = req.body;
    await knex("meal").insert(data);
    res.status(201).json({ message: "created successfully" });
  } catch (error) {
    next(error);
  }
});

//Returns the meal by id
mealsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const meal = await knex("meal").select("*").where("id", id);
    if (meal.length === 0) {
      res.status(404).json({ message: "Meal not found" });
    } else {
      res.json(meal);
    }
  } catch (error) {
    next(error);
  }
});

//Updates the meal by id

mealsRouter.put("/:id", async (req, res) => {
  try {
    const updated = await knex("meal")
      .where({ id: req.params.id })
      .update(req.body);
    if (updated) {
      const updatedMeal = await knex("meal")
        .where({ id: req.params.id })
        .first();
      res.json(updatedMeal);
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update meal" });
  }
});

//Deletes the meal by id
mealsRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await knex("meal").where({ id: req.params.id }).del();
    if (deleted) {
      res.json({ message: "Meal deleted" });
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete meal" });
  }
});

export default mealsRouter;
