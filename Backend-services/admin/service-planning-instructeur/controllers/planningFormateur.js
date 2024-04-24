const controler = {};
const conn = require('../config/database');
controler.postPlanning =  (req, res, next) => {
    let data = {
        id_formateur: req.body.id_formateur,
        statut_f: req.body.statut_f,
        address_fournisseur: req.body.address_fournisseur || null ,
        id_session: req.body.id_session,
        id_fournisseur: req.body.id_fournisseur,
        nbr_participant: req.body.nbr_participant, 
        numero_for: req.body.numero_for,
        contact_for: req.body.contact_for,
        mail_contact: req.body.mail_contact,
        statut: req.body.statut || 'active' 
      };
      let sql = "INSERT INTO Planning_Formateur SET ?";
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
  let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Cours.version, Cours.designation ,Cours.categorie ,Cours.duree ,Utilisateurs.email ,Session.id id_session , Session.lieu ,Session.langue ,Session.etat_session , Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f ,  Planning_Formateur.address_fournisseur ,Fournisseurs.nom_fournisseur , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session LEFT JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.statut = 'active' and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
  let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Cours.version, Cours.designation ,Cours.categorie ,Cours.duree ,Utilisateurs.email ,Session.id id_session , Session.lieu ,Session.langue ,Session.etat_session , Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f ,  Planning_Formateur.address_fournisseur ,Fournisseurs.nom_fournisseur , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session LEFT JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.statut = 'active' ";
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
  let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Cours.version, Cours.designation ,Cours.categorie ,Cours.duree ,Utilisateurs.email ,Session.id id_session , Session.lieu ,Session.langue ,Session.etat_session , Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f ,  Planning_Formateur.address_fournisseur ,Fournisseurs.nom_fournisseur , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.statut = 'active' and ADDDATE(Session.date_debut , Cours.duree - 1) < CURDATE() ";
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
  let sql = "SELECT Planning_Formateur.id , CONCAT(Cours.ref_form ,' - ', IF( ISNULL(Session.lieu) , 'VT' , Session.lieu ) ,' - ', Utilisateurs.nom,' ', Utilisateurs.prenom) AS title , Session.date_debut as start, ADDDATE(Session.date_debut , Cours.duree) as end FROM Planning_Formateur INNER JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' ";
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
  let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Session.id id_session , Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur, Planning_Formateur.address_fournisseur as address , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.statut = 'inactive' ";
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
  let sql = "SELECT DISTINCT Cours.ref_form FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active' and Cours.categorie = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
  let sql = "SELECT DISTINCT Cours.version FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active' and Cours.ref_form = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
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
  let sql = "SELECT DISTINCT Session.type FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active' and Cours.version = ? and Cours.ref_form = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
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
  let sql = "SELECT DISTINCT Session.type FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active'  and Cours.ref_form = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
  const type = req.params.type;
  let sql = "SELECT DISTINCT Session.lieu FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active' and Cours.version = ? and Cours.ref_form = ? and Session.type = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [version, ref, type], (err, result) => {
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
  const type = req.params.type;
  let sql = "SELECT DISTINCT Session.lieu FROM Session LEFT JOIN Cours on Cours.id = Session.id_cour WHERE Session.statut = 'active'  and Cours.ref_form = ? and Session.type = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [ ref, type], (err, result) => {
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
  const type = req.params.type;
  let sql = "SELECT Session.id ,Session.date_debut, Session.langue,	Session.etat_session, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin , Cours.ref_form , Cours.designation , Session.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Cours.ref_form = ? AND Session.statut = 'active'  and Session.type = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [ref, type], (err, result) => {
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
  const type = req.params.type;
  let sql = "SELECT Session.id ,Session.date_debut, Session.langue,	Session.etat_session, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin , Cours.ref_form , Cours.designation , Session.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Cours.ref_form = ? AND Session.statut = 'active' and Cours.version = ? and Session.type = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [ref, version, type], (err, result) => {
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
  const type = req.params.type;
  const pays = req.params.pays;
  let sql = "SELECT Session.id ,Session.date_debut, Session.lieu, Session.etat_session, Session.langue, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin , Cours.ref_form , Cours.designation , Session.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Cours.ref_form = ? AND Session.statut = 'active' and Session.type = ? and Session.lieu = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [ref, type, pays], (err, result) => {
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
  const type = req.params.type;
  const pays = req.params.pays;
  let sql = "SELECT Session.id ,Session.date_debut, Session.lieu, Session.etat_session, Session.langue, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin , Cours.ref_form , Cours.designation , Session.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Cours.ref_form = ? AND Session.statut = 'active' and Cours.version = ? and Session.type = ? and Session.lieu = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE()";
  let query = conn.query(sql, [ref, version, type, pays], (err, result) => {
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
  let sql = "SELECT Session.id ,Session.date_debut ,Session.date_fin , Session.ref_formation , Session.affecter, Utilisateurs.id as formateur_id , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter WHERE Session.ref_formation = ? AND Session.statut = 'active' ";
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
  
  let sql = "SELECT Session.id as session_id ,Session.date_debut, Utilisateurs.nom, Utilisateurs.prenom , ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin ,group_concat(Cours.ref_form) AS references_formation , Utilisateurs.id , group_concat(Session.date_debut,'/', ADDDATE(Session.date_debut , Cours.duree - 1) ,'/',Cours.ref_form) AS schedule ,Session.affecter , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Utilisateurs.email FROM Utilisateurs LEFT JOIN Session ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Utilisateurs.statut = 'active' AND Utilisateurs.role = 'Instructeur' GROUP BY Utilisateurs.id";
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
    let sql = "SELECT Planning_Formateur.id ,Session.id as id_session, Session.langue, Session.etat_session ,Session.type, Session.lieu ,Cours.version, Cours.categorie, Cours.designation ,Utilisateurs.id as id_formateur ,Cours.ref_form as ref_formation ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Utilisateurs.email ,Planning_Formateur.mail_contact , Fournisseurs.nom_fournisseur, Planning_Formateur.address_fournisseur as address , Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.id = ? AND Planning_Formateur.statut = 'active' ";
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
  let sql = "SELECT Planning_Formateur.id ,Session.id as id_session ,Utilisateurs.id as id_formateur ,Cours.ref_form as ref_formation ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur, Address_fournisseur.address, Planning_Formateur.mail_contact , Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour left JOIN Address_fournisseur ON Address_fournisseur.id = Planning_Formateur.id_address_fournisseur WHERE Planning_Formateur.id = ? AND Planning_Formateur.statut = 'active'";
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
  let sql = " SELECT Planning_Formateur.id, Planning_Formateur.address_fournisseur as address ,Session.id as id_session ,Utilisateurs.id as id_formateur ,Cours.ref_form as ref_formation, Planning_Formateur.mail_contact ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur , Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.id_session = ? AND Planning_Formateur.statut = 'active' ";
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
controler.editPlanning =  (req, res, next) => {
  const id = req.params.id;
  const id_formateur = req.body.id_formateur;
  const statut_f = req.body.statut_f;
  const address_fournisseur = req.body.address_fournisseur || null ;
  const id_fournisseur = req.body.id_fournisseur;
  const nbr_participant = req.body.nbr_participant;
  const numero_for = req.body.numero_for;
  const mail_contact = req.body.mail_contact;
  const contact_for = req.body.contact_for;
 
  let sql =
    "UPDATE Planning_Formateur SET id_formateur = ? , statut_f = ? , address_fournisseur = ? , id_fournisseur = ? , nbr_participant = ? , numero_for = ? , contact_for = ? , mail_contact = ? WHERE id = ?";
  let query = conn.query(
    sql,
    [id_formateur, statut_f, address_fournisseur, id_fournisseur , nbr_participant, numero_for , contact_for, mail_contact, id],
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
    "UPDATE Planning_Formateur SET  statut_f = ?   WHERE id = ?";
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
controler.editPlanningForDeleteProvider =  (req, res, next) => {
  const id = req.params.id;
  let sql =
    "UPDATE Planning_Formateur  INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour SET Planning_Formateur.id_fournisseur = null WHERE Planning_Formateur.id_fournisseur = ? AND ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
controler.deletePlanning =  (req, res, next) => { 
  const id = req.params.id; 
    let sql =
      "DELETE Planning_Formateur FROM Planning_Formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.id_formateur = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
      "DELETE FROM Planning_Formateur WHERE id = ?";
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