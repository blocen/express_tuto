import express from 'express'
export const router = express.Router();

router.get("/", (req, resp) =>  {
  console.log(req.query.name);
  resp.send("user list");
});

router.get("/new", (req, resp) =>  {
  // resp.send("user new form");
  resp.render("users/new", { firstName: "your first name"});
});

// router.get("/:id", (req, resp) =>  {
//   let id = req.params.id;
//   resp.send(`user get with id: ${id}`);
// });

// router.put("/:id", (req, resp) =>  {
//   let id = req.params.id;
//   resp.send(`user get with id: ${id}`);
// });

// router.delete("/:id", (req, resp) =>  {
//   let id = req.params.id;
//   resp.send(`user get with id: ${id}`);
// });

router
  .route("/:id")
  .get((req, resp) =>  {
    console.log(req.user);
    resp.send(`user get with id: ${req.params.id}`)
  })
  .put((req, resp) =>  {
    resp.send(`user update/put with id: ${req.params.id}`)
  })
  .delete((req, resp) =>  {
    resp.send(`user delete with id: ${req.params.id}`)
  });

router.post("/", (req, resp) =>  {
  // resp.send("create user");
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    resp.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error in post new user");
    resp.render("users/new", { firstName: req.body.firstName })
  }
});

// middleware; runs between starting and ending of req
const users = [{ name: "alice" }, { name: "bob"}];
router.param("id", (req, resp, next, id) => {
  req.user = users[id];
  next();
});

export default router;
