const controler = {};
const conn = require('../config/database')

controler.postCours =  (req, res, next) => {
    let data = {
        ref_form: req.body.ref_form,
        designation: req.body.designation,
        duree: req.body.duree,
        version: req.body.version,
        categorie: req.body.categorie,
        statut: req.body.statut || 'active' 
      };
      let sql = "INSERT INTO Examen SET ?";
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

controler.getAllCoursActive =  (req, res, next) => {
  let sql = "SELECT * FROM Examen WHERE statut = 'active' ";
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
controler.CoursReturnActive = async (req, res, next) => {
  const cat = req.params.cat;
  let sql = "UPDATE Examen SET Examen.statut = 'active' WHERE Examen.categorie = ?  ";
  let query = conn.query(sql, [cat], (err, result) => {
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
controler.CoursReturnInactive = async (req, res, next) => {
  const cat = req.params.cat;
  let sql = "UPDATE Examen SET Examen.statut = 'inactive' WHERE Examen.categorie = ?  ";
  let query = conn.query(sql, [cat], (err, result) => {
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
controler.getAllDistinctCours =  (req, res, next) => {
  let sql = "SELECT DISTINCT ref_form , categorie FROM Examen WHERE statut = 'active' ";
  let query = conn.query(sql, (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
        result: result
      });
    }
  });
}
controler.getAllCoursInactive =  (req, res, next) => {
  let sql = "SELECT * FROM Examen WHERE statut = 'inactive' ";
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
controler.getAllVersionByRef =  (req, res, next) => {
  const ref = req.params.ref;
  let sql = "SELECT distinct version, duree FROM Examen WHERE ref_form = ? and statut = 'active' ";
  let query = conn.query(sql, [ref], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this refrence"
      });
    }
  });

}
controler.getAllRefByCategories =  (req, res, next) => {
  const cat = req.params.cat;
  let sql = "SELECT DISTINCT ref_form FROM Examen WHERE categorie = ? and statut = 'active' ";
  let query = conn.query(sql, [cat], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this refrence"
      });
    }
  });

}
controler.getCoursById =  (req, res, next) => {
    const id = req.params.id;
    let sql = "SELECT * FROM Examen WHERE id = ?";
    let query = conn.query(sql, [id], (err, result) => {
      if (result.length > 0) {
        res.json({
          success: true,
          result: result,
        });
      } else {
        res.json({
          success: false,
          message:"not found this Examen"
        });
      }
    });

}

controler.editCours =  (req, res, next) => {
  const id = req.params.id;
  const ref_form = req.body.ref_form;
  const  designation = req.body.designation;
  const duree = req.body.duree;
  const version = req.body.version;
  const  categorie = req.body.categorie;
 
  let sql =
    "UPDATE Examen SET ref_form = ? , designation = ? , duree = ? , version = ? , categorie = ?    WHERE id = ?";
  let query = conn.query(
    sql,
    [ref_form, designation, duree, version , categorie, id],
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
controler.deleteCours =  (req, res, next) => {
  const id = req.params.id; 
    let sql =
      "UPDATE Examen SET statut = 'inactive'   WHERE id = ?";
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
controler.ReturnCoursActiveById =  (req, res, next) => {
  const id = req.params.id; 
    let sql =
      "UPDATE Examen SET statut = 'active'   WHERE id = ?";
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