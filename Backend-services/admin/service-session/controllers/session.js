const controler = {};
const conn = require('../config/database')
const nodemailer = require("nodemailer");
const moment = require('moment');
controler.postSession =  (req, res, next) => {
    let data = {
        id_cour: req.body.id_cour,
        date_debut: req.body.date_debut,
        type: req.body.type,
        langue: req.body.langue,
        lieu: req.body.lieu,
        etat_session: req.body.etat_session,
        statut: req.body.statut || 'active',
        affecter: req.body.affecter || null
      };
      let sql = "INSERT INTO Session SET ?";
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
controler.getAllSessionActivefeauture =  (req, res, next) => {
    let sql = " SELECT Session.id, Cours.ref_form, Cours.designation, Session.id_cour , Cours.version ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin ,Session.type, Session.langue, Session.lieu, Session.etat_session, Session.statut, Session.affecter, Utilisateurs.email, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.statut = 'active' and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
controler.getAllSessionActivePast =  (req, res, next) => {
    let sql = "SELECT Session.id, Cours.ref_form, Session.id_cour , Cours.version ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin ,Session.type, Session.langue, Session.lieu, Session.etat_session, Session.statut, Session.affecter , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.statut = 'active' and ADDDATE(Session.date_debut , Cours.duree - 1) < CURDATE() ";
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
  controler.getAllSessionAffectedByIdCours =  (req, res, next) => {
    const id = req.params.id;
    let sql = "select Session.id, Cours.ref_form, Cours.designation, Session.id_cour, Session.affecter, Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin, CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name, Utilisateurs.email  FROM Session INNER JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.id_cour = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
    let query = conn.query(sql, [id], (err, result) => {
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
  controler.getAllSessionNonAffecter =  (req, res, next) => {
    let sql = "SELECT * FROM Session WHERE statut = 'active' and affecter = null ";
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
  controler.getAllSessionInactive =  (req, res, next) => {
    let sql = "SELECT Session.id, Cours.ref_form, Session.id_cour , Cours.version ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin ,Session.type, Session.langue, Session.lieu, Session.etat_session, Session.statut, Session.affecter , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.statut = 'inactive'";
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
  controler.getSessionById =  (req, res, next) => {
    const id = req.params.id;
    let sql = "SELECT Session.id, Session.id_cour ,Cours.ref_form as ref_formation , Cours.categorie , Cours.version as version_session ,Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin ,Session.type, Session.langue, Session.lieu, Session.etat_session, Session.statut, Session.affecter FROM Session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.id = ? and Session.statut = 'active'";
    let query = conn.query(sql, [id], (err, result) => {
      if (result.length > 0) {
        res.json({
          success: true,
          result: result,
        });
      } else {
        res.json({
          success: false,
          message:"not found this session"
        });
      }
    });

}
controler.getSessionWithEmailById =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT Session.id, Session.date_debut, ADDDATE(Session.date_debut , Cours.duree - 1) AS date_fin, Cours.designation ,Cours.ref_form as ref_formation , Cours.version as version_session , Session.type, Session.langue, Cours.duree ,Session.lieu, Session.etat_session, Session.statut, Utilisateurs.email , Session.affecter , CONCAT(Utilisateurs.nom,' ', Utilisateurs.prenom) AS name FROM Session LEFT JOIN Utilisateurs ON Utilisateurs.id = Session.affecter INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.statut = 'active' and Session.id = ?";
  let query = conn.query(sql, [id], (err, result) => {
    if (err) {
      res.json({
        success: false,
        message:"not found this session"
      });
      
    } else {
      res.json({
        success: true,
        result: result,
      });
    }
  });

}
controler.editSession =  (req, res, next) => {
    const id = req.params.id;
    const id_cour = req.body.id_cour;
    const date_debut = req.body.date_debut;
    const  type = req.body.type;
    const  langue = req.body.langue;
    const  lieu = req.body.lieu;
    const etat_session = req.body.etat_session;
   
    let sql =
      "UPDATE Session SET id_cour = ? , date_debut = ? , type = ? , langue = ? , lieu = ? , etat_session = ?   WHERE id = ?";
    let query = conn.query(
      sql,
      [id_cour, date_debut, type, langue , lieu, etat_session, id],
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
  controler.editSessionForCalendar =  (req, res, next) => {
    const id = req.body.id;
    const date_debut = req.body.date_debut; 
    let sql =
      "UPDATE Session SET  date_debut = ? WHERE id = ?";
    let query = conn.query(
      sql,
      [date_debut,  id],
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
  controler.deleteSession =  (req, res, next) => {
    const id = req.params.id;  
      let sql =
        "DELETE FROM Session WHERE id = ?";
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
  controler.deleteSessionByCategory =  (req, res, next) => {
    const cat = req.params.cat;  
      let sql =
        "DELETE Session FROM Session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Cours.categorie = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
      let query = conn.query(
        sql,
        [cat],
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
  controler.deleteSessionIdCours =  (req, res, next) => {
    const idcours = req.params.idcours;  
      let sql =
        "DELETE Session FROM Session INNER JOIN Cours ON Cours.id = Session.id_cour WHERE Session.id_cour = ? and ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
      let query = conn.query(
        sql,
        [idcours],
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
  controler.editSessionAffected =  (req, res, next) => {
    const id = req.params.id; 
    const name = req.params.name;
      let sql =
        "UPDATE Session SET affecter = ?   WHERE id = ?";
      let query = conn.query(
        sql,
        [name, id],
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
  controler.updateStatutSession =  (req, res, next) => {
    const id = req.params.id; 
    const etatsession = req.params.etatsession;
      let sql =
        "UPDATE Session SET etat_session = ?   WHERE id = ?";
      let query = conn.query(
        sql,
        [etatsession, id],
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
  controler.editSessionEmptyAffected =  (req, res, next) => {
    const id = req.params.id; 
      let sql =
        "UPDATE Session SET affecter = null   WHERE id = ?";
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
  controler.deleteFormateur =  (req, res, next) => { 
    const id = req.params.id;  
      let sql =
        "UPDATE Session  INNER JOIN Cours ON Cours.id = Session.id_cour SET Session.affecter = null WHERE Session.affecter = ? AND ADDDATE(Session.date_debut , Cours.duree - 1) >= CURDATE() ";
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
  controler.getSendMail =  (req, res, next) => {
    const email = req.params.email;
    const ref = req.params.ref;
    const dated = req.params.dated;
    const datef = req.params.datef;
    const type = req.params.type;
    const langue = req.params.langue;
    const lieu = req.params.lieu;
    const version_session = req.params.version_session;
    const etat = req.params.etat;
    const etatsession = req.params.etatsession;
    const namef = req.params.namef;
    const namecours = req.params.namecours;
    const pays = req.params.pays;
    const contact = req.params.contact;
    const numeroc = req.params.numeroc;
    const mailc = req.params.mailc;
    const nbrpartic = req.params.nbrpartic;
    const monEmail = "houssemhouss82@gmail.com";
    const dateToday = moment(new Date()).format('DD/MM/YYYY');
    let background = '';
    switch (etatsession) {
      case 'en attente de confirmation':
        background = 'bg-warning';
        break;
      case 'reportée':
       background = 'bg-secondary';
          break;
      case 'annulée':
         background = 'bg-danger';
            break;
       case 'clôturée':
           background = 'bg-dark';
              break;
       case 'en cours':
           background = 'bg-info';
             break; 
       case 'confirmée':
          background = 'bg-success';
                break;                
         default:
       background = 'bg-dark';
        break;
    }
    // start nodemailer 
   let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "houssemhouss82@gmail.com", // generated ethereal user
      pass: "houssem987654321", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let output;
  if (version_session === 'null') {
    output = `
    <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MAIL</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.5/css/adminlte.min.css"> -->
    <style>
        *, ::after, ::before {
      box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
   }
        .container-fluid {
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      margin-right: auto;
      margin-left: auto;
  } 
  .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -7.5px;
      margin-left: -7.5px;
  }
  .col-12, .col-lg-4, .col-lg-3 , .col-lg-5{
      position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;  
  }
  .col-12{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%
  }
  @media only screen and (min-width: 768px) {
    .col-lg-4{
      -ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%
  }
  .col-lg-3{ -ms-flex:0 0 30%;flex:0 0 30%;max-width:30% }
  .col-lg-5{ -ms-flex:0 0 40%;flex:0 0 40%;max-width:40% }
  }
  @media only screen and (max-width: 768px) {
    .col-lg-4{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%;
     padding-bottom: 15px;
     padding-top: 15px;
     border-bottom: 1px solid #ccc;
  }

  
  }
  .invoice-col{float:left;width:33.3333333%}
  .callout.callout-info {
      border-left-color: #117a8b;
  }
  .callout {
      border-radius: .25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
      background-color: #fff;
      border-left: 5px solid #e9ecef;
      margin-bottom: 1rem;
      padding: 1rem;
      width: 100%;
  }
  .invoice {
      background: #fff;
      border: 1px solid rgba(0,0,0,.125);
      position: relative;
  }
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .bg-warning {
    background-color: #ffc107 !important;
  }
  .bg-secondary {
    background-color: #6c757d !important;
  }
  .bg-success {
    background-color: #28a745 !important;
  }
  .bg-info {
    background-color: #17a2b8 !important;
  }
  .bg-danger {
    background-color: #dc3545 !important;
  }
  .bg-dark {
    background-color: #343a40 !important;
  }
  .text-white {
    color: #ffffff !important;
  }
  .p-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
    padding-left: .5rem!important;
    padding-right: .5rem!important;
  }
  .custom-p{
    padding-right: 2rem !important;
  }
  .mb-3, .my-3 {
      margin-bottom: 1rem!important;
  }
  .float-right{float:right!important;
      margin-top:3px;
      margin-top:-7px;position:absolute;right:10px;top:50%
      } 
      th, td {
    padding: 15px;
    text-align: left;
  }
  .text-capt{
    text-transform: capitalize;
  }
  address {
    font-style: normal;
  }
  /***************************************************************start test*/
  .table{width:100%;margin-bottom:1rem;color:#212529;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#383f45}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#383f45}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}
  .table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}
  /*****************************************************************************end test*/
    </style>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> 
  </head>
  <body >
  
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="callout callout-info">
                <h3  ><i class="fas fa-info"></i> Note:</h3>
                Toutes les informations présentes sur ce mail sont susceptibles d'être modifiées.<BR>
          Toute information qui a changé vous sera envoyée par email et vous trouverez la modification à jour dans <a href="http://app.linsoft.xyz/#/auth">votre compte.</a>
              </div>
              <!-- Main content -->
              <div class="invoice p-3 mb-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                       LinSoft
                      <small class="float-right">Date: ${dateToday}</small>
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- info row -->
                <div class="row">
                  <div class="col-12">
                  <b>Mission:</b>
            <address  >
                    <b>Formation:</b> ${namecours}<br>
                    <b>Statut de session:</b> <span class="badge text-capt text-white ${background}"> ${etatsession}</span>
           </address>
                  </div>
                </div>
                <br>
                <br>
                <!-- Table row -->
                <div class="row">
                  <div class="table-responsive">
  <table class="table">
    <tbody>
      <tr>
        <th scope="row">Réf.</th>
        <td class="text-capt" >${ref}</td>
      </tr>
      <tr>
        <th scope="row">Langue</th>
        <td class="text-capt" >${langue}</td>
      </tr>
        <tr>
        <th scope="row">Date de début</th>
        <td>${dated}</td>
      </tr>
        <tr>
        <th scope="row">Date de fin</th>
        <td>${datef}</td>
      </tr>
        <tr>
        <th scope="row">Type</th>
        <td class="text-capt" >${type}</td>
      </tr>
        <tr>
        <th scope="row">Pays</th>
        <td class="text-capt" >${pays}</td>
      </tr>
  
        <tr>
        <th scope="row">Adresse</th>
        <td class="text-capt" >${lieu}</td>
      </tr>
          <tr>
        <th scope="row">Contact</th>
        <td class="text-capt" >${contact}</td>
      </tr>
          <tr>
        <th scope="row">Numéro de contact</th>
        <td>${numeroc}</td>
      </tr>
            <tr>
        <th scope="row">Mail de contact</th>
        <td>${mailc}</td>
      </tr>
    <tr>
        <th scope="row">Nombre estimé des participants</th>
        <td>${nbrpartic}</td>
      </tr>
    </tbody>
  </table>
                  </div>
                </div>
  
  <!-- ./wrapper -->
  
  
  </body>
  </html>               
    `
  } else {
    output = `
    <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MAIL</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.5/css/adminlte.min.css"> -->
    <style>
        *, ::after, ::before {
      box-sizing: border-box;
  }
        .container-fluid {
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      margin-right: auto;
      margin-left: auto;
  } 
  .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -7.5px;
      margin-left: -7.5px;
  }
  .col-12, .col-lg-4{
      position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;  
  }
  .col-12{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%
  }
  @media only screen and (min-width: 768px) {
    .col-lg-4{
      -ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%
  }
    
  }
  @media only screen and (max-width: 768px) {
    .col-lg-4{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%;
     padding-bottom: 15px;
     padding-top: 15px;
     border-bottom: 1px solid #ccc;
  }
  }
  .invoice-col{float:left;width:33.3333333%}
  .callout.callout-info {
      border-left-color: #117a8b;
  }
  .callout {
      border-radius: .25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
      background-color: #fff;
      border-left: 5px solid #e9ecef;
      margin-bottom: 1rem;
      padding: 1rem;
      width: 100%;
  }
  .invoice {
      background: #fff;
      border: 1px solid rgba(0,0,0,.125);
      position: relative;
  }
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .bg-warning {
    background-color: #ffc107 !important;
  }
  .bg-secondary {
    background-color: #6c757d !important;
  }
  .bg-success {
    background-color: #28a745 !important;
  }
  .bg-info {
    background-color: #17a2b8 !important;
  }
  .bg-danger {
    background-color: #dc3545 !important;
  }
  .bg-dark {
    background-color: #343a40 !important;
  }
  .text-white {
    color: #ffffff !important;
  }
  .p-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
    padding-left: .5rem!important;
    padding-right: .5rem!important;
  }
  .custom-padding {
    padding-right: 1rem !important;
  }
  .custom-p{
    padding-right: 2rem !important;
  }
  .mb-3, .my-3 {
      margin-bottom: 1rem!important;
  }
  .float-right{float:right!important;
      margin-top:3px;
      margin-top:-7px;position:absolute;right:10px;top:50%
      } 
      th, td {
    padding: 15px;
    text-align: left;
  }
  .text-capt{
    text-transform: capitalize;
  }
  address {
    font-style: normal;
  }
  /***************************************************************start test*/
  .table{width:100%;margin-bottom:1rem;color:#212529;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#383f45}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#383f45}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}
  .table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}
  /*****************************************************************************end test*/
    </style>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> 
  </head>
  <body >
  
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="callout callout-info">
                <h3  ><i class="fas fa-info"></i> Note:</h3>
                Toutes les informations présentes sur ce mail sont susceptibles d'être modifiées.<BR>
          Toute information qui a changé vous sera envoyée par email et vous trouverez la modification à jour dans <a href="http://app.linsoft.xyz/#/auth">votre compte.</a>
              </div>
              <!-- Main content -->
              <div class="invoice p-3 mb-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                       LinSoft
                      <small class="float-right">Date: ${dateToday}</small>
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- info row -->
                <div class="row">
                  <div class="col-12">
                  <b>Mission:</b>
            <address  >
                    <b>Formation:</b> ${namecours}<br>
                    <b>Statut de session:</b> <span class="badge text-capt text-white ${background}"> ${etatsession}</span>
           </address>
                  </div>
                </div>
                <br>
                <br>
                <!-- Table row -->
                <div class="row">
                  <div class="table-responsive">
  <table class="table">
    <tbody>
      <tr>
        <th scope="row">Réf.</th>
        <td class="text-capt" >${ref}</td>
      </tr>
      <tr>
        <th scope="row">Version</th>
        <td>${version_session}</td>
      </tr>
      <tr>
        <th scope="row">Langue</th>
        <td class="text-capt" >${langue}</td>
      </tr>
        <tr>
        <th scope="row">Date de début</th>
        <td>${dated}</td>
      </tr>
        <tr>
        <th scope="row">Date de fin</th>
        <td>${datef}</td>
      </tr>
        <tr>
        <th scope="row">Type</th>
        <td class="text-capt" >${type}</td>
      </tr>
        <tr>
        <th scope="row">Pays</th>
        <td class="text-capt" >${pays}</td>
      </tr>
  
        <tr>
        <th scope="row">Adresse</th>
        <td class="text-capt" >${lieu}</td>
      </tr>
          <tr>
        <th scope="row">Contact</th>
        <td class="text-capt" >${contact}</td>
      </tr>
          <tr>
        <th scope="row">Numéro de contact</th>
        <td>${numeroc}</td>
      </tr>
            <tr>
        <th scope="row">Mail de contact</th>
        <td>${mailc}</td>
      </tr>
    <tr>
        <th scope="row">Nombre estimé des participants</th>
        <td>${nbrpartic}</td>
      </tr>
    </tbody>
  </table>
                  </div>
                </div>
  
  <!-- ./wrapper -->
  
  
  </body>
  </html>               
    `   
  }

let subj = `Session assignée / ${etat} : ${ref} - ${dated} - ${namef}`;
  let mailOptions = {
    from: "dev@linsoft.xyz", // sender address
    to: email, // list of receivers
    subject: subj, // Subject line
    html: output, // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.json({
        success: false,
          error: err,
      });
    } else {
      res.json({
        success: true,
        result: info
      });
    }
  }); 
  //end nodemailer 
} 
controler.getSendMailDistancielle =  (req, res, next) => {
  const email = req.params.email;
  const ref = req.params.ref;
  const dated = req.params.dated;
  const datef = req.params.datef;
  const type = req.params.type;
  const langue = req.params.langue;
  const version_session = req.params.version_session;
  const etat = req.params.etat;
  const etatsession = req.params.etatsession;
  const namef = req.params.namef;
  const namecours = req.params.namecours;
  const contact = req.params.contact;
  const numeroc = req.params.numeroc;
  const mailc = req.params.mailc;
  const nbrpartic = req.params.nbrpartic;
  const monEmail = "houssemhouss82@gmail.com";
  const dateToday = moment(new Date()).format('DD/MM/YYYY');
  let background = '';
  switch (etatsession) {
    case 'en attente de confirmation':
      background = 'bg-warning';
      break;
    case 'reportée':
     background = 'bg-secondary';
        break;
    case 'annulée':
       background = 'bg-danger';
          break;
     case 'clôturée':
         background = 'bg-dark';
            break;
     case 'en cours':
         background = 'bg-info';
           break; 
     case 'confirmée':
        background = 'bg-success';
              break;                
       default:
     background = 'bg-dark';
      break;
  }
  // start nodemailer 
 let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "houssemhouss82@gmail.com", // generated ethereal user
    pass: "houssem987654321", // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});
let output;
switch (version_session) {
  case 'null':
    output = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MAIL</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        *, ::after, ::before {
      box-sizing: border-box;
    }
        .container-fluid {
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      margin-right: auto;
      margin-left: auto;
    } 
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -7.5px;
      margin-left: -7.5px;
    }
    .col-12, .col-lg-4{
      position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;  
    }
    .col-12{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%
    }
    @media only screen and (min-width: 768px) {
      .col-lg-4{
        -ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%
    }
      
    }
    @media only screen and (max-width: 768px) {
      .col-lg-4{
        -ms-flex:0 0 100%;
       flex:0 0 100%;
       max-width:100%;
       padding-bottom: 15px;
       padding-top: 15px;
       border-bottom: 1px solid #ccc;
    }
    }
    .invoice-col{float:left;width:33.3333333%}
    .callout.callout-info {
      border-left-color: #117a8b;
    }
    .callout {
      border-radius: .25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
      background-color: #fff;
      border-left: 5px solid #e9ecef;
      margin-bottom: 1rem;
      padding: 1rem;
      width: 100%;
    }
    .invoice {
      background: #fff;
      border: 1px solid rgba(0,0,0,.125);
      position: relative;
    }
    .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .bg-warning {
    background-color: #ffc107 !important;
    }
    .bg-secondary {
    background-color: #6c757d !important;
    }
    .bg-success {
    background-color: #28a745 !important;
    }
    .bg-info {
    background-color: #17a2b8 !important;
    }
    .bg-danger {
    background-color: #dc3545 !important;
    }
    .bg-dark {
    background-color: #343a40 !important;
    }
    .text-white {
    color: #ffffff !important;
    }
    .p-3 {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
      padding-left: .5rem!important;
      padding-right: .5rem!important;
    }
    .custom-padding {
      padding-right: 1rem !important;
    }
    .custom-p{
      padding-right: 2rem !important;
    }
    .mb-3, .my-3 {
      margin-bottom: 1rem!important;
    }
    .float-right{float:right!important;
      margin-top:3px;
      margin-top:-7px;position:absolute;right:10px;top:50%
      } 
      th, td {
    padding: 15px;
    text-align: left;
    }
    .text-capt{
    text-transform: capitalize;
    }
    address {
      font-style: normal;
    }
    /***************************************************************start test*/
    .table{width:100%;margin-bottom:1rem;color:#212529;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#383f45}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#383f45}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}
    .table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}
    /*****************************************************************************end test*/
    </style>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> 
    </head>
    <body >
    
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="callout callout-info">
                <h3  ><i class="fas fa-info"></i> Note:</h3>
                Toutes les informations présentes sur ce mail sont susceptibles d'être modifiées.<BR>
          Toute information qui a changé vous sera envoyée par email et vous trouverez la modification à jour dans <a href="http://app.linsoft.xyz/#/auth">votre compte.</a>
              </div>
              <!-- Main content -->
              <div class="invoice p-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                       LinSoft
                      <small class="float-right">Date: ${dateToday}</small>
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- info row -->
                <div class="row">
                  <div class="col-12">
                  <b>Mission:</b>
            <address  >
                    <b>Formation:</b> ${namecours}<br>
                    <b>Statut de session:</b> <span class="badge text-capt text-white ${background}"> ${etatsession}</span>
           </address>
                  </div>
                </div>
                <br>
                <br>
                <!-- Table row -->
                <div class="row">
                  <div class="table-responsive">
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">Réf.</th>
        <td class="text-capt" >${ref}</td>
      </tr>
      <tr>
        <th scope="row">Langue</th>
        <td class="text-capt" >${langue}</td>
      </tr>
        <tr>
        <th scope="row">Date de début</th>
        <td>${dated}</td>
      </tr>
        <tr>
        <th scope="row">Date de fin</th>
        <td>${datef}</td>
      </tr>
        <tr>
        <th scope="row">Type</th>
        <td class="text-capt" >${type}</td>
      </tr>
        <tr>
        <tr>
        <th scope="row">Contact</th>
        <td class="text-capt" >${contact}</td>
      </tr>
          <tr>
        <th scope="row">Numéro de contact</th>
        <td>${numeroc}</td>
      </tr>
            <tr>
        <th scope="row">Mail de contact</th>
        <td>${mailc}</td>
      </tr>
    <tr>
        <th scope="row">Nombre estimé des participants</th>
        <td>${nbrpartic}</td>
      </tr>
    </tbody>
    </table>
                  </div>
                </div>
    
    <!-- ./wrapper -->
    
    
    </body>
    </html>               
    `
    break;

  default:
    output = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MAIL</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        *, ::after, ::before {
      box-sizing: border-box;
    }
        .container-fluid {
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;
      margin-right: auto;
      margin-left: auto;
    } 
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -7.5px;
      margin-left: -7.5px;
    }
    .col-12, .col-lg-4{
      position: relative;
      width: 100%;
      padding-right: 7.5px;
      padding-left: 7.5px;  
    }
    .col-12{
      -ms-flex:0 0 100%;
     flex:0 0 100%;
     max-width:100%
    }
    @media only screen and (min-width: 768px) {
      .col-lg-4{
        -ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%
    }
      
    }
    @media only screen and (max-width: 768px) {
      .col-lg-4{
        -ms-flex:0 0 100%;
       flex:0 0 100%;
       max-width:100%;
       padding-bottom: 15px;
       padding-top: 15px;
       border-bottom: 1px solid #ccc;
    }
    }
    .invoice-col{float:left;width:33.3333333%}
    .callout.callout-info {
      border-left-color: #117a8b;
    }
    .callout {
      border-radius: .25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
      background-color: #fff;
      border-left: 5px solid #e9ecef;
      margin-bottom: 1rem;
      padding: 1rem;
      width: 100%;
    }
    .invoice {
      background: #fff;
      border: 1px solid rgba(0,0,0,.125);
      position: relative;
    }
    .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .bg-warning {
    background-color: #ffc107 !important;
    }
    .bg-secondary {
    background-color: #6c757d !important;
    }
    .bg-success {
    background-color: #28a745 !important;
    }
    .bg-info {
    background-color: #17a2b8 !important;
    }
    .bg-danger {
    background-color: #dc3545 !important;
    }
    .bg-dark {
    background-color: #343a40 !important;
    }
    .text-white {
    color: #ffffff !important;
    }
    .p-3 {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
      padding-left: .5rem!important;
      padding-right: .5rem!important;
    }
    .custom-padding {
      padding-right: 1rem !important;
    }
    .custom-p{
      padding-right: 2rem !important;
    }
    .mb-3, .my-3 {
      margin-bottom: 1rem!important;
    }
    .float-right{float:right!important;
      margin-top:3px;
      margin-top:-7px;position:absolute;right:10px;top:50%
      } 
      th, td {
    padding: 15px;
    text-align: left;
    }
    .text-capt{
    text-transform: capitalize;
    }
    address {
      font-style: normal;
    }
    /***************************************************************start test*/
    .table{width:100%;margin-bottom:1rem;color:#212529;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#383f45}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#383f45}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}
    .table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}
    /*****************************************************************************end test*/
    </style>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> 
    </head>
    <body >
    
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="callout callout-info">
                <h3  ><i class="fas fa-info"></i> Note:</h3>
                Toutes les informations présentes sur ce mail sont susceptibles d'être modifiées.<BR>
          Toute information qui a changé vous sera envoyée par email et vous trouverez la modification à jour dans <a href="http://app.linsoft.xyz/#/auth">votre compte.</a>
              </div>
              <!-- Main content -->
              <div class="invoice p-3 mb-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                       LinSoft
                      <small class="float-right">Date: ${dateToday}</small>
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- info row -->
                <div class="row">
                  <div class="col-12">
                  <b>Mission:</b>
            <address  >
                    <b>Formation:</b> ${namecours}<br>
                    <b>Statut de session:</b> <span class="badge text-capt text-white ${background}"> ${etatsession}</span>
           </address>
                  </div>
                </div>
                <br>
                <br>
                <!-- Table row -->
                <div class="row">
                  <div class="table-responsive">
    <table class="table">
    <tbody>
      <tr>
        <th scope="row">Réf.</th>
        <td class="text-capt" >${ref}</td>
      </tr>
      <tr>
        <th scope="row">Version</th>
        <td>${version_session}</td>
      </tr>
      <tr>
        <th scope="row">Langue</th>
        <td class="text-capt" >${langue}</td>
      </tr>
        <tr>
        <th scope="row">Date de début</th>
        <td>${dated}</td>
      </tr>
        <tr>
        <th scope="row">Date de fin</th>
        <td>${datef}</td>
      </tr>
        <tr>
        <th scope="row">Type</th>
        <td class="text-capt" >${type}</td>
      </tr>
        <tr>
        <tr>
        <th scope="row">Contact</th>
        <td class="text-capt" >${contact}</td>
      </tr>
          <tr>
        <th scope="row">Numéro de contact</th>
        <td>${numeroc}</td>
      </tr>
            <tr>
        <th scope="row">Mail de contact</th>
        <td>${mailc}</td>
      </tr>
    <tr>
        <th scope="row">Nombre estimé des participants</th>
        <td>${nbrpartic}</td>
      </tr>
    </tbody>
    </table>
                  </div>
                </div>
    
    <!-- ./wrapper -->
    
    
    </body>
    </html>               
    ` 
    break;
}
let mailOptions = {
  from: "houssemhouss82@gmail.com", // sender address
  to: email, // list of receivers
  subject: `Session assignée / ${etat} : ${ref} - ${dated} - ${namef}`, // Subject line
  html: output, // plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    res.json({
      success: false,
        error: err,
    });
  } else {
    res.json({
      success: true,
      result: info
    });
  }
}); 
//end nodemailer 
}

controler.emailFormateurChanger =  (req, res, next) => {
  const email = req.params.email;
  const namef = req.params.namef;
  const ref = req.params.ref;
  const designation = req.params.designation;
  const dated = req.params.dated;
  const datef = req.params.datef;
  const monEmail = "houssemhouss82@gmail.com";
  // start nodemailer 
 let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "houssemhouss82@gmail.com", // generated ethereal user
    pass: "houssem987654321", // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

const output = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>MAIL</title>
<!-- Tell the browser to be responsive to screen width -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    *, ::after, ::before {
  box-sizing: border-box;
}
    .container-fluid {
  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;
  margin-right: auto;
  margin-left: auto;
} 
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -7.5px;
  margin-left: -7.5px;
}
.col-12, .col-lg-4{
  position: relative;
  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;  
}
.col-12{
  -ms-flex:0 0 100%;
 flex:0 0 100%;
 max-width:100%
}
@media only screen and (min-width: 768px) {
  .col-lg-4{
    -ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%
}
  
}
@media only screen and (max-width: 768px) {
  .col-lg-4{
    -ms-flex:0 0 100%;
   flex:0 0 100%;
   max-width:100%;
   padding-bottom: 15px;
   padding-top: 15px;
   border-bottom: 1px solid #ccc;
}
}
.invoice-col{float:left;width:33.3333333%}
.callout.callout-info {
  border-left-color: #117a8b;
}
.callout {
  border-radius: .25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
  background-color: #fff;
  border-left: 5px solid #e9ecef;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.125);
    border-right: 1px solid rgba(0,0,0,.125);
    border-top: 1px solid rgba(0,0,0,.125);
}

.text-white {
color: #ffffff !important;
}
.p-3 {
  padding: 1rem!important;
}
.mb-3, .my-3 {
  margin-bottom: 1rem!important;
}
.float-right{float:right!important;
  margin-top:3px;
  margin-top:-7px;position:absolute;right:10px;top:50%
  } 
  th, td {
padding: 15px;
text-align: left;
}


</style>

</head>
<body >
<br>
<br>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        
        <div class="callout callout-info">
            <p>Bonjour  ${namef},</p>
            <p>Nous vous informons que votre allocation à la formation ${ref}-${designation} du ${dated} au ${datef} est annulée.</p>
            <p>Cordialement, <br>
               Equipe Formation  </p>  
          </div>
              </div>
            </div>
            </div>
<!-- ./wrapper -->


</body>
</html>                
` ;

let mailOptions = {
  from: "houssemhouss82@gmail.com", // sender address
  to: email, // list of receivers
  subject: `Session assignée / Annulée : ${ref} - ${dated} - ${namef}`, // Subject line
  html: output, // plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    res.json({
      success: false,
        error: err,
    });
  } else {
    res.json({
      success: true,
      result: info
    });
  }
}); 
//end nodemailer 
} 
module.exports = controler;