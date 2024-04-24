const controler = {};
const path = require('path');
const conn = require('../config/database');
const fileupload = require('express-fileupload');
const mkdirp = require('mkdirp');
const fs = require('fs');
controler.postCertif =  (req, res, next) => {
    const email = req.params.email;
    const file = req.files.file
    mkdirp(`${__dirname}/../uploads/certif/${email}`).then( made => {
      file.mv(`${__dirname}/../uploads/certif/${email}/` +file.name, async function(err, result){
        if (err) {
            res.json({
               success: false,
               error: err,
            });
        }
        else{
           let data = {
             email_formateur: email,
               nom_certif: file.name,
               id_ajouter: req.params.idajouter,
               statut: req.body.statut || 'active'
             };
             let sql = await "INSERT INTO Formateur_certif SET ?";
             let query =   conn.query(sql, data,   (err, result) => {
              if (err) {
              return res.json({
               success: false,
                 error: err.sqlMessage,
               });
             } else {
               res.json({
                 success: true,   
               });
             } 
           });     
       }
  })
    }

     
      );

}

controler.postCv =  (req, res, next) => {
  const email = req.params.email;
  const file = req.files.file;
  mkdirp(`${__dirname}/../uploads/cv/${email}`).then( made => {
    file.mv(`${__dirname}/../uploads/cv/${email}/` +file.name, async function(err, result){
      if (err) {
          res.json({
             success: false,
             error: err,
          });
      }
      else{
         let data = {
           email_formateur: email,
             nom_cv: file.name,
             id_ajouter: req.params.idajouter,
             statut: req.body.statut || 'active'
           };
           let sql = await "INSERT INTO Formateur_cv SET ?";
           let query =   conn.query(sql, data,   (err, result) => {
            if (err) {
            return res.json({
             success: false,
               error: err.sqlMessage,
             });
           } else {
             res.json({
               success: true,   
             });
           } 
         });     
     }
})
  });


}
controler.downloadCertif =  (req, res, next) => {
 
 try {
  const name = req.params.name;
  const email = req.params.email;
  const file = `${__dirname}/../uploads/certif/${email}/${name}`;
  res.download(file);
 } catch (error) {
  res.json({
    success: false,
    error: err,
  });
 }

 
}
controler.downloadCv =  (req, res, next) => {
 
  try {
   const name = req.params.name;
   const email = req.params.email;
   const file = `${__dirname}/../uploads/cv/${email}/${name}`;
   res.download(file);
  } catch (error) {
   res.json({
     success: false,
     error: err,
   });
  }
 
  
 }
controler.getAllCertifActive =  (req, res, next) => {
  let sql = "SELECT * FROM Formateur_certif INNER JOIN Utilisateurs ON Utilisateurs.id = Formateur_certif.id_formateur WHERE  Formateur_certif.statut = 'active'";
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
controler.getAllCertifInactive =  (req, res, next) => {
  let sql = "SELECT * FROM Formateur_certif INNER JOIN Utilisateurs ON Utilisateurs.id = Formateur_certif.id_formateur WHERE Utilisateurs.statut = 'inactive'";
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

controler.getAllCertifById =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT * FROM Utilisateurs  INNER JOIN Formateur_certif ON Utilisateurs.email = Formateur_certif.email_formateur WHERE  Formateur_certif.statut = 'active' and Utilisateurs.id = ?";
  let query = conn.query(sql, [id], (err, result) => {
    if (result.length > 0) {
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        message:"not found this formateur"
      });
    }
  });

}
controler.getAllCvById =  (req, res, next) => {
  const id = req.params.id;
  let sql = "SELECT * FROM Utilisateurs  INNER JOIN Formateur_cv ON Utilisateurs.email = Formateur_cv.email_formateur WHERE  Formateur_cv.statut = 'active' and Utilisateurs.id = ?";
  let query = conn.query(sql, [id], (err, results) => {
    if (results.length > 0) {
      res.json({
        success: true,
        result: results,
      });
    } else {
      res.json({
        success: false,
        message:"not found this formateur"
      });
    }
  });

}
controler.deleteCertif =  (req, res, next) => {
  const nom_certif = req.params.name;
  const email = req.params.email;
  let sql = "DELETE FROM Formateur_certif WHERE nom_certif = ? and email_formateur = ? ";
  let query = conn.query(sql, [nom_certif, email], (err, results) => {
    if(err)  {
      res.json({
        success: false,
      });
    }
    else if(results.affectedRows === 0){
      res.json({
        success: false,
        message: 'this certif not found',
        resul: results
      });
    }
    else {
      const file = `${__dirname}/../uploads/certif/${email}/${nom_certif}`;
      fs.unlink(file, (eroor) => {
      if (eroor) {   
          return
        }
         else{
          res.json({
            success: true,
          });
         }
      });
    
    } 
  });

}
controler.deleteCv =  (req, res, next) => {
  const nom_cv  = req.params.name;
  const email = req.params.email;
  let sql = "DELETE FROM Formateur_cv WHERE nom_cv  = ? and email_formateur = ? ";
  let query = conn.query(sql, [nom_cv,  email], (err, results) => {
    if(err)  {
      res.json({
        success: false,
      });
    }
    else if(results.affectedRows === 0){
      res.json({
        success: false,
        message: 'this cv not found',
        resul: results
      });
    }
    else {
      const file = `${__dirname}/../uploads/cv/${email}/${nom_cv}`;
      fs.unlink(file, (eroor) => {
      if (eroor) {   
          return
        }
         else{
          res.json({
            success: true,
          });
         }
      });
    
    } 
  });

}
module.exports = controler;