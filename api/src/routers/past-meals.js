import express from "express";
import knex from "../database_client.js";

const pastMealsRouter = express.Router();

pastMealsRouter.get("/", async (req, res) => {
  const now = new Date();
  const past_meals = await knex("meal").select("*").where("when", "<", now);
  res.json(past_meals);
});

export default pastMealsRouter;
