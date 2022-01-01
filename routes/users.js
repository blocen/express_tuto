// const express = require('express');
import express from 'express'
export const router = express.Router();



router.get("/", (req, resp) =>  {
  resp.send("user list");
});

router.get("/new", (req, resp) =>  {
  resp.send("user new form");
});

// module.exports = router;
export default router;
