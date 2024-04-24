const express = require("express");
const router = express.Router();
const controller = require("../controllers/compteFormateur"); 
router.put(
  "/changerpassword",
  controller.FormateurChangerPassword
);
router.post(
  "/list/training/feauture",
  controller.getAllTainingFeautureById
);
router.post(
  "/list/training/past",
  controller.getAllTainingPastById
);
router.post(
  "/all/training",
  controller.getAllTainingById
);
router.post(
  "/list/training/calendar",
  controller.getAllTainingforcalendarById
);
router.post(
  "/number/training",
  controller.getNumberTraining
);
router.post(
  "/number/training/category",
  controller.getNumberTrainingByCategory
);
router.get(
  "/lists/category",
  controller.getAllCategorieActive
);
/**start routes for examen */
router.post(
  "/number/examen",
  controller.getNumberExamen
);
router.post(
  "/number/examen/category",
  controller.getNumberExamenByCategory
);
router.post(
  "/list/examen/feauture",
  controller.getAllExamenFeautureById
);
router.post(
  "/list/examen/past",
  controller.getAllExamenPastById
);
router.post(
  "/all/examen",
  controller.getAllExamenById
);
router.post(
  "/list/examen/calendar",
  controller.getAllExamenforcalendarById
);

module.exports = router;