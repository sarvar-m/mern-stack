const express = require("express");
const router = express.Router();

//import controller
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth.controllers");
const { read, update } = require("../controllers/user.controllers");

router.get("/user/:id", requireSignin, read);
router.put("/user/update", requireSignin, update);
router.put("/admin/update", requireSignin, adminMiddleware, update);

module.exports = router;
