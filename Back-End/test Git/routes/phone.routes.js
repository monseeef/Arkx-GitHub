const express = require("express");
const router = express.Router();
const {
  getPhone,
  createPhone,
  getPhoneById,
  updatePhoneById,
  deletePhoneById,
} = require("../controllers/phone.controller");

router.get("/v", getPhone);
router.post("/v", getPhoneById);
router.get("/v/:id", createPhone);
router.put("/v/:id", updatePhoneById);
router.delete("/v/:id", deletePhoneById);

module.exports = router;
