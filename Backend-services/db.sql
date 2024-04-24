CREATE TABLE Utilisateurs ( id INT AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(250) NOT null, prenom VARCHAR(250) NOT null , email VARCHAR(250) UNIQUE NOT null , tele VARCHAR(250) UNIQUE NOT null , fonction VARCHAR(250) NOT null
 ,password VARCHAR(500) NOT null , role VARCHAR(250) DEFAULT 'formateur',  statut VARCHAR(250) DEFAULT 'active' );


 CREATE TABLE Categories ( id INT AUTO_INCREMENT PRIMARY KEY, nom_categorie VARCHAR(250) UNIQUE NOT null,  statut VARCHAR(250) DEFAULT 'active' );

CREATE TABLE Cours ( id INT AUTO_INCREMENT PRIMARY KEY,  ref_form VARCHAR(250) NOT null , designation VARCHAR(250) NOT null , duree VARCHAR(250) NOT null
 , version VARCHAR(250)  , categorie VARCHAR(250) NOT null  ,  statut VARCHAR(250) DEFAULT 'active', CONSTRAINT cours_fk FOREIGN KEY(categorie) REFERENCES Categories(nom_categorie) on UPDATE CASCADE on DELETE CASCADE );


CREATE TABLE Session ( id INT AUTO_INCREMENT PRIMARY KEY, id_cour INT NOT null,  date_debut DATE NOT null ,
  type VARCHAR(250) NOT null , langue VARCHAR(250) NOT null , lieu VARCHAR(250) , etat_session VARCHAR(250) NOT null , statut VARCHAR(250) DEFAULT 'active', affecter int DEFAULT null , CONSTRAINT session_fk_id_cour FOREIGN KEY(id_cour) REFERENCES Cours(id) on UPDATE CASCADE on DELETE CASCADE,
 CONSTRAINT session_id_formateur_fk FOREIGN KEY(affecter) REFERENCES Utilisateurs(id) on UPDATE CASCADE on DELETE CASCADE ); 

CREATE TABLE Fournisseurs ( id INT AUTO_INCREMENT PRIMARY KEY, nom_fournisseur VARCHAR(250) UNIQUE NOT null,  statut VARCHAR(250) DEFAULT 'active' );  

CREATE TABLE Formateur_certif ( id INT AUTO_INCREMENT PRIMARY KEY,  email_formateur VARCHAR(250) NOT null, 
 nom_certif VARCHAR(500) NOT null , statut VARCHAR(250) DEFAULT 'active', CONSTRAINT UC_Certif UNIQUE (email_formateur, nom_certif),
 CONSTRAINT Formateur_fk FOREIGN KEY(email_formateur) REFERENCES Utilisateurs(email) on UPDATE CASCADE on DELETE CASCADE );

CREATE TABLE Formateur_cv ( id INT AUTO_INCREMENT PRIMARY KEY,  email_formateur VARCHAR(250) NOT null, 
 nom_cv VARCHAR(500) NOT null , statut VARCHAR(250) DEFAULT 'active', CONSTRAINT UC_cv UNIQUE (email_formateur, nom_cv),
 CONSTRAINT Formateur_fk_cv FOREIGN KEY(email_formateur) REFERENCES Utilisateurs(email) on UPDATE CASCADE on DELETE CASCADE );

 CREATE TABLE Planning_Formateur ( id INT AUTO_INCREMENT PRIMARY KEY,  id_formateur int , statut_f VARCHAR(250) NOT null , id_session int UNIQUE NOT null , address_fournisseur VARCHAR(500) DEFAULT null , id_fournisseur int DEFAULT null , nbr_participant VARCHAR(250) NOT null , numero_for VARCHAR(250) NOT null ,contact_for VARCHAR(250) NOT null  , 
 statut VARCHAR(250) DEFAULT 'active', mail_contact  VARCHAR(250) NOT null ,
 CONSTRAINT planning_fk_id_formateur FOREIGN KEY(id_formateur) REFERENCES Utilisateurs(id) on UPDATE CASCADE on DELETE CASCADE ,
CONSTRAINT planning_fk_session_id FOREIGN KEY(id_session) REFERENCES Session(id) on UPDATE CASCADE on DELETE CASCADE ,
CONSTRAINT planning_fk_fournisseur_id FOREIGN KEY(id_fournisseur) REFERENCES Fournisseurs(id) on UPDATE CASCADE on DELETE CASCADE  );
