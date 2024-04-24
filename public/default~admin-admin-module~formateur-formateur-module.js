(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~formateur-formateur-module"],{

/***/ "./src/app/admin/services/planning-examens.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/services/planning-examens.service.ts ***!
  \************************************************************/
/*! exports provided: PlanningExamensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningExamensService", function() { return PlanningExamensService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PlanningExamensService {
    constructor(http) {
        this.http = http;
    }
    getAllPlanning() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/lists`);
    }
    getAllPlanningActivePast() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/active/past`);
    }
    getAllPlanningActiveForCalender() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/calender`);
    }
    getAllPlanningInactive() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/lists/inactive`);
    }
    getAllDistinctRefFormation(cat) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/ref/formation/${cat}`);
    }
    getAllDistinctVersionFormation(ref) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/version/formation/${ref}`);
    }
    getAllDistinctTypeFormation(ref, version) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/type/formation/${ref}/${version}`);
    }
    getAllDistinctTypeFormationWithoutVersion(ref) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/type/forma/withoutversion/${ref}`);
    }
    // start
    getAllDistinctPaysFormationWithoutVersion(ref) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/type/forma/pays/withoutversion/${ref}`);
    }
    getAllDateFormationDistintDistienciellleWithoutVersion(ref, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/date/forma/dist/withoutversion/${ref}/${type}`);
    }
    getAllDateFormationPresentielleWithoutVersion(ref, pays) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/date/forma/present/withoutversion/${ref}/${pays}`);
    }
    // end
    getAllDistinctPaysFormation(ref, version) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/pays/formation/${ref}/${version}`);
    }
    getAllDateFormationDistintDistienciellle(ref, version, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/date/formations/${ref}/${version}/${type}`);
    }
    getAllDateFormationPresentielle(ref, version, pays) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/date/formations/presentielle/${ref}/${version}/${pays}`);
    }
    getAllAffecteSessionFormateur() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/formateur/affected`);
    }
    getAllDateFormation(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/list/date/formation/${id}`);
    }
    envoyerEmailFormateur(email, ref, dated, datef, stautf, nomf, addressf, nombrep, numero, contact) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/sendmail/${email}/${ref}/${dated}/${datef}/${stautf}/${nomf}/${addressf}/${nombrep}/${numero}/${contact}`);
    }
    deletePlanning(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/delete/${id}`);
    }
    deletePlanningAfterAffected(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/deleteplanning/${id}`);
    }
    savePlanning(planning) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/add`, planning);
    }
    getPlanningById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/lists/${id}`);
    }
    getPlanningUpdatedById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/lists/update/${id}`);
    }
    getPlanningUpdatedByIdSession(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/lists/update/idsession/${id}`);
    }
    updatePlanning(id, planning) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/update/${id}`, planning);
    }
    editPlanningForSession(planning) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/edit/planning/session`, planning);
    }
    editPlanningForDeleteProvider(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/editPlanningForDeleteProvider/${id}`, null);
    }
    getAllPlanningForCalendar() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPanningExamen}/planning-examens/getAllPlanningForCalendar`);
    }
}
PlanningExamensService.ɵfac = function PlanningExamensService_Factory(t) { return new (t || PlanningExamensService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlanningExamensService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlanningExamensService, factory: PlanningExamensService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanningExamensService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/planning.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/services/planning.service.ts ***!
  \****************************************************/
/*! exports provided: PlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningService", function() { return PlanningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PlanningService {
    constructor(http) {
        this.http = http;
    }
    getAllPlanning() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/lists`);
    }
    getAllPlanningActivePast() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/active/past`);
    }
    getAllPlanningActiveForCalender() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/calender`);
    }
    getAllPlanningInactive() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/lists/inactive`);
    }
    getAllDistinctRefFormation(cat) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/ref/formation/${cat}`);
    }
    getAllDistinctVersionFormation(ref) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/version/formation/${ref}`);
    }
    getAllDistinctTypeFormation(ref, version) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/type/formation/${ref}/${version}`);
    }
    getAllDistinctTypeFormationWithoutVersion(ref) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/type/forma/withoutversion/${ref}`);
    }
    // start
    getAllDistinctPaysFormationWithoutVersion(ref, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/type/forma/pays/withoutversion/${ref}/${type}`);
    }
    getAllDateFormationDistintDistienciellleWithoutVersion(ref, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/date/forma/dist/withoutversion/${ref}/${type}`);
    }
    getAllDateFormationPresentielleWithoutVersion(ref, type, pays) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/date/forma/present/withoutversion/${ref}/${type}/${pays}`);
    }
    // end
    getAllDistinctPaysFormation(ref, version, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/pays/formation/${ref}/${version}/${type}`);
    }
    getAllDateFormationDistintDistienciellle(ref, version, type) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/date/formations/${ref}/${version}/${type}`);
    }
    getAllDateFormationPresentielle(ref, version, type, pays) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/date/formations/presentielle/${ref}/${version}/${type}/${pays}`);
    }
    getAllAffecteSessionFormateur() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/formateur/affected`);
    }
    getAllDateFormation(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/list/date/formation/${id}`);
    }
    envoyerEmailFormateur(email, ref, dated, datef, stautf, nomf, addressf, nombrep, numero, contact) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/sendmail/${email}/${ref}/${dated}/${datef}/${stautf}/${nomf}/${addressf}/${nombrep}/${numero}/${contact}`);
    }
    deletePlanning(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/delete/${id}`);
    }
    deletePlanningAfterAffected(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/deleteplanning/${id}`);
    }
    savePlanning(planning) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/add`, planning);
    }
    getPlanningById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/lists/${id}`);
    }
    getPlanningUpdatedById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/lists/update/${id}`);
    }
    getPlanningUpdatedByIdSession(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/lists/update/idsession/${id}`);
    }
    updatePlanning(id, planning) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/update/${id}`, planning);
    }
    editPlanningForSession(planning) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/edit/planning/session`, planning);
    }
    editPlanningForDeleteProvider(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/editPlanningForDeleteProvider/${id}`, null);
    }
    getAllPlanningForCalendar() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlPlanning}/planning/getAllPlanningForCalendar`);
    }
}
PlanningService.ɵfac = function PlanningService_Factory(t) { return new (t || PlanningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlanningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlanningService, factory: PlanningService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/session-examen.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/services/session-examen.service.ts ***!
  \**********************************************************/
/*! exports provided: SessionExamenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExamenService", function() { return SessionExamenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SessionExamenService {
    constructor(http) {
        this.http = http;
    }
    getAllSession() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/lists`);
    }
    getAllSessionActivePast() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/list/active/past`);
    }
    getAllSessionNoAfected() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/lists/nonaffecter`);
    }
    getAllSessionInactive() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/lists/inactive`);
    }
    deleteSession(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/delete/${id}`);
    }
    saveSession(session) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/add`, session);
    }
    getSessionById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/lists/${id}`);
    }
    getSessionWithEmailById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/lists/email/${id}`);
    }
    envoyerEmailFormateur(email, ref, dated, heure, version_session, langue, etat, etatsession, namef, namecours, pays, nbrpartic) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/sendemail/${email}/${ref}/${dated}/${heure}/${langue}/${version_session}/${etat}/${etatsession}/${namef}/${namecours}/${pays}/${nbrpartic}`);
    }
    emailFormateurChanger(email, namef, ref, designation, dated) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/formateurchanger/email/${email}/${namef}/${ref}/${designation}/${dated}`);
    }
    updateSession(id, session) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/update/${id}`, session);
    }
    updateSessionForCalendar(session) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/edit/calendar`, session);
    }
    updateSessionAffected(id, name) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/affected/${id}/${name}`, null);
    }
    updateStatutSession(id, etatsession) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/statutsession/${id}/${etatsession}`, null);
    }
    updateSessionEmptyAffected(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/emptyaffected/${id}`, null);
    }
    deleteFormateurSession(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/deleteformateur/${id}`, null);
    }
    deleteSessionByCategory(cat) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/deletesession/category/${cat}`);
    }
    deleteSessionIdCours(idcours) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/deletesession/idcours/${idcours}`);
    }
    getAllSessionAffectedByIdCours(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSessionExamen}/session-examen/allSessionByIdCours/${id}`);
    }
}
SessionExamenService.ɵfac = function SessionExamenService_Factory(t) { return new (t || SessionExamenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SessionExamenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionExamenService, factory: SessionExamenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionExamenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/session.service.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/services/session.service.ts ***!
  \***************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SessionService {
    constructor(http) {
        this.http = http;
    }
    getAllSession() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/lists`);
    }
    getAllSessionActivePast() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/list/active/past`);
    }
    getAllSessionNoAfected() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/lists/nonaffecter`);
    }
    getAllSessionInactive() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/lists/inactive`);
    }
    deleteSession(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/delete/${id}`);
    }
    saveSession(session) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/add`, session);
    }
    getSessionById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/lists/${id}`);
    }
    getSessionWithEmailById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/lists/email/${id}`);
    }
    envoyerEmailFormateur(email, ref, dated, datef, type, langue, lieu, address, etat, etatsession, namef, namecours, pays, contact, numeroc, mailc, nbrpartic) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/sendemail/${email}/${ref}/${dated}/${datef}/${type}/${langue}/${lieu}/${address}/${etat}/${etatsession}/${namef}/${namecours}/${pays}/${contact}/${numeroc}/${mailc}/${nbrpartic}`);
    }
    envoyerEmailFormateurTypeDistancielle(email, ref, dated, datef, type, langue, address, etat, etatsession, namef, namecours, contact, numeroc, mailc, nbrpartic) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/sendeemail/distancielle/${email}/${ref}/${dated}/${datef}/${type}/${langue}/${address}/${etat}/${etatsession}/${namef}/${namecours}/${contact}/${numeroc}/${mailc}/${nbrpartic}`);
    }
    emailFormateurChanger(email, namef, ref, designation, dated, datef) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/formateurchanger/email/${email}/${namef}/${ref}/${designation}/${dated}/${datef}`);
    }
    updateSession(id, session) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/update/${id}`, session);
    }
    updateSessionForCalendar(session) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/edit/calendar`, session);
    }
    updateSessionAffected(id, name) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/affected/${id}/${name}`, null);
    }
    updateStatutSession(id, etatsession) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/statutsession/${id}/${etatsession}`, null);
    }
    updateSessionEmptyAffected(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/emptyaffected/${id}`, null);
    }
    deleteFormateurSession(id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/deleteformateur/${id}`, null);
    }
    deleteSessionByCategory(cat) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/deletesession/category/${cat}`);
    }
    deleteSessionIdCours(idcours) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/deletesession/idcours/${idcours}`);
    }
    getAllSessionAffectedByIdCours(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlSession}/session/allSessionByIdCours/${id}`);
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~formateur-formateur-module.js.map