import express from 'express';
import { morganMiddleware } from "./middleware/morgan.js";

const app = express();  
// middleware runs from top to bottom
app.use(express.json());
app.use(morganMiddleware);
app.use(logger);  
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const port = 3000;

// logger; and more middleware to be used on indivudual endpoints
app.get("/", auth, logger, (req, resp) =>  {
  // resp.send("hello world...");
  // resp.status(200).send("hello world...");
  resp.status(200).json({message: "some message"});
  // resp.download("home.html");
});

app.get("/home", (req, resp) =>  {
  resp.render("home", { text: "more data" });
});

import userRouter from './routes/users.js';
app.use('/users', userRouter);

// import router from './routes/some.cjs';
// const someRouter = router;
// app.use('/some', someRouter);

// middleware function: app.use(logger)
function logger(req, resp, next) {
  console.log("originalUrl: ", req.originalUrl);
  next();
}

// access req object
function auth(req, resp, next) {
  console.log("auth middleware ");
  if (req.query.admin === 'true') {
    // pass variables to other sections of controller actions/middleware
    req.admin = true;
    next()
  } else {
    resp.send("no auth")
  }
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
