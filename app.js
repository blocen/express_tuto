import express from "express";
import { morganMiddleware } from "./middleware/morgan.js";

const app = express();  
app.use(express.json());
app.use(morganMiddleware);
const port = 3000;

app.get("/", (req, resp) =>  {
  resp.send("hello world...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
