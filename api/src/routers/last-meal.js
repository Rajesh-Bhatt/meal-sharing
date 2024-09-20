import express from "express";
import knex from "../database_client.js";

const lastMealRouter = express.Router();

lastMealRouter.get("/", async (req, res) => {
  const last_meal = await knex("meal").orderBy("id", "desc").first();
  res.json(last_meal);
});

export default lastMealRouter;
