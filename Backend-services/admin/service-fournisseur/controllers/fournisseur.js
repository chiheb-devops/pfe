const controler = {};
const conn = require('../config/database')
controler.postFournisseur =  (req, res, next) => {
    let data = {
        nom_fournisseur: req.body.nom_fournisseur,
        statut: req.body.statut || 'active' 
      };
      let sql = "INSERT INTO Fournisseurs SET ?";
      let query =  conn.query(sql, data,   (err, result) => {
        if (err) {
        return res.json({
         success: false,
           error: err.sqlMessage,
         });
       } else {
         res.json({
           success: true,
           result: result,
         });
       } 
     });
  
}
controler.getAllFournisseurActive =  (req, res, next) => {
  let sql = "SELECT * FROM Fournisseurs WHERE statut = 'active'";
  let query = conn.query(sql, (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
        results: result
      });
    }
  });
}
controler.getFournisseur =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT * FROM Fournisseurs  WHERE id = ?";
  let query = conn.query(
    sql,
    [id],
    (err, result) => {
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
}



controler.getAllFournisseurInactive =  (req, res, next) => {
  let sql = "SELECT * FROM Fournisseurs WHERE statut = 'inactive'";
  let query = conn.query(sql, (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
        results: result
      });
    }
  });
}

controler.editFournisseur =  (req, res, next) => {
  const id = req.params.id;
  const nom_fournisseur = req.body.nom_fournisseur;
  let sql =
    "UPDATE Fournisseurs SET nom_fournisseur = ?   WHERE id = ?";
  let query = conn.query(
    sql,
    [nom_fournisseur, id],
    (err, result) => {
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
}
controler.deleteFournisseur =  (req, res, next) => {
  const id = req.params.id;
  let sql =
    "UPDATE Fournisseurs SET statut = 'inactive'   WHERE id = ?";
  let query = conn.query(
    sql,
    [id],
    (err, result) => {
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
}
controler.ReturnFournisseurActive =  (req, res, next) => {
  const id = req.params.id;
  let sql =
    "UPDATE Fournisseurs SET statut = 'active'   WHERE id = ?";
  let query = conn.query(
    sql,
    [id],
    (err, result) => {
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
}
module.exports = controler;