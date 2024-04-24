const express = require("express");
const router = express.Router();
const controller = require("../controllers/formateurUpload"); 
//start cetif
router.post(
  "/add/certif/:email/:idajouter",
  controller.postCertif
);
router.get(
  "/certif/download/:name/:email",
  controller.downloadCertif
);
router.get(
  "/cv/download/:name/:email",
  controller.downloadCv
);
router.get(
  "/lists/certif",
  controller.getAllCertifActive
);
router.get(
  "/lists/certif/inactive",
  controller.getAllCertifInactive
);

router.get(
    "/lists/certif/:id",
    controller.getAllCertifById
  );
  router.delete(
    "/certif/delete/:name/:email",
    controller.deleteCertif
  );
  router.delete(
    "/cv/delete/:name/:email",
    controller.deleteCv
  );

 //start cv
 router.post(
  "/add/cv/:email/:idajouter",
  controller.postCv
);
router.get(
  "/lists/cv/:id",
  controller.getAllCvById
);
module.exports = router;