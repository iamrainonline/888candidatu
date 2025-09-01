import request from "supertest";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello from TypeScript + Express!");
});

describe("GET /", () => {
  it("should return 200 and hello message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello from TypeScript + Express!");
  });
});
