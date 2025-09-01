import express from "express";
import cors from "cors";
import casinoRouter from "./routes/casino.ts";

const app = express();
const port = 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Routes ---
app.use("/api/casino", casinoRouter);

app.get("/", (req, res) => {
  res.send("Hello from TypeScript + Express!");
});

// --- Start server ---
app.listen(port, () => {
  console.log(`Server is running at http://localhost:3000`);
});
