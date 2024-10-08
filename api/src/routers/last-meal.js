import express from "express";
import knex from "../database_client.js";

const lastMealRouter = express.Router();

lastMealRouter.get("/", async (req, res) => {
  const lastMeal = await knex("meal").orderBy("id", "desc").first();
  res.json(lastMeal);
});

export default lastMealRouter;
