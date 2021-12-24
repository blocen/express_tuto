import express from "express";
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, resp) =>  {
  resp.send("hello world...");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
