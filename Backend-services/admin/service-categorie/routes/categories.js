const express = require("express");
const router = express.Router();
const controller = require("../controllers/categories"); 
router.post(
  "/add",
  controller.postCategorie
);

router.get(
  "/lists",
  controller.getAllCategorieActive
);
router.get(
  "/lists/inactive",
  controller.getAllCategorieInactive
);
router.get(
    "/lists/:id",
    controller.getCategorieById
  );
router.put(
    "/update/:id",
    controller.editCategorie
  );
router.put(
    "/retunnactive/:id",
    controller.CategorieReturnActive
  );
router.put(
    "/delete/:id",
    controller.deleteCategorie
  );
module.exports = router;