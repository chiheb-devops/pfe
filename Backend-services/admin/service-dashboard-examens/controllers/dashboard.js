const controler = {};
const conn = require('../config/database');

controler.getNumberCategoryActive =  (req, res, next) => {
    let sql = "SELECT COUNT(id) AS numbercategory FROM Categories WHERE statut = 'active' ";
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
controler.getNumberCourseActive =  (req, res, next) => {
    let sql = "SELECT COUNT(id) AS numbercourse FROM Examen WHERE statut = 'active' ";
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
controler.getNumberSessionActive =  (req, res, next) => {
    let sql = "SELECT COUNT(id) AS numbersession FROM Session_Examen WHERE statut = 'active' ";
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
controler.getNumberformateurActive =  (req, res, next) => {
    let sql = "SELECT COUNT(id) AS numberformateur FROM Utilisateurs WHERE role = 'Instructeur' and examinateur = 'oui' ";
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

controler.getNumberAllSessionByCategory =  (req, res, next) => {
  const cat = req.params.cat;
  const cat2 = cat;
  const cat3 = cat;
  const cat4 = cat;
  const cat5 = cat;
  const cat6 = cat;
  const cat7 = cat;
  const cat8 = cat;
  let sql = "SELECT (SELECT DISTINCT Categories.nom_categorie FROM Categories  WHERE Categories.statut = 'active' and Categories.nom_categorie = ? ) AS nomcategorie,  (SELECT COUNT(Examen.id) FROM Examen  WHERE Examen.statut = 'active' and Examen.categorie = ? ) AS numbercours, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'confirmée') AS numbersesionconfirm, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'en attente de confirmation') AS numbersesionwaiting, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'en cours') AS numbersesionprogress, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'clôturée') AS numbersesionclose, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'reporter') AS numbersesionreporter, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'annulée') AS numbersesioncanceled FROM Categories";
  let query = conn.query(sql,  [cat, cat2, cat3, cat4, cat5, cat6, cat7, cat8], (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
       r: {
          results: result
        }
        
      })
    }
  });
}
/*************************/
controler.getAllCategorieActiveForNumberSession =  (req, res, next) => {
  let sql = "SELECT * FROM Categories WHERE statut = 'active' ";
  let query = conn.query(sql, async (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      let r = [];
      let resultGlobal = [];
      r = [...result];
      if (r.length > 0) {
        r.forEach((re, index, array) => {
          // debut
     let cat = re.nom_categorie;
     let cat2 = cat;
     let cat3 = cat;
     let cat4 = cat;
     let cat5 = cat;
     let cat6 = cat;
     let cat7 = cat;
     let cat8 = cat;
     let sqlDeux= "SELECT (SELECT DISTINCT Categories.nom_categorie FROM Categories  WHERE Categories.statut = 'active' and Categories.nom_categorie = ? ) AS nomcategorie,  (SELECT COUNT(Examen.id) FROM Examen  WHERE Examen.statut = 'active' and Examen.categorie = ? ) AS numbercours, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'confirmée') AS numbersesionconfirm, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'en attente de confirmation') AS numbersesionwaiting, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'en cours') AS numbersesionprogress, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'clôturée') AS numbersesionclose, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'reporter') AS numbersesionreporter, (SELECT COUNT(Session_Examen.id) FROM Session_Examen INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and Session_Examen.etat_session = 'annulée') AS numbersesioncanceled FROM Categories";
     let queryDeux = conn.query(sqlDeux,  [cat, cat2, cat3, cat4, cat5, cat6, cat7, cat8], (errDeux, resultDeux) => {
       if (errDeux) {
         res.json({
           success: false,
           error: errDeux,
         });
       } else {
         resultGlobal = [...resultGlobal, resultDeux[0]];
         if (index === array.length - 1) {
           res.json({
             success: true,
             results: resultGlobal
           });
         }
       }
     });
          // fin
        });
      }
      else {
        res.json({
          success: true,
          results: resultGlobal
        });
      }
     
    }

  });
}
/*****************************for utilisateur */
controler.getDashboardUtilisateurs =  (req, res, next) => {
  let sql = "SELECT (SELECT COUNT(Utilisateurs.id) FROM Utilisateurs WHERE Utilisateurs.statut = 'active' and Utilisateurs.statutUtilisateur = 'interne' ) AS numberUtilisateursInternes, (SELECT COUNT(Utilisateurs.id) FROM Utilisateurs WHERE Utilisateurs.statut = 'active' and Utilisateurs.statutUtilisateur = 'externe' ) AS numberUtilisateursExternes, (SELECT COUNT(Utilisateurs.id) FROM Utilisateurs WHERE Utilisateurs.statut = 'active' and Utilisateurs.role = 'Instructeur' ) AS numberInstructeurs, (SELECT COUNT(Utilisateurs.id) FROM Utilisateurs WHERE Utilisateurs.statut = 'active' and Utilisateurs.role = 'Instructeur' and Utilisateurs.examinateur = 'oui' ) AS numberExaminateurs  FROM Utilisateurs GROUP BY numberExaminateurs ";
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
module.exports = controler;