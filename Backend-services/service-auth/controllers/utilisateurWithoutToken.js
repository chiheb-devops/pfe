const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const CryptoJS = require("crypto-js");
const key_crypto = 'linSoft12345687546';
const controler = {};
const moment = require('moment');
const SECRET = "kfjngiurhguioghtiou";
const SECRETREST = "kfjngiurDFHSRTDHRThguioghtiou";

const conn = require('../config/database');

controler.getUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    conn.query("SELECT * FROM Utilisateurs WHERE email = ?", [email], async function (
      error,
      results,
      fields
    ) {
      if (error) {
        res.json({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          
          const bytes  = CryptoJS.AES.decrypt(results[0].password, key_crypto);
          const originalText = bytes.toString(CryptoJS.enc.Utf8);
          const comparision =  password == originalText;
          const r = [{ nom: results[0].nom,
            prenom: results[0].prenom,
            role: results[0].role,
            roleAdmin: results[0].roleAdmin,
            statut: results[0].statut,
            id: results[0].id,
            email: results[0].email,
            examinateur : results[0].examinateur,
          }];
          if (true) {
            const token = jwt.sign({ results }, process.env.SECRET || SECRET);
  
            res.json({
              code: 200,
              success: true,
              message: "login sucessfull",
              token,  
              results: r,
              
            });
          } else {
            res.json({
              code: 204,
              success: false,
              message: "mots de passe incorrect",
            });
          }
        } else {
          res.json({
            code: 206,
            success: false,
            message: "email n'est pas existe",
          });
        }
      }
    });
  };
controler.FormateurChangerVotrePassword = async (req, res, next) => {
  
    try {
      const token = req.body.token ;
      const newpassword = req.body.newpassword;
      const ciphertext = CryptoJS.AES.encrypt(newpassword, key_crypto).toString();
      let decoded = jwt.verify(token, process.env.SECRETREST || SECRETREST );
      const email = decoded.result[0].email;
  
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
          });
        } 
      }
    );
      }
     catch(err) {
      res.json({
        success: false,
        error: err 
      });
    }
  }
  controler.getUserByEmail = async (req, res, next) =>{
    const email = req.params.email;
    let sql = "SELECT * FROM Utilisateurs WHERE email = ?";
    let query = conn.query(sql, [email],  (err, result) => {
       if (result.length > 0) {
       res.json({
          success: true,
          result: result,
        });
        // start nodemailer 
  let transporter = nodemailer.createTransport({
    service: "gmail",
  
    auth: {
      user: "houssemhouss82@gmail.com", // generated ethereal user
      pass: "houssem987654321", // generated ethereal password
    },
  });
  const emailuser = result[0].email;
  const token = jwt.sign({result}, process.env.SECRETREST || SECRETREST);
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
  <img width="200px" src="cid:logo5"> <br><br>
  
              <div class="card card-default">
                <div class="card-header">
                   <h4 class="card-title" ><font color="red">Reset votre mot de passe!</font></h4>
                </div>
                <div class="card-body">
                  <div class="callout callout-danger">
                   <p>Reset votre mot de passe pour le compte Formateur <b>${emailuser}</b> </p>
            <a  href="http://app.linsoft.xyz/#/auth/recover-password/${token}" class="btn text-white  btn-danger">Reset</a>
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
    to: emailuser, // list of receivers
    subject: "Reset votre mot de passe", // Subject line
    html: outpout,
    attachments:[
      {
        filename : 'LogoLinSoft.png',
        path: `${__dirname}/../images/LogoLinSoft.png`,
        cid : 'logo5'
  }
    ]  // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
     console.log(err);
    } 
  });
  
  //end nodemailer 
      } else {
       return res.json({
          success: false,
          message:"email n'est pas existe"
        });
      }
  
  
    });
  }
  module.exports = controler;