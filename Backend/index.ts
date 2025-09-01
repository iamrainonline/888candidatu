import express from "express";
import type { Request, Response } from "express"; // ← tip-only import

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
