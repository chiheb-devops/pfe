const jwt = require("jsonwebtoken");
let  generator = require('generate-password');
const nodemailer = require("nodemailer");
const CryptoJS = require("crypto-js");
const moment = require('moment');
const key_crypto = 'linSoft12345687546';
const path = require("path");


const controler = {};

const mysql = require("mysql");
const SECRET = "kfjngiurhguioghtiou";
const SECRETREST = "kfjngiurDFHSRTDHRThguioghtiou";

const conn = require('../config/database')

controler.postUser = async (req, res, next) => {

let  password_g = await generator.generate({
    length: 15,
    numbers: true
});

 
 
  const ciphertext = CryptoJS.AES.encrypt(password_g, key_crypto).toString();
    let data = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      tele: req.body.tele,
      email: req.body.email,
      fonction: req.body.fonction,
      role: req.body.role || 'Instructeur' ,
      examinateur: req.body.examinateur || 'non' ,
      statut: req.body.statut || 'active' ,
      password: ciphertext,
    };

    let sql = "INSERT INTO Utilisateurs SET ?";
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
 // start nodemailer 
 let transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "houssemhouss82@gmail.com", // generated ethereal user
    pass: "houssem987654321", // generated ethereal password
  },
});
const mail = req.body.email;
const password_mail = password_g;
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
<img width="200px" src="cid:logo1"> <br><br>


            <div class="card card-default">
              <div class="card-header">
                 <h4 class="card-title" ><font color="red">Bienvenue sur LinSoft LMS</font></h4>
              </div>
              <div class="card-body">
                <div class="callout callout-danger">
                 
                  <p> 
                  Votre email pour le compte Formateur <b> ${mail} </b>
                  <br>
                  Votre mot de passe pour le compte Formateur <b> ${password_mail} </b>
				  </p>
				  <a  href="http://app.linsoft.xyz/#/auth" class="btn text-white  btn-danger">Se connecter</a>
                </div>
        </div>
        </div>  
</center>
</div>
</div>
</body>
</html> ` ;

let mailOptions = {
  from: "houssemhouss82@gmail.com", // sender address
  to: mail, // list of receivers
  subject: "Confirmation compte instructeur", // Subject line
  html: outpout,
  attachments:[
    {
      filename : 'LogoLinSoft.png',
      path: `${__dirname}/../images/LogoLinSoft.png`,
      cid : 'logo1'
}
  ] // plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } 
});

//end nodemailer 

    });
   
    
  
};
controler.postUserWithRole = async (req, res, next) => {

  let  password_g = await generator.generate({
      length: 15,
      numbers: true
  });
  
   
   
    const ciphertext = CryptoJS.AES.encrypt(password_g, key_crypto).toString();
      let data = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        tele: 'null',
        email: req.body.email,
        fonction: 'role',
        role: req.body.role,
        examinateur: 'null' ,
        statut: req.body.statut || 'active' ,
        password: ciphertext,
      };
  
      let sql = "INSERT INTO Utilisateurs SET ?";
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
   // start nodemailer 
   let transporter = nodemailer.createTransport({
    service: "gmail",
  
    auth: {
      user: "houssemhouss82@gmail.com", // generated ethereal user
      pass: "houssem987654321", // generated ethereal password
    },
  });
  const mail = req.body.email;
  const password_mail = password_g;
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
  <img width="200px" src="cid:logo1"> <br><br>
  
  
              <div class="card card-default">
                <div class="card-header">
                   <h4 class="card-title" ><font color="red">Bienvenue sur LinSoft LMS</font></h4>
                </div>
                <div class="card-body">
                  <div class="callout callout-danger">
                   
                    <p> 
                    Votre email pour le compte <b> ${mail} </b>
                    <br>
                    Votre mot de passe pour le compte <b> ${password_mail} </b>
            </p>
            <a  href="http://app.linsoft.xyz/#/auth" class="btn text-white  btn-danger">Se connecter</a>
                  </div>
          </div>
          </div>  
  </center>
  </div>
  </div>
  </body>
  </html> ` ;
  
  let mailOptions = {
    from: "houssemhouss82@gmail.com", // sender address
    to: mail, // list of receivers
    subject: "Confirmation compte", // Subject line
    html: outpout,
    attachments:[
      {
        filename : 'LogoLinSoft.png',
        path: `${__dirname}/../images/LogoLinSoft.png`,
        cid : 'logo1'
  }
    ] // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } 
  });
  
  //end nodemailer 
  
      });
     
      
    
  };
controler.getUserById = async (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT * FROM Utilisateurs WHERE id = ?";
  let query = conn.query(sql, [id], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found user"
      });
    }
  });
}

controler.editUser = async (req, res, next) => {
  const id = req.params.id;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const tele = req.body.tele;
  const examinateur = req.body.examinateur;
  const fonction = req.body.fonction;
  /*
  const password = req.body.password;
  const ciphertext = CryptoJS.AES.encrypt(password, key_crypto).toString();
  */
  let sql =
    "UPDATE Utilisateurs SET nom = ?, prenom = ?, email = ? , tele = ?, examinateur = ?, fonction = ?   WHERE id = ?";
  let query = conn.query(
    sql,
    [nom, prenom, email, tele , examinateur, fonction, id],
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
controler.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let sql = "UPDATE Utilisateurs SET statut = 'inactive'   WHERE id = ?";
  let query = conn.query(sql, id, (err, result) => {
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
  });
}
controler.FormateurReturnActive = async (req, res, next) => {
  const id = req.params.id;
  let sql = "UPDATE Utilisateurs SET statut = 'active'   WHERE id = ?";
  let query = conn.query(sql, id, (err, result) => {
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
  });
}
controler.getAllFormateurActive = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs WHERE role = 'Instructeur' and statut = 'active'";
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
controler.getAllUserWithRole = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs WHERE fonction = 'role' and statut = 'active'";
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
controler.getAllUser = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs";
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
controler.getAllExaminateur = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs WHERE role = 'Instructeur' and examinateur = 'oui' ";
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
controler.getAllExaminateurInactive = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs WHERE role = 'Instructeur' and examinateur = 'etait' ";
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
controler.getAllExaminateurForPlanning = async (req, res, next) => {
  let sql = "SELECT * FROM Utilisateurs WHERE role = 'Instructeur' and examinateur = 'oui' and statut = 'active' ";
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
controler.deleteExaminateur = async (req, res, next) => {
  const id = req.params.id;
  let sql = "UPDATE Utilisateurs SET examinateur = 'etait'   WHERE id = ?";
  let query = conn.query(sql, id, (err, result) => {
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
  });
}
controler.ExaminateurReturnActive = async (req, res, next) => {
  const id = req.params.id;
  let sql = "UPDATE Utilisateurs SET examinateur = 'oui'   WHERE id = ?";
  let query = conn.query(sql, id, (err, result) => {
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
  });
}
controler.getAllFormateurInactive = async (req, res, next) =>{
  let sql = "SELECT * FROM Utilisateurs WHERE role = 'Instructeur' and statut = 'inactive'";
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
controler.editFormateurPassword = async (req, res, next) => {
  const id = req.params.id;
  const email = req.params.email;
  
  const  password_genr = await generator.generate({
    length: 15,
    numbers: true
});
  const ciphertext = CryptoJS.AES.encrypt(password_genr, key_crypto).toString();
  
  let sql =
    "UPDATE Utilisateurs SET password = ? WHERE id = ?";
  let query =  conn.query(
    sql,
    [ ciphertext , id],
    (err, result) => {
      if(err) {
      return  res.json({
          success: false,
          error: err
        });
      }
      
       else {
       res.json({
          success: true,
          result: result 
        })
           // start nodemailer 
let transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "houssemhouss82@gmail.com", // generated ethereal user
    pass: "houssem987654321", // generated ethereal password
  },
});
const mail = email;
/*
const bytes  = CryptoJS.AES.decrypt(result[0].password, key_crypto);
const originalText = bytes.toString(CryptoJS.enc.Utf8); */
const password_mail = password_genr;
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
<img width="200px" src="cid:logo2"> <br><br>

            <div class="card card-default">
              <div class="card-header">
                 <h4 class="card-title" ><font color="red">Votre mot de passe a été réinitialisé!</font></h4>
              </div>
              <div class="card-body">
                <div class="callout callout-danger">
                  <p>
                  Vous avez demandé la réinitialisation de votre mot de passe le ${dateToday}. </p>
                  <p> Voici votre nouveau mot de passe: <b> ${password_mail}</b></p>
                  <p> Cliquer sur "Se connecter", vous serez redirigé vers votre compte ${mail} ,
                   où vous pourrez vous authentifier.
				  </p>
				  <a  href="http://app.linsoft.xyz/#/auth" class="btn text-white  btn-danger">Se connecter</a>
                </div>
        </div>
        </div>  
</center>
</div>
</div>
</body>
</html> ` ;
let mailOptions = {
  from: "houssemhouss82@gmail.com", // sender address
  to: mail, // list of receivers
  subject: "Votre mot de passe a été réinitialisé", // Subject line
  html: outpout,
  attachments:[
    {
      filename : 'LogoLinSoft.png',
      path: `${__dirname}/../images/LogoLinSoft.png`,
      cid : 'logo2'
}
  ] // plain text body
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
  console.log(err);
  } 
});

//end nodemailer 




      } 
    }
  );
}
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
<img width="200px" src="cid:logo3"> <br><br>

            <div class="card card-default">
              <div class="card-header">
                 <h4 class="card-title" ><font color="red">Votre mot de passe a bien été modifié!</font></h4>
              </div>
              <div class="card-body">
                <div class="callout callout-danger">
                 <p> Votre mot de passe pour le compte Formateur ${email} a été modifié le ${dateToday}. <br>
				  
				  </p>
				  <a  href="http://app.linsoft.xyz/#/auth" class="btn text-white  btn-danger">Se connecter</a>
                </div>
        </div>
        </div>  
</center>
</div>
</div>
</body>
</html> ` ;
let mailOptions = {
  from: "houssemhouss82@gmail.com", // sender address
  to: email, // list of receivers
  subject: "Votre mot de passe a bien été modifié", // Subject line
  html: outpout,
  attachments:[
    {
      filename : 'LogoLinSoft.png',
      path: `${__dirname}/../images/LogoLinSoft.png`,
      cid : 'logo3'
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
controler.postVerifAuthoriazation = async (req, res, next) => {
  
  try {
    const token = req.body.token ;
  
    let decoded = jwt.verify(token, process.env.SECRET || SECRET );
   
    let role = decoded.results[0].role;
    if (role == 'admin') {
      res.json({
        success: true
      });
    } else {
      res.json({
        success: false
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
module.exports = controler;