    const express = require("express");
    const cors = require('cors')
    const router = express.Router();
    const controller = require("../controllers/utilisateurWithoutToken");

    router.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }));
      
    router.post("/auth", controller.getUser);
    router.put("/changervotrepassword", controller.FormateurChangerVotrePassword);
    router.get("/forget/:email", controller.getUserByEmail);

    module.exports = router;