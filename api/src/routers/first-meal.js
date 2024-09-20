import express from "express";
import knex from "../database_client.js";

const firstMealRouter = express.Router();

firstMealRouter.get("/", async (req, res) => {
  const first_meal = await knex("meal").orderBy("id", "asc").first();
  res.json(first_meal);
});

export default firstMealRouter;
