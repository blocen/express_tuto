import express from 'express'
export const router = express.Router();

router.get("/", (req, resp) =>  {
  resp.send("user list");
});

router.get("/new", (req, resp) =>  {
  resp.send("user new form");
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
    resp.send(`user get with id: ${req.params.id}`)
  })
  .put((req, resp) =>  {
    resp.send(`user update/put with id: ${req.params.id}`)
  })
  .delete((req, resp) =>  {
    resp.send(`user delete with id: ${req.params.id}`)
  });

router.post("/", (req, resp) =>  {
  resp.send("create user");
});

export default router;
