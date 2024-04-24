(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/services/formateur.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/services/formateur.service.ts ***!
  \*****************************************************/
/*! exports provided: FormateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormateurService", function() { return FormateurService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FormateurService {
    constructor(http) {
        this.http = http;
    }
    getAllFormateur() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/lists`);
    }
    getAllUser() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/allusers/lists`);
    }
    getAllExaminateur() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/examinateur/lists`);
    }
    getAllExaminateurForPlanning() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/examinateur/planning/lists`);
    }
    getAllFormateurInactive() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/lists/inactive`);
    }
    getAllExaminateurInactive() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/examinateur/lists/inactive`);
    }
    saveFormateur(formateur) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/register`, formateur);
    }
    deleteFormateur(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/delete/${id}`, null);
    }
    formateurReturnActive(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/returnactive/${id}`, null);
    }
    ExaminateurReturnActive(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/examinateur/returnactive/${id}`, null);
    }
    deleteExaminateur(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/examinateur/deleteexaminateur/${id}`, null);
    }
    getFormateurById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/list/${id}`);
    }
    getAllFormateurCertifById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/lists/certif/${id}`);
    }
    getAllFormateurCvById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/lists/cv/${id}`);
    }
    downloadCertifById(name, email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/certif/download/${name}/${email}`, { responseType: 'blob' });
    }
    downloadCvById(name, email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/cv/download/${name}/${email}`, { responseType: 'blob' });
    }
    deleteCertifById(name, email) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/certif/delete/${name}/${email}`);
    }
    deleteCvById(name, email) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/cv/delete/${name}/${email}`);
    }
    editFormateur(id, formateur) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/edit/${id}`, formateur);
    }
    changePassword(id, email) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/editPassword/${id}/${email}`, null);
    }
    saveCertifFormateur(email, idajouter, file) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/add/certif/${email}/${idajouter}`, file);
    }
    saveCvFormateur(email, idajouter, file) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlInsUpload}/formateur/upload/add/cv/${email}/${idajouter}`, file);
    }
    // user with role
    getAllUserWithRole() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/role/lists`);
    }
    postUserWithRole(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrlIns}/utilisateur/role/register`, user);
    }
}
FormateurService.ɵfac = function FormateurService_Factory(t) { return new (t || FormateurService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FormateurService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormateurService, factory: FormateurService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormateurService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/fournisseur.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/fournisseur.service.ts ***!
  \*******************************************************/
/*! exports provided: FournisseurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FournisseurService", function() { return FournisseurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FournisseurService {
    constructor(http) {
        this.http = http;
    }
    getAllFournisseurWithoutAdress() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/lists`);
    }
    getAllFournisseurInactive() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/lists/inactive`);
    }
    deleteFournisseur(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/delete/${id}`, null);
    }
    getFournisseurById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/lists/four/${id}`);
    }
    saveFournisseur(fournisseur) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/add`, fournisseur);
    }
    updateFournisseur(id, fournisseur) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/update/${id}`, fournisseur);
    }
    ReturnFournisseurActive(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/returnactive/${id}`, null);
    }
    //pour effacer
    getAdressFournisseurById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlFourniss}/fournisseur/lists/four/${id}`);
    }
}
FournisseurService.ɵfac = function FournisseurService_Factory(t) { return new (t || FournisseurService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FournisseurService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FournisseurService, factory: FournisseurService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FournisseurService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/utilisateur.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/utilisateur.service.ts ***!
  \*******************************************************/
/*! exports provided: UtilisateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurService", function() { return UtilisateurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UtilisateurService {
    constructor(http) {
        this.http = http;
    }
    getAllFormateurInterne() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/list/interne`);
    }
    getAllFormateurExterne() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/list/externe`);
    }
    saveUtilisateur(utilisateur) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/register`, utilisateur);
    }
    getUtilisateurById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/lists/${id}`);
    }
    editUtilisateur(id, utilisateur) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/edit/${id}`, utilisateur);
    }
    // start service upload
    getAllFormateurCertifById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/lists/certif/${id}`);
    }
    saveCertifUtilisateur(email, idajouter, file) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/add/certif/${email}/${idajouter}`, file);
    }
    saveCvUtilisateur(email, idajouter, file) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/add/cv/${email}/${idajouter}`, file);
    }
    getAllFormateurCvById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/lists/cv/${id}`);
    }
    downloadCertifById(name, email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/certif/download/${name}/${email}`, { responseType: 'blob' });
    }
    downloadCvById(name, email) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/cv/download/${name}/${email}`, { responseType: 'blob' });
    }
    deleteCertifById(name, email) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/certif/delete/${name}/${email}`);
    }
    deleteCvById(name, email) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlInsUpload}/formateur/upload/cv/delete/${name}/${email}`);
    }
    // end service upload
    getAllUser() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/allusers/lists`);
    }
    changePassword(id, email) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/editPassword/${id}/${email}`, null);
    }
    deleteUtilisateur(id, verif) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/delete/${id}/${verif}`, null);
    }
    deleteUtilisateurInstructeur(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/deleteUtilisateurInstructeur/${id}`);
    }
    deleteUtilisateurExaminateur(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlUtilisateurs}/utilisateurs/deleteUtilisateurExaminateur/${id}`);
    }
}
UtilisateurService.ɵfac = function UtilisateurService_Factory(t) { return new (t || UtilisateurService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UtilisateurService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilisateurService, factory: UtilisateurService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilisateurService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/countries.json":
/*!********************************!*\
  !*** ./src/app/countries.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\"},{\"name\":\"Afrique du Sud\"},{\"name\":\"Albanie\"},{\"name\":\"Algérie\"},{\"name\":\"Allemagne\"},{\"name\":\"Andorre\"},{\"name\":\"Angola\"},{\"name\":\"Anguilla\"},{\"name\":\"Antarctique\"},{\"name\":\"Antigua-et-Barbuda\"},{\"name\":\"Antilles néerlandaises\"},{\"name\":\"Arabie saoudite\"},{\"name\":\"Argentine\"},{\"name\":\"Arménie\"},{\"name\":\"Aruba\"},{\"name\":\"Australie\"},{\"name\":\"Autriche\"},{\"name\":\"Azerbaïdjan\"},{\"name\":\"Bahamas\"},{\"name\":\"Bahreïn\"},{\"name\":\"Bangladesh\"},{\"name\":\"Barbade\"},{\"name\":\"Bélarus\"},{\"name\":\"Belgique\"},{\"name\":\"Belize\"},{\"name\":\"Bénin\"},{\"name\":\"Bermudes\"},{\"name\":\"Bhoutan\"},{\"name\":\"Bolivie\"},{\"name\":\"Bosnie-Herzégovine\"},{\"name\":\"Botswana\"},{\"name\":\"Brésil\"},{\"name\":\"Brunéi Darussalam\"},{\"name\":\"Bulgarie\"},{\"name\":\"Burkina Faso\"},{\"name\":\"Burundi\"},{\"name\":\"Cambodge\"},{\"name\":\"Cameroun\"},{\"name\":\"Canada\"},{\"name\":\"Cap-Vert\"},{\"name\":\"Ceuta et Melilla\"},{\"name\":\"Chili\"},{\"name\":\"Chine\"},{\"name\":\"Chypre\"},{\"name\":\"Colombie\"},{\"name\":\"Comores\"},{\"name\":\"Congo-Brazzaville\"},{\"name\":\"Corée du Nord\"},{\"name\":\"Corée du Sud\"},{\"name\":\"Costa Rica\"},{\"name\":\"Côte d’Ivoire\"},{\"name\":\"Croatie\"},{\"name\":\"Cuba\"},{\"name\":\"Danemark\"},{\"name\":\"Diego Garcia\"},{\"name\":\"Djibouti\"},{\"name\":\"Dominique\"},{\"name\":\"Égypte\"},{\"name\":\"El Salvador\"},{\"name\":\"Émirats arabes unis\"},{\"name\":\"Équateur\"},{\"name\":\"Érythrée\"},{\"name\":\"Espagne\"},{\"name\":\"Estonie\"},{\"name\":\"État de la Cité du Vatican\"},{\"name\":\"États fédérés de Micronésie\"},{\"name\":\"États-Unis\"},{\"name\":\"Éthiopie\"},{\"name\":\"Fidji\"},{\"name\":\"Finlande\"},{\"name\":\"France\"},{\"name\":\"Gabon\"},{\"name\":\"Gambie\"},{\"name\":\"Géorgie\"},{\"name\":\"Géorgie du Sud et les îles Sandwich du Sud\"},{\"name\":\"Ghana\"},{\"name\":\"Gibraltar\"},{\"name\":\"Grèce\"},{\"name\":\"Grenade\"},{\"name\":\"Groenland\"},{\"name\":\"Guadeloupe\"},{\"name\":\"Guam\"},{\"name\":\"Guatemala\"},{\"name\":\"Guernesey\"},{\"name\":\"Guinée\"},{\"name\":\"Guinée équatoriale\"},{\"name\":\"Guinée-Bissau\"},{\"name\":\"Guyana\"},{\"name\":\"Guyane française\"},{\"name\":\"Haïti\"},{\"name\":\"Honduras\"},{\"name\":\"Hongrie\"},{\"name\":\"Île Bouvet\"},{\"name\":\"Île Christmas\"},{\"name\":\"Île Clipperton\"},{\"name\":\"Île de l'Ascension\"},{\"name\":\"Île de Man\"},{\"name\":\"Île Norfolk\"},{\"name\":\"Îles Åland\"},{\"name\":\"Îles Caïmans\"},{\"name\":\"Îles Canaries\"},{\"name\":\"Îles Cocos - Keeling\"},{\"name\":\"Îles Cook\"},{\"name\":\"Îles Féroé\"},{\"name\":\"Îles Heard et MacDonald\"},{\"name\":\"Îles Malouines\"},{\"name\":\"Îles Mariannes du Nord\"},{\"name\":\"Îles Marshall\"},{\"name\":\"Îles Mineures Éloignées des États-Unis\"},{\"name\":\"Îles Salomon\"},{\"name\":\"Îles Turks et Caïques\"},{\"name\":\"Îles Vierges britanniques\"},{\"name\":\"Îles Vierges des États-Unis\"},{\"name\":\"Inde\"},{\"name\":\"Indonésie\"},{\"name\":\"Irak\"},{\"name\":\"Iran\"},{\"name\":\"Irlande\"},{\"name\":\"Islande\"},{\"name\":\"Israël\"},{\"name\":\"Italie\"},{\"name\":\"Jamaïque\"},{\"name\":\"Japon\"},{\"name\":\"Jersey\"},{\"name\":\"Jordanie\"},{\"name\":\"Kazakhstan\"},{\"name\":\"Kenya\"},{\"name\":\"Kirghizistan\"},{\"name\":\"Kiribati\"},{\"name\":\"Koweït\"},{\"name\":\"Laos\"},{\"name\":\"Lesotho\"},{\"name\":\"Lettonie\"},{\"name\":\"Liban\"},{\"name\":\"Libéria\"},{\"name\":\"Libye\"},{\"name\":\"Liechtenstein\"},{\"name\":\"Lituanie\"},{\"name\":\"Luxembourg\"},{\"name\":\"Macédoine\"},{\"name\":\"Madagascar\"},{\"name\":\"Malaisie\"},{\"name\":\"Malawi\"},{\"name\":\"Maldives\"},{\"name\":\"Mali\"},{\"name\":\"Malte\"},{\"name\":\"Maroc\"},{\"name\":\"Martinique\"},{\"name\":\"Maurice\"},{\"name\":\"Mauritanie\"},{\"name\":\"Mayotte\"},{\"name\":\"Mexique\"},{\"name\":\"Moldavie\"},{\"name\":\"Monaco\"},{\"name\":\"Mongolie\"},{\"name\":\"Monténégro\"},{\"name\":\"Montserrat\"},{\"name\":\"Mozambique\"},{\"name\":\"Myanmar\"},{\"name\":\"Namibie\"},{\"name\":\"Nauru\"},{\"name\":\"Népal\"},{\"name\":\"Nicaragua\"},{\"name\":\"Niger\"},{\"name\":\"Nigéria\"},{\"name\":\"Niue\"},{\"name\":\"Norvège\"},{\"name\":\"Nouvelle-Calédonie\"},{\"name\":\"Nouvelle-Zélande\"},{\"name\":\"Oman\"},{\"name\":\"Ouganda\"},{\"name\":\"Ouzbékistan\"},{\"name\":\"Pakistan\"},{\"name\":\"Palaos\"},{\"name\":\"Panama\"},{\"name\":\"Papouasie-Nouvelle-Guinée\"},{\"name\":\"Paraguay\"},{\"name\":\"Pays-Bas\"},{\"name\":\"Pérou\"},{\"name\":\"Philippines\"},{\"name\":\"Pitcairn\"},{\"name\":\"Pologne\"},{\"name\":\"Polynésie française\"},{\"name\":\"Porto Rico\"},{\"name\":\"Portugal\"},{\"name\":\"Qatar\"},{\"name\":\"R.A.S. chinoise de Hong Kong\"},{\"name\":\"R.A.S. chinoise de Macao\"},{\"name\":\"régions éloignées de l’Océanie\"},{\"name\":\"République centrafricaine\"},{\"name\":\"République démocratique du Congo\"},{\"name\":\"République dominicaine\"},{\"name\":\"République tchèque\"},{\"name\":\"Réunion\"},{\"name\":\"Roumanie\"},{\"name\":\"Royaume-Uni\"},{\"name\":\"Russie\"},{\"name\":\"Rwanda\"},{\"name\":\"Sahara occidental\"},{\"name\":\"Saint-Barthélémy\"},{\"name\":\"Saint-Kitts-et-Nevis\"},{\"name\":\"Saint-Marin\"},{\"name\":\"Saint-Martin\"},{\"name\":\"Saint-Pierre-et-Miquelon\"},{\"name\":\"Saint-Vincent-et-les Grenadines\"},{\"name\":\"Sainte-Hélène\"},{\"name\":\"Sainte-Lucie\"},{\"name\":\"Samoa\"},{\"name\":\"Samoa américaines\"},{\"name\":\"Sao Tomé-et-Principe\"},{\"name\":\"Sénégal\"},{\"name\":\"Serbie\"},{\"name\":\"Serbie-et-Monténégro\"},{\"name\":\"Seychelles\"},{\"name\":\"Sierra Leone\"},{\"name\":\"Singapour\"},{\"name\":\"Slovaquie\"},{\"name\":\"Slovénie\"},{\"name\":\"Somalie\"},{\"name\":\"Soudan\"},{\"name\":\"Sri Lanka\"},{\"name\":\"Suède\"},{\"name\":\"Suisse\"},{\"name\":\"Suriname\"},{\"name\":\"Svalbard et Île Jan Mayen\"},{\"name\":\"Swaziland\"},{\"name\":\"Syrie\"},{\"name\":\"Tadjikistan\"},{\"name\":\"Taïwan\"},{\"name\":\"Tanzanie\"},{\"name\":\"Tchad\"},{\"name\":\"Terres australes françaises\"},{\"name\":\"Territoire britannique de l'océan Indien\"},{\"name\":\"Territoire palestinien\"},{\"name\":\"Thaïlande\"},{\"name\":\"Timor oriental\"},{\"name\":\"Togo\"},{\"name\":\"Tokelau\"},{\"name\":\"Tonga\"},{\"name\":\"Trinité-et-Tobago\"},{\"name\":\"Tristan da Cunha\"},{\"name\":\"Tunisie\"},{\"name\":\"Turkménistan\"},{\"name\":\"Turquie\"},{\"name\":\"Tuvalu\"},{\"name\":\"Ukraine\"},{\"name\":\"Union européenne\"},{\"name\":\"Uruguay\"},{\"name\":\"Vanuatu\"},{\"name\":\"Venezuela\"},{\"name\":\"Viêt Nam\"},{\"name\":\"Wallis-et-Futuna\"},{\"name\":\"Yémen\"},{\"name\":\"Zambie\"},{\"name\":\"Zimbabwe\"}]");

/***/ }),

/***/ "./src/app/guards/not-admin-guard.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/not-admin-guard.guard.ts ***!
  \*************************************************/
/*! exports provided: NotAdminGuardAllocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAdminGuardAllocation", function() { return NotAdminGuardAllocation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NotAdminGuardAllocation {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.notAdminAllocations()) {
            return true;
        }
        this.authService.Logout();
        this.router.navigate(['/auth/login']);
    }
}
NotAdminGuardAllocation.ɵfac = function NotAdminGuardAllocation_Factory(t) { return new (t || NotAdminGuardAllocation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotAdminGuardAllocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotAdminGuardAllocation, factory: NotAdminGuardAllocation.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAdminGuardAllocation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/not-admin-session.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/guards/not-admin-session.guard.ts ***!
  \***************************************************/
/*! exports provided: NotAdminSessionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAdminSessionGuard", function() { return NotAdminSessionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NotAdminSessionGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.notAdminSessions()) {
            return true;
        }
        this.authService.Logout();
        this.router.navigate(['/auth/login']);
    }
}
NotAdminSessionGuard.ɵfac = function NotAdminSessionGuard_Factory(t) { return new (t || NotAdminSessionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotAdminSessionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotAdminSessionGuard, factory: NotAdminSessionGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAdminSessionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map