const express = require("express");
const router = express.Router();
const controller = require("../controllers/utilisateur");
/*************************debut */
router.get("/list/interne", controller.getAllFormateurInterne);
router.get("/list/externe", controller.getAllFormateurExterne);
router.post("/register", controller.postUser);
router.put("/edit/:id",
controller.editUser);
router.get("/lists/:id", controller.getUserById); 
router.get("/allusers/lists", controller.getAllUser);
router.put("/editPassword/:id/:email",
controller.editFormateurPassword);
router.put("/changerpassword",
controller.FormateurChangerPassword);
router.put("/delete/:id/:verif",
controller.deleteUser);
router.delete("/deleteUtilisateurInstructeur/:id",
controller.deleteUtilisateurInstructeur);
router.delete("/deleteUtilisateurExaminateur/:id",
controller.deleteUtilisateurExaminateur);
/*************************fin */



 
router.put("/returnactive/:id",
controller.FormateurReturnActive);
router.get("/lists/inactive",
controller.getAllFormateurInactive); 


router.post("/verif/authoriazation", controller.postVerifAuthoriazation); 
/***examinateur */
router.put("/examinateur/returnactive/:id",
controller.ExaminateurReturnActive);
router.put("/examinateur/deleteexaminateur/:id",
controller.deleteExaminateur);
router.get("/examinateur/lists", controller.getAllExaminateur);
router.get("/examinateur/planning/lists", controller.getAllExaminateurForPlanning);
router.get("/examinateur/lists/inactive", controller.getAllExaminateurInactive);

// user with role
router.post("/role/register",
controller.postUserWithRole);
router.get("/role/lists",
 controller.getAllUserWithRole);
module.exports = router;