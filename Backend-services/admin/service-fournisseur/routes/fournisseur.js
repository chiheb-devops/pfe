const express = require("express");
const passport = require("passport");
const router = express.Router();
const  config_passport = passport.authenticate("jwt", { session: false })
const controller = require("../controllers/fournisseur"); 
router.post(
  "/add",
  controller.postFournisseur
);
router.get(
    "/lists",
    controller.getAllFournisseurActive
  );
router.get(
    "/lists/four/:id",
    controller.getFournisseur
  );
  
router.get(
    "/lists/inactive",
    controller.getAllFournisseurInactive
  );
router.put(
    "/update/:id",
    controller.editFournisseur
  );
 
router.put(
    "/delete/:id",
    controller.deleteFournisseur
  );
  router.put(
    "/returnactive/:id",
      controller.ReturnFournisseurActive
    );
module.exports = router;