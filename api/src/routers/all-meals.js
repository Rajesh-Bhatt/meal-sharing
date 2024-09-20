import express from "express";
import knex from "../database_client.js";

const allMealsRouter = express.Router();

allMealsRouter.get("/", async (req, res) => {
  const all_meals = await knex("meal").orderBy("id");
  res.json(all_meals);
});

export default allMealsRouter;
