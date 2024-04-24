const controler = {};
const conn = require('../config/database')
controler.postCategorie =  (req, res, next) => {
    let data = {
        nom_categorie: req.body.nom_categorie,
        statut: req.body.statut || 'active' 
      };
      let sql = "INSERT INTO Categories SET ?";
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
controler.getAllCategorieActive =  (req, res, next) => {
    let sql = "SELECT * FROM Categories WHERE statut = 'active' ";
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
controler.CategorieReturnActive = async (req, res, next) => {
  const id = req.params.id;
  let sql = "UPDATE Categories SET Categories.statut = 'active' WHERE Categories.id = ? ";
  let query = conn.query(sql, [id], (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
        results: result,
      });
    }
  }); 
}
controler.getAllCategorieInactive =  (req, res, next) => {
  let sql = "SELECT * FROM Categories WHERE statut = 'inactive' ";
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
controler.getCategorieById =  (req, res, next) => {
    const id = req.params.id;
    let sql = "SELECT * FROM Categories WHERE id = ?";
    let query = conn.query(sql, [id], (err, result) => {
      if (result.length > 0) {
        res.json({
          success: true,
          result: result,
        });
      } else {
        res.json({
          success: false,
          message:"not found this categorie"
        });
      }
    });
}
controler.editCategorie =  (req, res, next) => {
    const id = req.params.id;
    const nom_categorie = req.body.nom_categorie;
   
    let sql =
      "UPDATE Categories SET nom_categorie = ?   WHERE id = ?";
    let query = conn.query(
      sql,
      [nom_categorie, id],
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
controler.deleteCategorie =  (req, res, next) => {
    const id = req.params.id; 
    let sql =
      "UPDATE Categories SET Categories.statut = 'inactive' WHERE Categories.id = ? ";
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