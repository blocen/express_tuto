import express from 'express';
import { morganMiddleware } from "./middleware/morgan.js";

const app = express();  
app.use(express.json());
app.use(morganMiddleware);
app.set('view engine', 'ejs');
const port = 3000;

app.get("/", (req, resp) =>  {
  // resp.send("hello world...");
  // resp.status(200).send("hello world...");
  resp.status(200).json({message: "some message"});
  // resp.download("home.html");
});

app.get("/home", (req, resp) =>  {
  resp.render("home", { text: "more data" });
});

// const userRouter = require('./routes/users');
import router from './routes/users.cjs';
const userRouter = router;
app.use('/users', userRouter);

// import router from './routes/some.cjs';
// const someRouter = router;
// app.use('/some', someRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
