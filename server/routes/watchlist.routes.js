import express from "express";
import { addCoin, removeCoin } from "../controllers/watchlist.controller.js";

const router = express.Router();

router.post("/addcoin", addCoin);
router.post("/removecoin", removeCoin);

export default router;
