const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
//const multer = require("../middleware/multer-config");

router.post("/",auth, sauceCtrl.createSauce);
router.put ("/:id",auth, sauceCtrl.modifySauce);
router.delete ("/:id",auth, sauceCtrl.deleteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.get("/",auth, sauceCtrl.getAllSauce);

module.exports = router;
