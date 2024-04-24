const express = require("express");
const router = express.Router();
const controller = require("../controllers/dashboard"); 
router.get(
  "/number/categories/active",
  controller.getNumberCategoryActive
);
router.get(
  "/number/course/active",
  controller.getNumberCourseActive
);
router.get(
  "/number/session/active",
  controller.getNumberSessionActive
);
router.get(
  "/number/formateur/active",
  controller.getNumberformateurActive
);

router.get(
  "/number/sessions/all/:cat",
  controller.getNumberAllSessionByCategory
);
/*********** */
router.get(
  "/number/category/sessions",
  controller.getAllCategorieActiveForNumberSession
);
/*****utilisateurs 
 * 
*/
router.get(
  "/number/forUtilisateurs",
  controller.getDashboardUtilisateurs
);

module.exports = router;