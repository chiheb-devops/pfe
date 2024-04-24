const express = require("express");
const router = express.Router();
const controller = require("../controllers/examen"); 
router.post(
  "/add",
  controller.postCours
);

router.get(
  "/lists",
  controller.getAllCoursActive
);
router.get(
  "/list/version/:ref",
  controller.getAllVersionByRef
);
router.get(
  "/lists/bycategories/:cat", 
  controller.getAllRefByCategories
);
router.get(
  "/list/distinct",
  controller.getAllDistinctCours
);
router.get(
  "/lists/inactive",
  controller.getAllCoursInactive
);

router.get(
    "/lists/:id",
    controller.getCoursById
  );
router.put(
    "/update/:id",
    controller.editCours
  );
router.put(
    "/delete/:id",
    controller.deleteCours
  );
router.put(
   "/retunactive/:cat",
    controller.CoursReturnActive
  );
router.put(
   "/retuninactive/:cat",
    controller.CoursReturnInactive
  );  
  router.put(
    "/retunactivebyid/:id",
     controller.ReturnCoursActiveById
   );
module.exports = router;