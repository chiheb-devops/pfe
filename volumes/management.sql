-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: management
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_categorie` (`nom_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (5,'Red Hat','active'),(6,'AWS','active');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cours`
--

DROP TABLE IF EXISTS `Cours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_form` varchar(250) NOT NULL,
  `designation` varchar(250) NOT NULL,
  `duree` varchar(250) NOT NULL,
  `version` varchar(250) DEFAULT NULL,
  `categorie` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `cours_fk` (`categorie`),
  CONSTRAINT `cours_fk` FOREIGN KEY (`categorie`) REFERENCES `Categories` (`nom_categorie`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cours`
--

LOCK TABLES `Cours` WRITE;
/*!40000 ALTER TABLE `Cours` DISABLE KEYS */;
INSERT INTO `Cours` VALUES (14,'RH124','Administration système Red Hat I','5','8','Red Hat','active'),(15,'RH134','Administration système Red Hat II','5','8','Red Hat','active'),(16,'RH199','Cours accéléré RHCSAE','4','RHEL8','Red Hat','active'),(17,'RH254','Administration système RedHat III','3','8','Red Hat','active'),(18,'RH299','Laboratoire de certification RHC','4','8','Red Hat','active'),(19,'RH294','Administration système Red Hat III : automatisation de Linux avec Ansible','4','2.8','Red Hat','active'),(20,'RH342','Red Hat Enterprise Linux : diagnostic et résolution des problèmes','4','8','Red Hat','active'),(21,'RH403','Administration de Red Hat Satellite 6','4','8','Red Hat','active'),(22,'RH436','Configuration en cluster haute disponibilité RedHat','4','7.1','Red Hat','active'),(23,'RH442','Optimisation des performances Red Hat : Linux dans des environnements physiques, virtuels et cloud','4','8','Red Hat','active'),(24,'RH354','Nouvelles fonctions de Red Hat Enterprise Linux 8 pour administrateurs Linux expérimentés','3','8','Red Hat','active'),(25,'RH259','Red Hat Enterprise Linux pour SAP Solutions','3','7.4','Red Hat','active'),(26,'AWS-CPE','AWS Cloud Practitioner Essentials','1',NULL,'AWS','active'),(27,'AWS-TE','AWS Technical Essentials','1',NULL,'AWS','active'),(28,'AWS-AA','Architecting on AWS','3',NULL,'AWS','active'),(29,'AWS-AdAA','Advanced Architecting on AWS','3',NULL,'AWS','active'),(30,'AWS-DA','Developing on AWS','3',NULL,'AWS','active'),(31,'AWS-ADA','Advanced Developing on AWS','3',NULL,'AWS','active'),(32,'AWS-DEA','DevOps Engineering on AWS','3',NULL,'AWS','active'),(33,'AWS-DAF','Data Analytics Fundamentals','1',NULL,'AWS','active'),(34,'AWS-BDA','Big Data on AWS','3',NULL,'AWS','active'),(35,'RH199','RHCSA Rapid Track Couse','4','8','Red Hat','active');
/*!40000 ALTER TABLE `Cours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Examen`
--

DROP TABLE IF EXISTS `Examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Examen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_form` varchar(250) NOT NULL,
  `designation` varchar(250) NOT NULL,
  `duree` time NOT NULL,
  `version` varchar(250) DEFAULT NULL,
  `categorie` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  PRIMARY KEY (`id`),
  KEY `Examen_fk` (`categorie`),
  CONSTRAINT `Examen_fk` FOREIGN KEY (`categorie`) REFERENCES `Categories` (`nom_categorie`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Examen`
--

LOCK TABLES `Examen` WRITE;
/*!40000 ALTER TABLE `Examen` DISABLE KEYS */;
INSERT INTO `Examen` VALUES (36,'EX200','Red Hat Certified System Administrator (RHCSA) exam','02:30:00','8','Red Hat','active'),(37,'EX300','Examen Ingénieur certifié Red Hat (RHCE)','03:30:00','8','Red Hat','active'),(38,'EX248','Examen Red Hat Certified Specialist in Enterprise Application Server Administration','04:00:00','EAP 7','Red Hat','active'),(39,'EX280','Examen du Red Hat Certified Specialist in OpenShift Administration','03:00:00','8','Red Hat','active'),(40,'EX342','Red Hat Certified Specialist in Linux Diagnostics and Troubleshooting exam','04:00:00','8','Red Hat','active');
/*!40000 ALTER TABLE `Examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Formateur_certif`
--

DROP TABLE IF EXISTS `Formateur_certif`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Formateur_certif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email_formateur` varchar(250) NOT NULL,
  `nom_certif` varchar(500) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  `id_ajouter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UC_Certif` (`email_formateur`,`nom_certif`),
  KEY `id_ajouter_fk` (`id_ajouter`),
  CONSTRAINT `Formateur_fk` FOREIGN KEY (`email_formateur`) REFERENCES `Utilisateurs` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_ajouter_fk` FOREIGN KEY (`id_ajouter`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Formateur_certif`
--

LOCK TABLES `Formateur_certif` WRITE;
/*!40000 ALTER TABLE `Formateur_certif` DISABLE KEYS */;
INSERT INTO `Formateur_certif` VALUES (22,'events@linsoft.xyz','OFFRE LINSOFT DEC 2020.pdf','active',NULL),(24,'mbenazzouz@linsoft.xyz','houssem-angular.doc','active',NULL),(33,'hjouidi@linsoft.xyz','houssem-angular.doc','active',22),(36,'nassim@gmail.com','houssem-angular.doc','active',20),(37,'externe@gmail.com','houssem-angular.doc','active',20),(38,'hjouidi@linsoft.xyz','houssem-nodejs.doc','active',22);
/*!40000 ALTER TABLE `Formateur_certif` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Formateur_cv`
--

DROP TABLE IF EXISTS `Formateur_cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Formateur_cv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email_formateur` varchar(250) NOT NULL,
  `nom_cv` varchar(500) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  `id_ajouter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UC_cv` (`email_formateur`,`nom_cv`),
  KEY `id_ajouter_fk_cv` (`id_ajouter`),
  CONSTRAINT `Formateur_fk_cv` FOREIGN KEY (`email_formateur`) REFERENCES `Utilisateurs` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_ajouter_fk_cv` FOREIGN KEY (`id_ajouter`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Formateur_cv`
--

LOCK TABLES `Formateur_cv` WRITE;
/*!40000 ALTER TABLE `Formateur_cv` DISABLE KEYS */;
INSERT INTO `Formateur_cv` VALUES (15,'hjouidi@linsoft.xyz','houssemcv-1.doc','active',22),(16,'hjouidi@linsoft.xyz','houssemcv-2.doc','active',20),(17,'nassim@gmail.com','houssemcv-2.doc','active',20),(18,'nassim@gmail.com','houssemcv-1.doc','active',20),(20,'hjouidi@linsoft.xyz','houssemcv-3.doc','active',22);
/*!40000 ALTER TABLE `Formateur_cv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Fournisseurs`
--

DROP TABLE IF EXISTS `Fournisseurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Fournisseurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_fournisseur` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_fournisseur` (`nom_fournisseur`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fournisseurs`
--

LOCK TABLES `Fournisseurs` WRITE;
/*!40000 ALTER TABLE `Fournisseurs` DISABLE KEYS */;
INSERT INTO `Fournisseurs` VALUES (5,'Red Hat','active'),(6,'AWS','active'),(7,'linSoft','active'),(8,'TESTF','inactive');
/*!40000 ALTER TABLE `Fournisseurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Planning_Examinateur`
--

DROP TABLE IF EXISTS `Planning_Examinateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Planning_Examinateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_examinateur` int(11) DEFAULT NULL,
  `statut_f` varchar(250) NOT NULL,
  `id_session` int(11) NOT NULL,
  `nbr_participant` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_session` (`id_session`),
  KEY `planning_fk_id_examinateur` (`id_examinateur`),
  CONSTRAINT `planning_ex_fk_session_id` FOREIGN KEY (`id_session`) REFERENCES `Session_Examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `planning_fk_id_examinateur` FOREIGN KEY (`id_examinateur`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Planning_Examinateur`
--

LOCK TABLES `Planning_Examinateur` WRITE;
/*!40000 ALTER TABLE `Planning_Examinateur` DISABLE KEYS */;
INSERT INTO `Planning_Examinateur` VALUES (28,22,'En attente de confirmation',26,'5','active'),(29,23,'En attente de confirmation',32,'3','active'),(30,23,'En attente de confirmation',30,'8','active'),(31,22,'En attente de confirmation',28,'4','active'),(32,22,'En attente de confirmation',27,'4','active'),(34,22,'En attente de confirmation',33,'5','active'),(35,22,'Confirmée',35,'6','active'),(36,23,'Confirmée',36,'5','active'),(37,23,'Confirmée',34,'3','active'),(38,23,'Confirmée',37,'3','active'),(39,23,'En attente de confirmation',38,'6','active'),(40,22,'En attente de confirmation',39,'5','active'),(41,22,'Confirmée',40,'10','active'),(42,22,'Confirmée',44,'5','active'),(43,23,'Confirmée',46,'5','active'),(44,22,'Confirmée',45,'5','active'),(45,23,'Confirmée',47,'5','active'),(46,22,'Confirmée',48,'6','active'),(47,22,'Confirmée',49,'10','active'),(48,23,'Confirmée',50,'10','active'),(49,23,'En attente de confirmation',51,'3','active');
/*!40000 ALTER TABLE `Planning_Examinateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Planning_Formateur`
--

DROP TABLE IF EXISTS `Planning_Formateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Planning_Formateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_formateur` int(11) DEFAULT NULL,
  `statut_f` varchar(250) NOT NULL,
  `id_session` int(11) NOT NULL,
  `address_fournisseur` varchar(500) DEFAULT NULL,
  `id_fournisseur` int(11) DEFAULT NULL,
  `nbr_participant` varchar(250) NOT NULL,
  `numero_for` varchar(250) NOT NULL,
  `contact_for` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  `mail_contact` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_session` (`id_session`),
  KEY `planning_fk_id_formateur` (`id_formateur`),
  KEY `planning_fk_fournisseur_id` (`id_fournisseur`),
  CONSTRAINT `planning_fk_fournisseur_id` FOREIGN KEY (`id_fournisseur`) REFERENCES `Fournisseurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `planning_fk_id_formateur` FOREIGN KEY (`id_formateur`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `planning_fk_session_id` FOREIGN KEY (`id_session`) REFERENCES `Session` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Planning_Formateur`
--

LOCK TABLES `Planning_Formateur` WRITE;
/*!40000 ALTER TABLE `Planning_Formateur` DISABLE KEYS */;
INSERT INTO `Planning_Formateur` VALUES (23,24,'Confirmée',17,'ccc',5,'10','12','cc','active','ddd'),(24,22,'En attente de confirmation',22,NULL,7,'10','12','ff','active','ff'),(25,23,'annulée',23,'lac1',7,'5','71980819','lila','active','h@gmail.com'),(26,22,'annulée',24,'zarzouna',5,'8','23654790','lilaDS','active','m@gmail.com'),(27,22,'En attente de confirmation',19,'qsds',5,'5','23654889','dffgdf','active','dsfsf'),(28,23,'En attente de confirmation',26,NULL,7,'7','23654789','hejer','active','hejer@gmail.com'),(29,23,'En attente de confirmation',27,'QDFSSDQ',5,'5','23654789','SQG','active','SFDGF@SRG'),(30,22,'En attente de confirmation',28,'khg',5,'3','2','gg','active','gf@gmail.com'),(31,28,'Confirmée',29,'ghdf',5,'5','23654123','xdfb','active','efsdg@gmail.com'),(32,22,'Confirmée',30,'fdg',5,'3','df','fd','active','fd@gmail.com'),(33,23,'En attente de confirmation',31,NULL,5,'5','23654789','fd','active','fxh@gmail.com'),(34,23,'En attente de confirmation',34,'dgf',5,'5','23654789','fgf','active','fsfg@gmail.com'),(35,22,'En attente de confirmation',37,NULL,5,'6','23645123','fgh','active','cxg@gmail.com');
/*!40000 ALTER TABLE `Planning_Formateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cour` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `type` varchar(250) NOT NULL,
  `langue` varchar(250) NOT NULL,
  `lieu` varchar(250) DEFAULT NULL,
  `etat_session` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  `affecter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `session_fk_id_cour` (`id_cour`),
  KEY `session_id_formateur_fk` (`affecter`),
  CONSTRAINT `session_fk_id_cour` FOREIGN KEY (`id_cour`) REFERENCES `Cours` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `session_id_formateur_fk` FOREIGN KEY (`affecter`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
INSERT INTO `Session` VALUES (17,15,'2020-12-14','présentielle','français','Tunisie','confirmée','active',24),(18,16,'2020-12-21','distancielle','français',NULL,'en attente de confirmation','active',NULL),(19,26,'2020-12-28','présentielle','français','Maroc','en attente de confirmation','active',22),(20,29,'2020-12-14','présentielle','français','Tunisie','en attente de confirmation','active',NULL),(22,15,'2020-12-14','distancielle','français',NULL,'en attente de confirmation','active',22),(23,16,'2020-12-21','présentielle','français','Tunisie','annulée','active',23),(24,15,'2020-12-21','présentielle','français','Argentine','annulée','active',22),(25,15,'2020-12-22','présentielle','français','Angola','en attente de confirmation','active',NULL),(26,19,'2021-01-04','distancielle','français',NULL,'en attente de confirmation','active',23),(27,15,'2020-12-28','présentielle','français','Andorre','en attente de confirmation','active',23),(28,21,'2021-01-11','présentielle','français','Argentine','en attente de confirmation','active',22),(29,14,'2021-01-13','présentielle','français','Algérie','clôturée','active',28),(30,16,'2021-01-18','présentielle','français','Angola','clôturée','active',22),(31,26,'2021-01-13','distancielle','français',NULL,'en attente de confirmation','active',23),(32,28,'2021-01-13','distancielle','français',NULL,'en attente de confirmation','active',NULL),(33,23,'2021-01-13','présentielle','français','Algérie','en attente de confirmation','active',NULL),(34,14,'2021-03-08','présentielle','français','Algérie','en attente de confirmation','active',23),(35,18,'2021-03-16','présentielle','français','Allemagne','en attente de confirmation','active',NULL),(36,20,'2021-03-22','présentielle','français','Angola','en attente de confirmation','active',NULL),(37,20,'2021-03-22','distancielle','français',NULL,'en attente de confirmation','active',22);
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session_Examen`
--

DROP TABLE IF EXISTS `Session_Examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session_Examen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_examen` int(11) NOT NULL,
  `date_examen` datetime NOT NULL,
  `langue` varchar(250) NOT NULL,
  `lieu` varchar(250) DEFAULT NULL,
  `etat_session` varchar(250) NOT NULL,
  `statut` varchar(250) DEFAULT 'active',
  `affecter` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `session_fk_id_examen` (`id_examen`),
  KEY `session_id_examinateur_fk` (`affecter`),
  CONSTRAINT `session_fk_id_examen` FOREIGN KEY (`id_examen`) REFERENCES `Examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `session_id_examinateur_fk` FOREIGN KEY (`affecter`) REFERENCES `Utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session_Examen`
--

LOCK TABLES `Session_Examen` WRITE;
/*!40000 ALTER TABLE `Session_Examen` DISABLE KEYS */;
INSERT INTO `Session_Examen` VALUES (26,37,'2021-01-11 14:00:00','français','Allemagne','en attente de confirmation','active',22),(27,36,'2021-01-10 14:00:00','français','Tunisie','en attente de confirmation','active',22),(28,38,'2021-01-08 10:00:00','français','Tunisie','clôturée','active',22),(29,39,'2021-01-08 11:00:00','français','Tunisie','en attente de confirmation','active',NULL),(30,39,'2021-01-10 15:00:00','anglais','Angola','en attente de confirmation','active',23),(31,38,'2021-01-11 10:00:00','français','Algérie','en attente de confirmation','active',NULL),(32,38,'2021-01-11 11:00:00','français','Anguilla','en attente de confirmation','active',23),(33,37,'2021-01-12 14:00:00','français','Allemagne','en attente de confirmation','active',22),(34,40,'2021-01-13 14:00:00','français','Tunisie','clôturée','active',23),(35,39,'2021-01-14 10:00:00','français','Tunisie','confirmée','active',22),(36,37,'2021-01-14 10:00:00','français','Maroc','confirmée','active',23),(37,40,'2021-01-14 16:00:00','anglais','Algérie','confirmée','active',23),(38,36,'2021-01-13 09:00:00','français','Algérie','en attente de confirmation','active',23),(39,37,'2021-01-13 14:00:00','français','Tunisie','clôturée','active',22),(40,36,'2021-01-17 10:00:00','français','Tunisie','confirmée','active',22),(41,36,'2021-01-13 10:00:00','français','Tunisie','en attente de confirmation','active',NULL),(42,36,'2021-01-13 15:00:00','français','Angola','confirmée','active',NULL),(43,36,'2021-01-13 14:50:00','français','Anguilla','confirmée','active',NULL),(44,36,'2021-01-24 14:00:00','français','Tunisie','confirmée','active',22),(45,37,'2021-01-20 10:30:35','français','Algérie','confirmée','active',22),(46,38,'2021-01-20 14:00:00','français','Argentine','confirmée','active',23),(47,37,'2021-01-20 09:30:00','français','Algérie','clôturée','active',23),(48,39,'2021-01-20 15:00:13','français','Allemagne','confirmée','active',22),(49,36,'2021-01-22 16:00:00','français','Angola','confirmée','active',22),(50,39,'2021-01-19 16:05:40','français','Allemagne','clôturée','active',23),(51,36,'2021-03-09 10:00:23','français','Algérie','en attente de confirmation','active',23);
/*!40000 ALTER TABLE `Session_Examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Utilisateurs`
--

DROP TABLE IF EXISTS `Utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) NOT NULL,
  `prenom` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `tele` varchar(250) NOT NULL,
  `fonction` varchar(250) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` varchar(250) DEFAULT 'formateur',
  `statut` varchar(250) DEFAULT 'active',
  `examinateur` varchar(250) DEFAULT 'non',
  `roleAdmin` varchar(250) DEFAULT 'Pas de rôle',
  `statutUtilisateur` varchar(250) DEFAULT 'interne',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `tele` (`tele`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Utilisateurs`
--

LOCK TABLES `Utilisateurs` WRITE;
/*!40000 ALTER TABLE `Utilisateurs` DISABLE KEYS */;
INSERT INTO `Utilisateurs` VALUES (20,'houssem','jouidi','houcem.jouidi@gmail.com','23654789','utilisateur','U2FsdGVkX18wyrFmWXrtl4mWUo4bhzaVd8BLF09Gp/8=','Administrateur','active','non','Administrateur global','interne'),(21,'hejer','argoubi','hejer.argoubi@linsoft.com.tn','28963321','manager','U2FsdGVkX1+WXG5WGF6QihSw7pnfhf/9CJFJohGGoLU=','Instructeur','active','non','Pas de rôle','interne'),(22,'Houcem','Jouidi','hjouidi@linsoft.xyz','2639726','Développeu','U2FsdGVkX1+QcJdrNY9hl10W60xxkFSh+R7MNtf+D9o=','Instructeur','active','oui','Administrateur des données d\'information','interne'),(23,'Hasna','Rmili','rmilihasna9@gmail.com','26354789','Instructeur','U2FsdGVkX1/LHBjGB9/G2Xs9prhBqZVrjm7dPcEIcjI=','Instructeur','active','oui','Pas de rôle','interne'),(24,'Hejer','Argoubi','hargoubi@linsoft.xyz','123456','m','U2FsdGVkX18EHBNYIS3Kq/WVQ2X6OAZdo42HLUvAT3g=','Instructeur','active','non','Pas de rôle','interne'),(25,'Hejeur','ARGOUBI','events@linsoft.xyz','56195825','Formateur','U2FsdGVkX18MES6KDarmXLG7wSiVfbpdqkg08JF3AXU=','Instructeur','active','non','Pas de rôle','interne'),(26,'Mourad','Ben azouz','mbenazzouz@linsoft.xyz','26541236','Instructeur','U2FsdGVkX18k/7PZlZSyXD40jojLu3suJD7pZ0bFVOA=','Instructeur','active','non','Pas de rôle','interne'),(27,'Test','Test','test@gmail.com','26369852','Instructeur','U2FsdGVkX19PmnW33G0GD0NnhTCfXE47jaaBG1I6vQ8=','formateur','inactive','oui','Pas de rôle','interne'),(28,'test2','test2','test2@gmail.com','25412369','Instructeur','U2FsdGVkX1/x/qrgXQjjfivR/ud3ucAHbPX9YTuqDrM=','Instructeur','active','non','Pas de rôle','interne'),(30,'Nassim','Ayari','nassim@gmail.com','36541236','Instructeur','U2FsdGVkX1/cuPhXKmEI924UiOdGoeKCv/OQtj3YlJA=','Instructeur','active','non','Administrateur d\'utilisateurs','interne'),(31,'bassem','ayari','bassem@gmail.com','32145789','Instructeur','U2FsdGVkX18MOG1m45HiuXgYSHutojk2Qcm/p6xdNJQ=','Instructeur','active','non','Administrateur global','interne'),(33,'houssem','externe','externe@gmail.com','23654784','fgrg','U2FsdGVkX18hvNl+4HyjfXhACp6VZncgAlRjxEgTDMQ=','Instructeur','active','non','Pas de rôle','externe'),(34,'Ahmed','gabsi','ahmed_g@gmail.com','21456987','fsdgfg','U2FsdGVkX1/g3tuCGxwdhWj2kkkjXwhOAvu6/9VJt6A=','Instructeur','active','non','Pas de rôle','externe'),(36,'maryem','dzfze','maryem@gmail.com','23654787','freelance','U2FsdGVkX1+Bbg98SDDPsQOzR03d1cUUq0Z6daK8qpg=','Freelance','active','non','Pas de rôle','externe'),(41,'gfktyfjty','vjhfvyu','xyr@hg.com','26365789','gkutf','U2FsdGVkX18FFgdVNqrr+m4nel5VwFfdEbG1YTJf40E=','Instructeur','inactive','non','Pas de rôle','interne');
/*!40000 ALTER TABLE `Utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-12 16:52:26
