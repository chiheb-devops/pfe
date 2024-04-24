const controler = {}; 
const conn = require('../config/database');
controler.postPlanning =  (req, res, next) => {
    let data = {
        id_examinateur: req.body.id_examinateur,
        statut_f: req.body.statut_f,
        id_session: req.body.id_session,
        nbr_participant: req.body.nbr_participant, 
        statut: req.body.statut || 'active' 
      };
      let sql = "INSERT INTO Planning_Examinateur SET ?";
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
controler.getAllPlanningActivefeauture  =  (req, res, next) => {
  let sql = "SELECT Planning_Examinateur.id ,Examen.ref_form as ref_formation, Examen.version, Examen.designation ,Examen.categorie ,Examen.duree ,Utilisateurs.email ,Session_Examen.id as id_session , Session_Examen.lieu ,Session_Examen.langue ,Session_Examen.etat_session , Session_Examen.date_examen , ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f  ,Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session  INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.statut = 'active' and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() ";
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
controler.getAllPlanningForCalendar  =  (req, res, next) => {
  let sql = "SELECT Planning_Examinateur.id ,Examen.ref_form as ref_formation, Examen.version, Examen.designation ,Examen.categorie ,Examen.duree ,Utilisateurs.email ,Session_Examen.id as id_session , Session_Examen.lieu ,Session_Examen.langue ,Session_Examen.etat_session , Session_Examen.date_examen, ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f ,Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.statut = 'active' ";
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
controler.getAllPlanningActivePast  =  (req, res, next) => {
  let sql = "SELECT Planning_Examinateur.id ,Examen.ref_form as ref_formation, Examen.version, Examen.designation ,Examen.categorie ,Examen.duree ,Utilisateurs.email ,Session_Examen.id as id_session , Session_Examen.lieu ,Session_Examen.langue ,Session_Examen.etat_session , Session_Examen.date_examen , ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f  ,Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session  INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.statut = 'active' and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) < CURRENT_TIMESTAMP()";
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
controler.getAllPlanningActiveForCalender =  (req, res, next) => {
  let sql = "SELECT Planning_Examinateur.id , CONCAT(Examen.ref_form ,' - ', IF( ISNULL(Session_Examen.lieu) , 'VT' , Session_Examen.lieu ) ,' - ', Utilisateurs.nom,' ', Utilisateurs.prenom) AS title , Session_Examen.date_examen as start, ADDTIME(Session_Examen.date_examen ,  Examen.duree ) as end FROM Planning_Examinateur INNER JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.statut = 'active' ";
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
controler.getAllPlanningInactive =  (req, res, next) => {
  let sql = "SELECT Planning_Examinateur.id ,Examen.ref_form as ref_formation, Session_Examen.id id_session , Session_Examen.date_examen , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f ,Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.statut = 'inactive' ";
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

controler.getAllDistinctRefFormation =  (req, res, next) => {
  const cat = req.params.cat;
  let sql = "SELECT DISTINCT Examen.ref_form FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.categorie = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() ";
  let query = conn.query(sql, [cat], (err, result) => {
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
controler.getAllDistinctVersionFormation =  (req, res, next) => {
  const ref = req.params.ref;
  let sql = "SELECT DISTINCT Examen.version FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.ref_form = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() ";
  let query = conn.query(sql, [ref], (err, result) => {
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
controler.getAllDistinctTypeFormation =  (req, res, next) => {
  const ref = req.params.ref;
  const version = req.params.version;
  let sql = "SELECT DISTINCT  FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.version = ? and Examen.ref_form = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [version, ref], (err, result) => {
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
controler.getAllDistinctTypeFormatioWithoutVersion =  (req, res, next) => {
  const ref = req.params.ref;
  let sql = "SELECT  FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active'  and Examen.ref_form = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() ";
  let query = conn.query(sql, [ ref ], (err, result) => {
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
controler.getAllDistinctPaysFormation =  (req, res, next) => {
  const ref = req.params.ref;
  const version = req.params.version;
  let sql = "SELECT DISTINCT Session_Examen.lieu FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active' and Examen.version = ? and Examen.ref_form = ?  and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [version, ref], (err, result) => {
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
controler.getAllDistinctPaysFormationWithoutVersion =  (req, res, next) => {
  const ref = req.params.ref;
  let sql = "SELECT DISTINCT Session_Examen.lieu FROM Session_Examen LEFT JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Session_Examen.statut = 'active'  and Examen.ref_form = ?  and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [ ref], (err, result) => {
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
controler.getAllDateFormationDistintDistienciellleWithoutVersion =  (req, res, next) => {
  const ref = req.params.ref;
  let sql = "SELECT Session_Examen.id ,Session_Examen.date_examen, Session_Examen.langue,	Session_Examen.etat_session , Examen.ref_form , Examen.designation , Session_Examen.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session_Examen LEFT JOIN Utilisateurs ON Utilisateurs.id = Session_Examen.affecter INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Examen.ref_form = ? AND Session_Examen.statut = 'active' and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [ref], (err, result) => {
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
controler.getAllDateFormationDistintDistienciellle =  (req, res, next) => {
  const ref = req.params.ref;
  const version = req.params.version;
  let sql = "SELECT Session_Examen.id ,Session_Examen.date_examen, Session_Examen.langue,	Session_Examen.etat_session , Examen.ref_form , Examen.designation , Session_Examen.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session_Examen LEFT JOIN Utilisateurs ON Utilisateurs.id = Session_Examen.affecter INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Examen.ref_form = ? AND Session_Examen.statut = 'active' and Examen.version = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [ref, version], (err, result) => {
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
controler.getAllDateFormationPresentielleWithoutVersion =  (req, res, next) => {
  const ref = req.params.ref;
  const pays = req.params.pays;
  let sql = "SELECT Session_Examen.id ,Session_Examen.date_examen, ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, Session_Examen.lieu, Session_Examen.etat_session, Session_Examen.langue , Examen.ref_form , Examen.designation , Session_Examen.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session_Examen LEFT JOIN Utilisateurs ON Utilisateurs.id = Session_Examen.affecter INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Examen.ref_form = ? AND Session_Examen.statut = 'active' and Session_Examen.lieu = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [ref, pays], (err, result) => {
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
controler.getAllDateFormationPresentielle =  (req, res, next) => {
  const ref = req.params.ref;
  const version = req.params.version;
  const pays = req.params.pays;
  let sql = "SELECT Session_Examen.id ,Session_Examen.date_examen, ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, Session_Examen.lieu, Session_Examen.etat_session, Session_Examen.langue , Examen.ref_form , Examen.designation , Session_Examen.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session_Examen LEFT JOIN Utilisateurs ON Utilisateurs.id = Session_Examen.affecter INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Examen.ref_form = ? AND Session_Examen.statut = 'active' and Examen.version = ? and Session_Examen.lieu = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP()";
  let query = conn.query(sql, [ref, version, pays], (err, result) => {
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
controler.getAllDateFormation =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT Session_Examen.id ,Session_Examen.date_examen  , Session_Examen.ref_formation , Session_Examen.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session_Examen LEFT JOIN Utilisateurs ON Utilisateurs.id = Session_Examen.affecter WHERE Session_Examen.ref_formation = ? AND Session_Examen.statut = 'active' ";
  let query = conn.query(sql, [id], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this ref"
      });
    }
  });

}
controler.getAllAffecteSessionFormateur =  (req, res, next) => {
  
  let sql = "SELECT Session_Examen.id as session_id ,Session_Examen.date_examen, Utilisateurs.nom, Utilisateurs.prenom,group_concat(Examen.ref_form) AS references_formation , Utilisateurs.id , group_concat(Session_Examen.date_examen,'/', ADDTIME(Session_Examen.date_examen ,  Examen.duree ) , '/',Examen.ref_form) AS schedule ,Session_Examen.affecter , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Utilisateurs LEFT JOIN Session_Examen ON Utilisateurs.id = Session_Examen.affecter INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE  Utilisateurs.statut = 'active' AND Utilisateurs.role = 'Instructeur' AND ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() and Utilisateurs.examinateur = 'oui' GROUP BY Utilisateurs.id";
  let query = conn.query(sql, (err, result) => {
    if (result) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this ref"
      });
    }
  });

}

controler.getPlanningById =  (req, res, next) => {
    const id = req.params.id;
    let sql = "SELECT Planning_Examinateur.id ,Session_Examen.id as id_session, Session_Examen.langue, Session_Examen.etat_session , Session_Examen.lieu ,Examen.version, Examen.categorie, Examen.designation ,Utilisateurs.id as id_examinateur ,Examen.ref_form as ref_formation ,Session_Examen.date_examen, ADDTIME(Session_Examen.date_examen ,  Examen.duree ) AS date_fin, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f , Utilisateurs.email , Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.id = ? AND Planning_Examinateur.statut = 'active' ";
    let query = conn.query(sql, [id], (err, result) => {
      if (result.length > 0) {
        res.json({
          success: true,
          result: result,
        });
      } else {
        res.json({
          success: false,
          message:"not found this planning"
        });
      }
    });

}
controler.getPlanningUpdatedById =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT Planning_Examinateur.id ,Session_Examen.id as id_session ,Utilisateurs.id as id_examinateur ,Examen.ref_form as ref_formation ,Session_Examen.date_examen, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f , Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.id = ? AND Planning_Examinateur.statut = 'active'";
  let query = conn.query(sql, [id], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this planning"
      });
    }
  });

}
controler.getPlanningUpdatedByIdSession =  (req, res, next) => {
  const id = req.params.id; 
  let sql = " SELECT Planning_Examinateur.id, Session_Examen.id as id_session ,Utilisateurs.id as id_examinateur ,Examen.ref_form as ref_formation, Session_Examen.date_examen, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Examinateur.statut_f , Planning_Examinateur.nbr_participant FROM Planning_Examinateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Examinateur.id_examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.id_session = ? AND Planning_Examinateur.statut = 'active' ";
  let query = conn.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        message:"not found this planning"
      });
      
    } else {
      res.json({
        success: true,
        result: result,
      });
    }
  });

}
controler.editPlanning =  (req, res, next) => {
  const id = req.params.id;
  const id_examinateur = req.body.id_examinateur;
  const statut_f = req.body.statut_f;
  const nbr_participant = req.body.nbr_participant;
  let sql =
    "UPDATE Planning_Examinateur SET id_examinateur = ? , statut_f = ? , nbr_participant = ?  WHERE id = ?";
  let query = conn.query(
    sql,
    [id_examinateur, statut_f, nbr_participant, id],
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
controler.editPlanningForSession =  (req, res, next) => {
  const id = req.body.id;
  const statut_f = req.body.statut_f;
 
  let sql =
    "UPDATE Planning_Examinateur SET  statut_f = ?   WHERE id = ?";
  let query = conn.query(
    sql,
    [statut_f , id],
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
controler.deletePlanning =  (req, res, next) => { 
  const id = req.params.id; 
    let sql =
      "DELETE Planning_Examinateur FROM Planning_Examinateur INNER JOIN Session_Examen ON Session_Examen.id = Planning_Examinateur.id_session INNER JOIN Examen ON Examen.id = Session_Examen.id_examen WHERE Planning_Examinateur.id_examinateur = ? and ADDTIME(Session_Examen.date_examen ,  Examen.duree ) >= CURRENT_TIMESTAMP() ";
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
controler.deletePlanningAfterAffected =  (req, res, next) => {
  const id = req.params.id; 
    let sql =
      "DELETE FROM Planning_Examinateur WHERE id = ?";
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