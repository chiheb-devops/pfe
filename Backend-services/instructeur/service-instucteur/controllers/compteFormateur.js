const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const key_crypto = 'linSoft12345687546';
const controler = {};
const SECRET = "kfjngiurhguioghtiou";
const SECRETREST = "kfjngiurDFHSRTDHRThguioghtiou";
const moment = require('moment');
const conn = require('../config/database');

controler.FormateurChangerPassword = async (req, res, next) => {
  
    try {
      const token = req.body.token ;
      const newpassword = req.body.newpassword;
      const ciphertext = CryptoJS.AES.encrypt(newpassword, key_crypto).toString();
      let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      const ancienpassword = req.body.ancienpassword;
      let email = decoded.results[0].email;
      let password = decoded.results[0].password;
      const bytes  = CryptoJS.AES.decrypt(password, key_crypto);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (ancienpassword == originalText) {
      let sql =
      "UPDATE Utilisateurs SET Utilisateurs.password = ? WHERE  Utilisateurs.email = ? ";
    let query =  conn.query(
      sql,
      [ciphertext, email],
      (err, result) => {
        if(result.changedRows > 0) {
          res.json({
            success: true,
            result: result 
          });
            // start nodemailer 
  let transporter = nodemailer.createTransport({
    service: "gmail",
  
    auth: {
      user: "houssemhouss82@gmail.com", // generated ethereal user
      pass: "houssem987654321", // generated ethereal password
    },
  });
  const dateToday = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
  const outpout = ` <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <style>
    *, ::after, ::before {
      box-sizing: border-box;
  }
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -7.5px;
      margin-left: -7.5px;
  }
     
        @media only screen and (min-width: 768px) {
          .col-md-7{
            position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
          }
          
        }
        @media only screen and (max-width: 768px) {
          .col-md-7{
            position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
          }
        }     
    .card {
    position: relative;
    display: block;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    border-bottom: 1px solid rgba(0,0,0,.125) !important;
      border-top: 1px solid rgba(0,0,0,.125) !important;
      border-left: 1px solid rgba(0,0,0,.125) !important;
      border-right: 1px solid rgba(0,0,0,.125) !important;
  }
  .card-default {
      border-left: 0; 
  }
  .card-header {
      background-color: transparent;
      border-bottom: 1px solid rgba(0,0,0,.125);
      padding: 1.75rem 0;
      display: flex;
      justify-content: center !important;
      line-height: 1.5px;
      border-top-left-radius: .25rem;
      border-top-right-radius: .25rem;
  }
  .card-title {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0 auto;
    font-size: 1rem;
  }
  
  .card-body {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
    
      border: 0 solid rgba(0,0,0,.125);
      border-radius: .25rem;
  }
  
  .callout {
    border-radius: 0.25rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-right: 1px solid rgba(0,0,0,.125);
    border-top: 1px solid rgba(0,0,0,.125);
    background-color: #ffffff;
    border-left: 5px solid #e9ecef;
    width: 95%;
    margin: 1rem auto;
    padding: 1rem;
  }
  .callout p:last-child {
    margin-bottom: 0;
  }
  .callout.callout-danger {
    border-left-color: #bd2130;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: .8rem;
    line-height: 1.5;
    text-decoration: none;
    font-weight: 700;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-danger {
    color: #ffffff;
    background-color: #dc3545;
    border-color: #dc3545;
    box-shadow: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: normal;
  }
  .text-white {
    color: #ffffff !important;
  }
  .mx-auto {
    margin-left: auto !important;
  margin-right: auto !important;
  
  }
    </style>
  </head>
  
  <br><br>
  <div class="row"> 
            <div class="col-md-7 mx-auto"> 				
  <center> 
  <img width="200px" src="cid:logo4"> <br><br>
  
              <div class="card card-default">
                <div class="card-header">
                   <h4 class="card-title" ><font color="red">Votre mot de passe a bien été modifié!</font></h4>
                </div>
                <div class="card-body">
                  <div class="callout callout-danger">
                          <p> Votre mot de passe pour le compte Formateur ${email} a été modifié le ${dateToday} <br>
            
            </p>
            <a  href="http://app.linsoft.xyz/#/auth" class="btn text-white  btn-danger">Se connecter</a>
                  </div>
          </div>
          </div>  
  </center>
  </div>
  </div>
  </body>
  </html> `
  let mailOptions = {
    from: "houssemhouss82@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Votre mot de passe a bien été modifié", // Subject line
    html: outpout,
    attachments:[
      {
        filename : 'LogoLinSoft.png',
        path: `${__dirname}/../images/LogoLinSoft.png`,
        cid : 'logo4'
  }
    ]  // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
     console.log(err);
    }
  });
  
  //end nodemailer
        }
         else {
          res.json({
            success: false,
            message: "y a est une erreur"
          });
        } 
      }
    );
    } else {
      res.json({
        success: false,
        message: "password n'est pas identique"
      });
    }
      }
     catch(err) {
      res.json({
        success: false,
        error: err 
      });
    }
}
controler.getAllTainingFeautureById =  (req, res, next) => {
  try {
    const token = req.body.token;
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      let id = decoded.results[0].id;
      let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Session.etat_session, Session.id AS id_session , Session.langue, Session.lieu, Cours.version, Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur, Planning_Formateur.address_fournisseur as address , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
      let query = conn.query(sql, [id],(err, result) => {
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

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      error: err 
    });
  }
 
}
controler.getAllTainingPastById = async  (req, res, next) => {
  try {
    const token = req.body.token;
    let decoded = await jwt.verify(token, process.env.SECRET || SECRET );
      let id = decoded.results[0].id;
      let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Session.etat_session, Session.id AS id_session  , Session.langue, Session.lieu, Cours.version, Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur, Planning_Formateur.address_fournisseur as address , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour  WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? and ADDDATE(Session.date_debut , Cours.duree - 1) < CURDATE() ";
      let query = conn.query(sql, [id],(err, result) => {
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

  } catch (err) {
    res.json({
      success: false,
      error: err 
    });
  }
 
}
controler.getAllTainingforcalendarById =  (req, res, next) => {
  try {
    const token = req.body.token;
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      let id = decoded.results[0].id;
      let sql = "SELECT Planning_Formateur.id , CONCAT(Cours.ref_form ,' - ', IF( ISNULL(Session.lieu) , 'VT' , Session.lieu )) AS title , Session.date_debut as start, ADDDATE(Session.date_debut , Cours.duree) as end FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? ";
      let query = conn.query(sql, [id],(err, result) => {
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

  } catch (err) {
    res.json({
      success: false,
      error: err 
    });
  }
 
} 
controler.getAllTainingById =  (req, res, next) => {
  try {
    const token = req.body.token;
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      let id = decoded.results[0].id;
      let sql = "SELECT Planning_Formateur.id ,Cours.ref_form as ref_formation, Session.etat_session, Session.id AS id_session , Session.langue, Session.lieu, Cours.version, Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) as date_fin ,CONCAT(Session.date_debut,' --> ', ADDDATE(Session.date_debut , Cours.duree - 1)) AS dateSession , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name ,Planning_Formateur.statut_f , Fournisseurs.nom_fournisseur, Planning_Formateur.address_fournisseur as address , Session.type ,Planning_Formateur.mail_contact ,Planning_Formateur.nbr_participant, Planning_Formateur.numero_for, Planning_Formateur.contact_for FROM Planning_Formateur LEFT JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session Left JOIN Fournisseurs ON Fournisseurs.id = Planning_Formateur.id_fournisseur INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? ";
      let query = conn.query(sql, [id],(err, result) => {
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

  } catch (err) {
    res.json({
      success: false,
      error: err 
    });
  }
 
}
controler.getNumberTraining =  (req, res, next) => {
  try {
    const token = req.body.token;
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      let id = decoded.results[0].id;
      let id2 = id;
      let id3 = id;
      let id4 = id;
      let sql = "SELECT (SELECT DISTINCT Utilisateurs.email FROM Utilisateurs WHERE Utilisateurs.id = ? ) AS nomformateur, (SELECT COUNT(Planning_Formateur.id) FROM Planning_Formateur INNER JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur WHERE Planning_Formateur.id_formateur = ? and Planning_Formateur.statut = 'active' ) AS numbertraining, (SELECT COUNT(Planning_Formateur.id) FROM Planning_Formateur INNER JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ) AS numbertrainingfeauture, (SELECT COUNT(Planning_Formateur.id) FROM Planning_Formateur INNER JOIN Utilisateurs ON Utilisateurs.id = Planning_Formateur.id_formateur INNER JOIN Session ON Session.id = Planning_Formateur.id_session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Planning_Formateur.statut = 'active' and Planning_Formateur.id_formateur = ? and ADDDATE(Session.date_debut , Cours.duree - 1) < CURDATE() ) AS numbertrainingpast FROM Utilisateurs GROUP BY nomformateur " ;
      let query = conn.query(sql, [id, id2, id3, id4], (err, result) => {
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

  } catch (err) {
    res.json({
      success: false,
      error: err 
    });
  }
 
}
controler.getNumberTrainingByCategory =  (req, res, next) => {
  try {
    const token = req.body.token;
    const cat = req.body.cat;
    const cat2 = cat;
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
      const id = decoded.results[0].id;
      

      let sql = "SELECT (SELECT DISTINCT Categories.nom_categorie FROM Categories WHERE Categories.statut = 'active' and Categories.nom_categorie = ? ) AS nomcategorie, (SELECT COUNT(Session.id) FROM Session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.statut = 'active' and Cours.categorie = ? and Session.affecter = ? ) AS numbertraining FROM Categories GROUP by nomcategorie ";
      let query = conn.query(sql, [cat, cat2, id],(err, result) => {
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

  } catch (err) {
    res.json({
      success: false,
      error: err 
    });
  }
 
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
  module.exports = controler;