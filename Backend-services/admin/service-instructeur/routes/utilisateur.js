const express = require("express");
const router = express.Router();
const controller = require("../controllers/utilisateur");
router.post("/register",
controller.postUser);
router.put("/edit/:id",
controller.editUser);
router.put("/editPassword/:id/:email",
controller.editFormateurPassword);
router.put("/changerpassword",
controller.FormateurChangerPassword);
router.get("/lists", controller.getAllFormateurActive); 
router.put("/returnactive/:id",
controller.FormateurReturnActive);
router.get("/lists/inactive",
controller.getAllFormateurInactive); 
router.put("/delete/:id",
controller.deleteUser);
router.get("/list/:id", controller.getUserById); 
router.post("/verif/authoriazation", controller.postVerifAuthoriazation); 
/***examinateur */
router.put("/examinateur/returnactive/:id",
controller.ExaminateurReturnActive);
router.put("/examinateur/deleteexaminateur/:id",
controller.deleteExaminateur);
router.get("/examinateur/lists", controller.getAllExaminateur);
router.get("/examinateur/planning/lists", controller.getAllExaminateurForPlanning);
router.get("/examinateur/lists/inactive", controller.getAllExaminateurInactive);
router.get("/allusers/lists", controller.getAllUser);
// user with role
router.post("/role/register",
controller.postUserWithRole);
router.get("/role/lists",
 controller.getAllUserWithRole);
module.exports = router;