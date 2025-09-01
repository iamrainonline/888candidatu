import { Router } from "express";
import { casinoContent } from "../data/casinoContent.ts";

const router = Router();

router.get("/", (req, res) => {
  res.json(casinoContent);
});

export default router;
