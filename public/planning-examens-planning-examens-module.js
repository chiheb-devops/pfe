(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-examens-planning-examens-module"],{

/***/ "./src/app/admin/planning-examens/components/add-planning-examens/add-planning-examens.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/planning-examens/components/add-planning-examens/add-planning-examens.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddPlanningExamensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlanningExamensComponent", function() { return AddPlanningExamensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/services/session-examen.service */ "./src/app/admin/services/session-examen.service.ts");
/* harmony import */ var src_app_admin_services_examen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/services/examen.service */ "./src/app/admin/services/examen.service.ts");
/* harmony import */ var _services_planning_examens_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/planning-examens.service */ "./src/app/admin/services/planning-examens.service.ts");
/* harmony import */ var src_app_admin_services_categorie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/admin/services/categorie.service */ "./src/app/admin/services/categorie.service.ts");
/* harmony import */ var src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/admin/services/formateur.service */ "./src/app/admin/services/formateur.service.ts");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");




















function AddPlanningExamensComponent_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const itemCat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", itemCat_r9.nom_categorie);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", itemCat_r9.nom_categorie);
} }
function AddPlanningExamensComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cat\u00E9gorie est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_16_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.cat_formation.errors.required);
} }
function AddPlanningExamensComponent_div_17_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_sess_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", item_sess_r14.ref_form)("nzValue", item_sess_r14.ref_form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_sess_r14.ref_form);
} }
function AddPlanningExamensComponent_div_17_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const item_session_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_session_r15.ref_form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_session_r15.ref_form);
} }
function AddPlanningExamensComponent_div_17_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "R\u00E9f\u00E9rence est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_17_div_4_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.f.ref_formation.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddPlanningExamensComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_div_17_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onchange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlanningExamensComponent_div_17_nz_option_2_Template, 3, 3, "nz-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlanningExamensComponent_div_17_nz_option_3_Template, 1, 2, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPlanningExamensComponent_div_17_div_4_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r2.submitted && ctx_r2.f.ref_formation.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filterallref);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.session);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.ref_formation.errors);
} }
function AddPlanningExamensComponent_div_18_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const item_version_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_version_r21.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_version_r21.version);
} }
function AddPlanningExamensComponent_div_18_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "version est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_18_div_3_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.f.version_formation.errors.required);
} }
function AddPlanningExamensComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_div_18_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.changeVersion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlanningExamensComponent_div_18_nz_option_2_Template, 1, 2, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlanningExamensComponent_div_18_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r3.submitted && ctx_r3.f.version_formation.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.versions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ctx_r3.f.version_formation.errors);
} }
function AddPlanningExamensComponent_div_19_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 23);
} if (rf & 2) {
    const item_pays_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_pays_r27.lieu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_pays_r27.lieu);
} }
function AddPlanningExamensComponent_div_19_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "pays est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_19_div_3_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.f.pays_formation.errors.required);
} }
function AddPlanningExamensComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_div_19_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.changePays($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlanningExamensComponent_div_19_nz_option_2_Template, 1, 2, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlanningExamensComponent_div_19_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r4.submitted && ctx_r4.f.pays_formation.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.pays);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.f.pays_formation.errors);
} }
function AddPlanningExamensComponent_div_20_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_date_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 5, item_date_r33.date_examen, "y-MM-d \u00E0 HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_date_r33.affecter != null)("nzValue", item_date_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", item_date_r33.affecter != null ? item_date_r33.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, item_date_r33.date_examen, "y-MM-d \u00E0 HH:mm"));
} }
function AddPlanningExamensComponent_div_20_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "date est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_20_div_3_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.f.date_formation.errors.required);
} }
function AddPlanningExamensComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_div_20_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.getIdSession($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlanningExamensComponent_div_20_nz_option_2_Template, 5, 11, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlanningExamensComponent_div_20_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r5.submitted && ctx_r5.f.date_formation.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.submitted && ctx_r5.f.date_formation.errors);
} }
function AddPlanningExamensComponent_div_21_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r39.nom, " ", item_r39.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r39.reserved)("nzValue", item_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", item_r39.reserved ? item_r39.reserved : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r39.nom, " ", item_r39.prenom, " ");
} }
function AddPlanningExamensComponent_div_21_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "nom de l'examinateur est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_21_div_3_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.f.name.errors.required);
} }
function AddPlanningExamensComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_div_21_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.getEmail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPlanningExamensComponent_div_21_nz_option_2_Template, 3, 7, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPlanningExamensComponent_div_21_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r6.submitted && ctx_r6.f.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.dataFormateurFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ctx_r6.f.name.errors);
} }
function AddPlanningExamensComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "statut d'examinateur est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_26_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.f.statut_f.errors.required);
} }
function AddPlanningExamensComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre estim\u00E9 des participants est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddPlanningExamensComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPlanningExamensComponent_div_29_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.f.nbr_participant.errors.required);
} }
class AddPlanningExamensComponent {
    constructor(formBuilder, router, toastr, sessionExamenService, examenService, planningExamenService, categorieService, formateurService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.sessionExamenService = sessionExamenService;
        this.examenService = examenService;
        this.planningExamenService = planningExamenService;
        this.categorieService = categorieService;
        this.formateurService = formateurService;
        this.submitted = false;
        this.formateur = [];
        this.session = [];
        this.displayDate = false;
        this.displayAddress = false;
        this.displayFormateur = false;
        this.displayRef = false;
        this.displayVersion = false;
        this.displayType = false;
        this.displayPays = false;
        this.filtercours = [];
        this.fournisseur = [];
        this.dates = [];
        this.filterSession = [];
        this.filterAddress = [];
        this.schedule = [];
        this.dataFormateur = [];
        this.d = [];
        this.dataFormateurFilter = [];
        this.categories = [];
        this.versions = [];
        this.types = [];
        this.pays = [];
        this.dataAllFormateur = [];
        this.allref = [];
        this.filterallref = [];
        this.mobile = false;
        this.isLoading = false;
        this.trimValidator = (control) => {
            if (control.value.startsWith(' ')) {
                return {
                    'trimError': { value: 'control has leading whitespace' }
                };
            }
            if (control.value.endsWith(' ')) {
                return {
                    'trimError2': { value: 'control has trailing whitespace' }
                };
            }
            return null;
        };
    }
    ngOnInit() {
        this.fetchCategorie();
        this.PlanningForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            statut_f: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ref_formation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            version_formation: [''],
            pays_formation: [''],
            date_formation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cat_formation: [''],
            nbr_participant: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.PlanningForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.PlanningForm.invalid) {
            return;
        }
        this.isLoading = true;
        const planning = {
            id_examinateur: Number(this.PlanningForm.value.name),
            id_session: Number(this.PlanningForm.value.date_formation),
            statut_f: this.PlanningForm.value.statut_f,
            nbr_participant: this.PlanningForm.value.nbr_participant,
        };
        this.planningExamenService.savePlanning(planning).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!resp.success) {
                this.toastr.error('Erreur', resp.error);
                this.isLoading = false;
            }
            else {
                const resul = yield this.affectedSession(planning.id_session, planning.id_examinateur);
                const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
                if (this.versions[0].version !== null && this.versions[0].version !== '') {
                    // rien
                }
                else {
                    this.PlanningForm.value.version_formation = null;
                }
                const resuls = yield this.envoyerEmail(this.filterFormateur[0].email, this.PlanningForm.value.ref_formation, moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_examen).format('DD-MM-YYYY'), this.filterSession[0].heure, this.filterSession[0].langue, this.PlanningForm.value.version_formation, this.PlanningForm.value.statut_f, this.filterSession[0].etat_session, namef, this.filterSession[0].designation, this.PlanningForm.value.pays_formation, this.PlanningForm.value.nbr_participant);
                this.toastr.success('Succès');
                this.router.navigate(['/admin/list-planning-cours-examen/planning-examen/list-planning-examen']);
            }
        }));
    }
    onchange(e) {
        if (e) {
            this.displayType = false;
            this.displayPays = false;
            this.displayDate = false;
            this.displayFormateur = false;
            this.displayAddress = false;
            this.versions = [];
            this.PlanningForm.patchValue({
                version_formation: '',
                type_formation: '',
                pays_formation: '',
                date_formation: '',
                name: '',
                address_four: '',
            });
            this.planningExamenService.getAllDistinctVersionFormation(this.PlanningForm.value.ref_formation).subscribe((data) => {
                this.versions = data.results;
                if (this.versions[0].version !== null && this.versions[0].version !== '') {
                    this.displayVersion = true;
                }
                else {
                    this.displayVersion = false;
                    this.withoutVersion();
                }
            });
        }
    }
    withoutVersion() {
        this.displayPays = true;
        this.displayDate = false;
        this.displayFormateur = false;
        this.displayAddress = false;
        this.types = [];
        this.PlanningForm.patchValue({
            type_formation: '',
            pays_formation: '',
            date_formation: '',
            name: '',
            address_four: '',
        });
        this.planningExamenService.getAllDistinctPaysFormationWithoutVersion(this.PlanningForm.value.ref_formation).subscribe((data) => {
            this.pays = data.results;
        });
    }
    changeVersion(e) {
        if (e) {
            this.displayPays = true;
            this.displayDate = false;
            this.displayFormateur = false;
            this.displayAddress = false;
            this.types = [];
            this.PlanningForm.patchValue({
                type_formation: '',
                pays_formation: '',
                date_formation: '',
                name: '',
                address_four: '',
            });
            this.planningExamenService.getAllDistinctPaysFormation(this.PlanningForm.value.ref_formation, this.PlanningForm.value.version_formation).subscribe((data) => {
                this.pays = data.results;
            });
        }
    }
    changePays(e) {
        if (e) {
            this.dates = [];
            this.displayDate = true;
            this.displayFormateur = false;
            this.PlanningForm.patchValue({
                date_formation: '',
                name: '',
            });
            if (this.versions[0].version !== null && this.versions[0].version !== '') {
                this.planningExamenService.getAllDateFormationPresentielle(this.PlanningForm.value.ref_formation, this.PlanningForm.value.version_formation, this.PlanningForm.value.pays_formation).subscribe((data) => {
                    this.dates = data.results;
                });
            }
            else {
                this.planningExamenService.getAllDateFormationPresentielleWithoutVersion(this.PlanningForm.value.ref_formation, this.PlanningForm.value.pays_formation).subscribe((data) => {
                    this.dates = data.results;
                });
            }
        }
    }
    getIdSession(e) {
        if (e) {
            this.displayFormateur = true;
            this.filterSession = [];
            this.filterSession = this.dates.filter(f => {
                return Number(f.id) === Number(this.PlanningForm.value.date_formation);
            });
            this.filterSession[0].date_ex = moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
            this.filterSession[0].heure_debut = moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_ex, 'DD-MM-YYYY HH:mm:ss');
            this.filterSession[0].heure_debut = this.filterSession[0].heure_debut.format('HH:mm');
            this.filterSession[0].date_f = moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
            this.filterSession[0].heure_fin = moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_f, 'DD-MM-YYYY HH:mm:ss');
            this.filterSession[0].heure_fin = this.filterSession[0].heure_fin.format('HH:mm');
            this.filterSession[0].heure = this.filterSession[0].heure_debut + ' à ' + this.filterSession[0].heure_fin;
            this.PlanningForm.patchValue({
                name: ''
            });
            this.fetchFormateur();
        }
    }
    fetchFormateur() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataFormateurFilter = [];
            this.dataFormateur = [];
            this.schedule = [];
            this.formateur = [];
            this.dataAllFormateur = [];
            const res = yield this.planningExamenService.getAllAffecteSessionFormateur().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.formateur = data.result;
                if (this.formateur) {
                    this.formateur.forEach(f => {
                        if (f.schedule) {
                            this.schedule = f.schedule.split(',');
                            this.schedule.forEach(s => {
                                this.d = s.split('/');
                                if (moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_examen).format('YYYY-MM-DD HH:mm') >=
                                    moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm') && moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_examen).format('YYYY-MM-DD HH:mm') <
                                    moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm') || moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_fin).format('YYYY-MM-DD HH:mm') >
                                    moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm') &&
                                    moment__WEBPACK_IMPORTED_MODULE_3__(this.filterSession[0].date_fin).format('YYYY-MM-DD HH:mm') < moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm')) {
                                    this.dataFormateur.push(Object.assign(Object.assign({}, f), { reserved: 'Réservée par ' + this.d[2] + ' de ' +
                                            moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm') +
                                            ' -- ' + moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm') }));
                                }
                                else {
                                    this.dataFormateur.push(Object.assign(Object.assign({}, f), { reservednot: false }));
                                }
                            });
                        }
                        else {
                            this.dataFormateur.push(Object.assign(Object.assign({}, f), { reservednot: false }));
                        }
                        this.schedule = [];
                    });
                }
                const datafil = this.dataFormateur.filter(ex => {
                    return ex.reserved;
                });
                const seen = new Set();
                const filteredArr = yield this.dataFormateur.filter(el => {
                    const duplicate = seen.has(el.id);
                    seen.add(el.id);
                    return !duplicate;
                });
                this.dataFormateurFilter = [...datafil];
                let ids = [];
                datafil.forEach(dataFil => {
                    ids.push(dataFil.id);
                });
                let verif = false;
                filteredArr.forEach(fil => {
                    verif = false;
                    for (const id of ids) {
                        if (fil.id === id) {
                            verif = true;
                            break;
                        }
                        else {
                            verif = false;
                        }
                    }
                    if (!verif) {
                        this.dataFormateurFilter.push(fil);
                    }
                });
                ids = [];
                this.dataFormateurFilter.forEach(dataFil => {
                    ids.push(dataFil.id);
                });
                this.formateurService.getAllExaminateurForPlanning().subscribe((resp) => {
                    this.dataAllFormateur = resp.results;
                    this.dataAllFormateur.forEach(fildata => {
                        verif = false;
                        for (const id of ids) {
                            if (fildata.id === id) {
                                verif = true;
                                break;
                            }
                            else {
                                verif = false;
                            }
                        }
                        if (!verif) {
                            this.dataFormateurFilter.push(fildata);
                        }
                    });
                });
            }));
        });
    }
    getEmail(e) {
        if (e) {
            this.filterFormateur = this.dataAllFormateur.filter(f => {
                return Number(f.id) === Number(this.PlanningForm.value.name);
            });
        }
    }
    fetchRefFormation() {
        this.session = [];
        this.allref = [];
        this.filterallref = [];
        this.displayFormateur = false;
        this.PlanningForm.patchValue({
            version_formation: '',
            ref_formation: '',
            type_formation: '',
            pays_formation: '',
            date_formation: '',
            name: '',
        });
        this.planningExamenService.getAllDistinctRefFormation(this.PlanningForm.value.cat_formation).subscribe((data) => {
            this.session = data.results;
            this.examenService.getAllRefByCategories(this.PlanningForm.value.cat_formation).subscribe((datag) => {
                this.allref = datag.result;
                let verif = false;
                if (this.allref) {
                    this.allref.forEach(fildata => {
                        verif = false;
                        for (const sess of this.session) {
                            if (fildata.ref_form == sess.ref_form) {
                                verif = true;
                                break;
                            }
                            else {
                                verif = false;
                            }
                        }
                        if (!verif) {
                            this.filterallref.push(fildata);
                        }
                    });
                }
            });
        });
    }
    affectedSession(id, name) {
        this.sessionExamenService.updateSessionAffected(id, name).subscribe((resp) => {
            if (!resp.success) {
                this.toastr.error('Error', resp.error);
            }
        });
    }
    envoyerEmail(email, ref, dated, heure, langue, version, etat, etatsession, namef, namecours, pays, nbrpartic) {
        this.sessionExamenService.envoyerEmailFormateur(email, ref, dated, heure, langue, version, etat, etatsession, namef, namecours, pays, nbrpartic).subscribe((resp) => {
            if (!resp.success) {
                this.toastr.error('Error', resp.error);
            }
        });
    }
    fetchCategorie() {
        this.categorieService.getAllCategories().subscribe((data) => {
            this.categories = data.results;
        });
    }
    changeCatgory(e) {
        if (e) {
            this.displayRef = true;
            this.displayVersion = false;
            this.displayType = false;
            this.displayPays = false;
            this.displayDate = false;
            this.displayFormateur = false;
            this.PlanningForm.patchValue({
                ref_formation: '',
                version_formation: '',
                type_formation: '',
                pays_formation: '',
                date_formation: '',
                name: '',
            });
            this.fetchRefFormation();
        }
    }
}
AddPlanningExamensComponent.ɵfac = function AddPlanningExamensComponent_Factory(t) { return new (t || AddPlanningExamensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__["SessionExamenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_examen_service__WEBPACK_IMPORTED_MODULE_7__["ExamenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_planning_examens_service__WEBPACK_IMPORTED_MODULE_8__["PlanningExamensService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_categorie_service__WEBPACK_IMPORTED_MODULE_9__["CategorieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_10__["FormateurService"])); };
AddPlanningExamensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPlanningExamensComponent, selectors: [["app-add-planning-examens"]], decls: 34, vars: 22, consts: [[1, "content-wrapper"], [1, "content"], [1, "container-fluid"], [1, "text-right", "mt-5", 2, "padding-top", "50px !important"], ["routerLink", "/admin/list-planning-cours-examen/planning-examen/list-planning-examen", 1, "btn", "btn-success", "mr-2"], [1, "fas", "fa-arrow-alt-circle-left"], [1, "row", "mb-2"], [1, "col-sm-12", "text-center", "mb-4"], [1, "add-title"], [1, "col-12", "col-md-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["nzPlaceHolder", "Choisir une cat\u00E9gorie", "formControlName", "cat_formation", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "input-group mb-3", 4, "ngIf"], ["nzAllowClear", "", "nzPlaceHolder", "Choisir statut d'examinateur", "formControlName", "statut_f", 3, "nzNotFoundContent", "ngClass"], ["nzLabel", "En attente de confirmation", "nzValue", "En attente de confirmation"], ["nzLabel", "Confirm\u00E9e", "nzValue", "Confirm\u00E9e"], ["nz-input", "", "placeholder", "Nombre estim\u00E9 des participants", "formControlName", "nbr_participant", 3, "ngClass"], [1, "row"], [1, "col-12", "mb-4", "text-center"], ["type", "submit", "nz-button", "", "nzType", "primary", "nzBlock", "", 3, "nzLoading"], [3, "nzLabel", "nzValue"], [1, "invalid-feedback"], [4, "ngIf"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir une r\u00E9f\u00E9rence", "formControlName", "ref_formation", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], ["nzCustomContent", "", "nzDisabled", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", "nzDisabled", "", 3, "nzLabel", "nzValue"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "nzTooltipTitle", "Pas de date"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir une version", "formControlName", "version_formation", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir un pays", "formControlName", "pays_formation", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir une date", "formControlName", "date_formation", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], ["nzCustomContent", "", 3, "nzDisabled", "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzDisabled", "nzLabel", "nzValue"], ["nz-tooltip", "", "nzTooltipPlacement", "right", 3, "nzTooltipTitle"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir nom de l'examinateur", "formControlName", "name", 3, "nzNotFoundContent", "ngClass", "ngModelChange"]], template: function AddPlanningExamensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Retour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ajouter une allocation d'examinateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddPlanningExamensComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPlanningExamensComponent_Template_nz_select_ngModelChange_14_listener($event) { return ctx.changeCatgory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddPlanningExamensComponent_nz_option_15_Template, 1, 2, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddPlanningExamensComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddPlanningExamensComponent_div_17_Template, 5, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddPlanningExamensComponent_div_18_Template, 4, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddPlanningExamensComponent_div_19_Template, 4, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddPlanningExamensComponent_div_20_Template, 4, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddPlanningExamensComponent_div_21_Template, 4, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "nz-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddPlanningExamensComponent_div_26_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddPlanningExamensComponent_div_29_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.PlanningForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.cat_formation.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cat_formation.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayPays);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayFormateur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.statut_f.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.statut_f.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.nbr_participant.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.nbr_participant.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzTooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["@media(max-width:768px) {\n  .add-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-top: 50px;\n    }\n    .form-control[_ngcontent-%COMP%] {\n      font-size: .8rem !important;\n    }\n\n}\n@media(min-width:768px) {\n  .add-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n    margin-top: 40px;\n    }\n\n}\nnz-select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGxhbm5pbmctZXhhbWVucy9jb21wb25lbnRzL2FkZC1wbGFubmluZy1leGFtZW5zL2FkZC1wbGFubmluZy1leGFtZW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7SUFDQTtNQUNFLDJCQUEyQjtJQUM3Qjs7QUFFSjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCOztBQUVKO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wbGFubmluZy1leGFtZW5zL2NvbXBvbmVudHMvYWRkLXBsYW5uaW5nLWV4YW1lbnMvYWRkLXBsYW5uaW5nLWV4YW1lbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcbiAgLmFkZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG59XG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XG4gIC5hZGQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuXG59XG5uei1zZWxlY3QsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddPlanningExamensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-planning-examens',
                templateUrl: './add-planning-examens.component.html',
                styleUrls: ['./add-planning-examens.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__["SessionExamenService"] }, { type: src_app_admin_services_examen_service__WEBPACK_IMPORTED_MODULE_7__["ExamenService"] }, { type: _services_planning_examens_service__WEBPACK_IMPORTED_MODULE_8__["PlanningExamensService"] }, { type: src_app_admin_services_categorie_service__WEBPACK_IMPORTED_MODULE_9__["CategorieService"] }, { type: src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_10__["FormateurService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/planning-examens/components/edit-planning-examens/edit-planning-examens.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/planning-examens/components/edit-planning-examens/edit-planning-examens.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EditPlanningExamensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlanningExamensComponent", function() { return EditPlanningExamensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin/services/session-examen.service */ "./src/app/admin/services/session-examen.service.ts");
/* harmony import */ var src_app_admin_services_planning_examens_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin/services/planning-examens.service */ "./src/app/admin/services/planning-examens.service.ts");
/* harmony import */ var src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin/services/formateur.service */ "./src/app/admin/services/formateur.service.ts");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");


















function EditPlanningExamensComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " cat\u00E9gorie est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_16_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.cat_formation.errors.required);
} }
function EditPlanningExamensComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " R\u00E9f\u00E9rence est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_20_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.ref_formation.errors.required);
} }
function EditPlanningExamensComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r2.Result == null ? null : ctx_r2.Result.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx_r2.Result == null ? null : ctx_r2.Result.version);
} }
function EditPlanningExamensComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " date est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_29_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.date_formation.errors.required);
} }
function EditPlanningExamensComponent_nz_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r11.nom, " ", item_r11.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzValue", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r11.reserved);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", item_r11.reserved ? item_r11.reserved : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r11.nom, " ", item_r11.prenom, " ");
} }
function EditPlanningExamensComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " nom de l'instructeur est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_34_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.f.name.errors.required);
} }
function EditPlanningExamensComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " statut d'instructeur est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_40_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.statut_f.errors.required);
} }
function EditPlanningExamensComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nombre estim\u00E9 des participants est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlanningExamensComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlanningExamensComponent_div_43_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.f.nbr_participant.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class EditPlanningExamensComponent {
    constructor(formBuilder, router, toastr, sessionExamenService, planningExamenService, formateurService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.sessionExamenService = sessionExamenService;
        this.planningExamenService = planningExamenService;
        this.formateurService = formateurService;
        this.route = route;
        this.submitted = false;
        this.formateur = [];
        this.session = [];
        this.displayAddress = false;
        this.displayVersion = false;
        this.filtercours = [];
        this.fournisseur = [];
        this.dates = [];
        this.filterAddress = [];
        this.schedule = [];
        this.dataFormateur = [];
        this.d = [];
        this.dataAllFormateur = [];
        this.dataFormateurFilter = [];
        this.dataFormateurFil = [];
        this.isLoading = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = this.route.snapshot.paramMap.get('id');
            this.PlanningForm = this.formBuilder.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                statut_f: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                cat_formation: [''],
                version_formation: [''],
                lieu_formation: [''],
                ref_formation: [''],
                date_formation: [''],
                nbr_participant: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
            const a = yield this.planningExamenService.getPlanningById(this.id).subscribe((resp) => {
                this.Result = resp.result[0];
                console.log(this.Result);
                this.Result.date_ex = moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
                this.Result.heure_debut = moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_ex, 'DD-MM-YYYY HH:mm:ss');
                this.Result.heure_debut = this.Result.heure_debut.format('HH:mm');
                this.Result.date_f = moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
                this.Result.heure_fin = moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_f, 'DD-MM-YYYY HH:mm:ss');
                this.Result.heure_fin = this.Result.heure_fin.format('HH:mm');
                this.Result.heure = this.Result.heure_debut + ' à ' + this.Result.heure_fin;
                this.PlanningForm.patchValue({
                    name: this.Result.name,
                    cat_formation: this.Result.categorie,
                    ref_formation: this.Result.ref_formation,
                    version_formation: this.Result.version,
                    lieu_formation: this.Result.lieu,
                    date_formation: `${moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_examen).format('DD-MM-YYYY HH:mm')}`,
                    statut_f: this.Result.statut_f,
                    nbr_participant: this.Result.nbr_participant
                });
                this.Result.date_formation = `${moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_examen).format('DD-MM-YYYY HH:mm')}`;
                if (this.Result.version !== null && this.Result.version !== '') {
                    this.displayVersion = true;
                }
                this.fetchFormateur();
            });
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.PlanningForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.PlanningForm.invalid) {
            return;
        }
        this.isLoading = true;
        const planning = {
            id_examinateur: this.filterFormateur[0].id,
            statut_f: this.PlanningForm.value.statut_f,
            nbr_participant: this.PlanningForm.value.nbr_participant,
        };
        this.planningExamenService.updatePlanning(this.id, planning).subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!resp.success) {
                this.toastr.error('Erreur', resp.error);
                this.isLoading = false;
            }
            else {
                if (this.Result.version !== null && this.Result.version !== '') {
                    // rien
                }
                else {
                    this.Result.version = null;
                }
                if (this.filterFormateur[0].id !== this.Result.id_examinateur) {
                    this.sessionExamenService.emailFormateurChanger(this.Result.email, this.Result.name, this.Result.ref_formation, this.Result.designation, this.Result.date_ex).subscribe((r) => {
                        if (!r.success) {
                            this.toastr.error('Erreur', r.error);
                        }
                    });
                }
                const resul = yield this.affectedSession(this.Result.id_session, planning.id_examinateur);
                const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
                const resuls = yield this.envoyerEmail(this.filterFormateur[0].email, this.Result.ref_formation, moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_examen).format('DD-MM-YYYY'), this.Result.heure, this.Result.langue, this.Result.version, planning.statut_f, this.Result.etat_session, namef, this.Result.designation, this.Result.lieu, planning.nbr_participant);
                this.toastr.success('Succès');
                this.router.navigate(['/admin/list-planning-cours-examen/planning-examen/list-planning-examen']);
            }
        }));
    }
    fetchFormateur() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataFormateurFilter = [];
            this.dataFormateur = [];
            this.schedule = [];
            this.formateur = [];
            this.dataAllFormateur = [];
            const res = yield this.planningExamenService.getAllAffecteSessionFormateur().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.formateur = data.result;
                this.formateur.forEach(f => {
                    if (f.schedule) {
                        this.schedule = f.schedule.split(',');
                        this.schedule.forEach(s => {
                            this.d = s.split('/');
                            if (moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_examen).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm'), moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm'), undefined, '[)') ||
                                moment__WEBPACK_IMPORTED_MODULE_3__(this.Result.date_fin).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm'), moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm'), undefined, '()')) {
                                this.dataFormateur.push(Object.assign(Object.assign({}, f), { reserved: 'Réservée par ' + this.d[2] + ' de ' + moment__WEBPACK_IMPORTED_MODULE_3__(this.d[0]).format('YYYY-MM-DD HH:mm') +
                                        ' -- ' + moment__WEBPACK_IMPORTED_MODULE_3__(this.d[1]).format('YYYY-MM-DD HH:mm') }));
                            }
                            else {
                                this.dataFormateur.push(Object.assign(Object.assign({}, f), { reservednot: false }));
                            }
                        });
                    }
                    else {
                        this.dataFormateur.push(Object.assign(Object.assign({}, f), { reservednot: false }));
                    }
                    this.schedule = [];
                });
                const datafil = this.dataFormateur.filter(ex => {
                    return ex.reserved;
                });
                const seen = new Set();
                const filteredArr = yield this.dataFormateur.filter(el => {
                    const duplicate = seen.has(el.id);
                    seen.add(el.id);
                    return !duplicate;
                });
                this.dataFormateurFilter = [...datafil];
                let ids = [];
                datafil.forEach(dataFil => {
                    ids.push(dataFil.id);
                });
                let verif = false;
                filteredArr.forEach(fil => {
                    verif = false;
                    for (const id of ids) {
                        if (fil.id === id) {
                            verif = true;
                            break;
                        }
                        else {
                            verif = false;
                        }
                    }
                    if (!verif) {
                        this.dataFormateurFilter.push(fil);
                    }
                });
                ids = [];
                this.dataFormateurFilter.forEach(dataFil => {
                    ids.push(dataFil.id);
                });
                this.formateurService.getAllExaminateurForPlanning().subscribe((resp) => {
                    this.dataAllFormateur = resp.results;
                    this.dataAllFormateur.forEach(fildata => {
                        verif = false;
                        for (const id of ids) {
                            if (fildata.id === id) {
                                verif = true;
                                break;
                            }
                            else {
                                verif = false;
                            }
                        }
                        if (!verif) {
                            this.dataFormateurFilter.push(fildata);
                        }
                    });
                    this.dataFormateurFil = this.dataFormateurFilter.filter(filtredform => Number(filtredform.id)
                        !== Number(this.Result.id_examinateur));
                    this.defaultGetEmail();
                });
            }));
        });
    }
    getEmail(e) {
        if (e) {
            this.filterFormateur = [];
            this.filterFormateur = this.dataFormateurFilter.filter(f => {
                return Number(f.id) === Number(this.PlanningForm.value.name);
            });
        }
    }
    defaultGetEmail() {
        this.filterFormateur = [];
        this.filterFormateur = this.dataFormateurFilter.filter(f => {
            return Number(f.id) === this.Result.id_examinateur;
        });
    }
    affectedSession(id, name) {
        this.sessionExamenService.updateSessionAffected(id, name).subscribe((resp) => {
            if (!resp.success) {
                this.toastr.error('Erreur', resp.error);
            }
        });
    }
    envoyerEmail(email, ref, dated, heure, langue, version, etat, etatsession, namef, namecours, pays, nbrpartic) {
        this.sessionExamenService.envoyerEmailFormateur(email, ref, dated, heure, langue, version, etat, etatsession, namef, namecours, pays, nbrpartic).subscribe((resp) => {
            if (!resp.success) {
                this.toastr.error('Error', resp.error);
            }
        });
    }
}
EditPlanningExamensComponent.ɵfac = function EditPlanningExamensComponent_Factory(t) { return new (t || EditPlanningExamensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__["SessionExamenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_planning_examens_service__WEBPACK_IMPORTED_MODULE_7__["PlanningExamensService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_8__["FormateurService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
EditPlanningExamensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPlanningExamensComponent, selectors: [["app-edit-planning-examens"]], decls: 48, vars: 46, consts: [[1, "content-wrapper"], [1, "content"], [1, "container-fluid"], [1, "text-right", "mt-5", 2, "padding-top", "50px !important"], ["routerLink", "/admin/list-planning-cours-examen/planning-examen/list-planning-examen", 1, "btn", "btn-success", "mr-2"], [1, "fas", "fa-arrow-alt-circle-left"], [1, "row", "mb-2"], [1, "col-sm-12", "text-center", "mb-4"], [1, "edit-title"], [1, "col-12", "col-md-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["nzPlaceHolder", "Choisir une cat\u00E9gorie", "formControlName", "cat_formation", 3, "nzNotFoundContent", "ngClass"], [3, "nzLabel", "nzValue"], ["class", "invalid-feedback", 4, "ngIf"], ["nzPlaceHolder", "Choisir une r\u00E9f\u00E9rence", "formControlName", "ref_formation", 3, "nzNotFoundContent", "ngClass"], ["class", "input-group mb-3", 4, "ngIf"], ["nzPlaceHolder", "Choisir un pays", "formControlName", "lieu_formation", 3, "nzNotFoundContent"], ["nzPlaceHolder", "Choisir une date", "formControlName", "date_formation", 3, "nzNotFoundContent", "ngClass"], ["nzShowSearch", "", "nzPlaceHolder", "Choisir nom de l'examinateur", "formControlName", "name", 3, "nzNotFoundContent", "ngClass", "ngModelChange"], ["nzCustomContent", "", 3, "nzDisabled", "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzAllowClear", "", "nzPlaceHolder", "Choisir statut d'examinateur", "formControlName", "statut_f", 3, "nzNotFoundContent", "ngClass"], ["nzLabel", "En attente de confirmation", "nzValue", "En attente de confirmation"], ["nzLabel", "Confirm\u00E9e", "nzValue", "Confirm\u00E9e"], ["nzLabel", "Annul\u00E9e", "nzValue", "annul\u00E9e"], ["nz-input", "", "placeholder", "Nombre estim\u00E9 des participants", "formControlName", "nbr_participant", 3, "ngClass"], [1, "row"], [1, "col-12", "mb-4", "text-center"], ["type", "submit", "nz-button", "", "nzType", "primary", "nzBlock", "", 3, "nzLoading"], [1, "invalid-feedback"], [4, "ngIf"], ["nzPlaceHolder", "Choisir une version", "formControlName", "version_formation", 3, "nzNotFoundContent"], ["nzCustomContent", "", 3, "nzDisabled", "nzLabel", "nzValue"], ["nz-tooltip", "", "nzTooltipPlacement", "right", 3, "nzTooltipTitle"]], template: function EditPlanningExamensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Retour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Modifier une allocation d'examinateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditPlanningExamensComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditPlanningExamensComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EditPlanningExamensComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EditPlanningExamensComponent_div_21_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditPlanningExamensComponent_div_29_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nz-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditPlanningExamensComponent_Template_nz_select_ngModelChange_31_listener($event) { return ctx.getEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EditPlanningExamensComponent_nz_option_33_Template, 3, 7, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, EditPlanningExamensComponent_div_34_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "nz-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "nz-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "nz-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EditPlanningExamensComponent_div_40_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, EditPlanningExamensComponent_div_43_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.PlanningForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.cat_formation.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", ctx.Result == null ? null : ctx.Result.categorie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.Result == null ? null : ctx.Result.categorie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.cat_formation.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.ref_formation.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", ctx.Result == null ? null : ctx.Result.ref_formation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.Result == null ? null : ctx.Result.ref_formation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.ref_formation.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 32, ctx.Result == null ? null : ctx.Result.lieu));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.Result == null ? null : ctx.Result.lieu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c0, ctx.submitted && ctx.f.date_formation.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", ctx.Result == null ? null : ctx.Result.date_formation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzValue", ctx.Result == null ? null : ctx.Result.date_formation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.date_formation.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c0, ctx.submitted && ctx.f.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", ctx.Result == null ? null : ctx.Result.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.Result == null ? null : ctx.Result.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataFormateurFil);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundContent", "Pas de r\u00E9sultat")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c0, ctx.submitted && ctx.f.statut_f.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.statut_f.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c0, ctx.submitted && ctx.f.nbr_participant.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.nbr_participant.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzTooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: ["@media(max-width:768px) {\n  .add-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-top: 50px;\n    }\n    .form-control[_ngcontent-%COMP%] {\n      font-size: .8rem !important;\n    }\n\n}\n@media(min-width:768px) {\n  .add-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n    margin-top: 40px;\n    }\n\n}\nnz-select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGxhbm5pbmctZXhhbWVucy9jb21wb25lbnRzL2VkaXQtcGxhbm5pbmctZXhhbWVucy9lZGl0LXBsYW5uaW5nLWV4YW1lbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtJQUNBO01BQ0UsMkJBQTJCO0lBQzdCOztBQUVKO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7O0FBRUo7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYW5uaW5nLWV4YW1lbnMvY29tcG9uZW50cy9lZGl0LXBsYW5uaW5nLWV4YW1lbnMvZWRpdC1wbGFubmluZy1leGFtZW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XG4gIC5hZGQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxufVxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xuICAuYWRkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cblxufVxubnotc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditPlanningExamensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-planning-examens',
                templateUrl: './edit-planning-examens.component.html',
                styleUrls: ['./edit-planning-examens.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_admin_services_session_examen_service__WEBPACK_IMPORTED_MODULE_6__["SessionExamenService"] }, { type: src_app_admin_services_planning_examens_service__WEBPACK_IMPORTED_MODULE_7__["PlanningExamensService"] }, { type: src_app_admin_services_formateur_service__WEBPACK_IMPORTED_MODULE_8__["FormateurService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/planning-examens/components/planning-examens/planning-examens.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/planning-examens/components/planning-examens/planning-examens.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PlanningExamensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningExamensComponent", function() { return PlanningExamensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PlanningExamensComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlanningExamensComponent.ɵfac = function PlanningExamensComponent_Factory(t) { return new (t || PlanningExamensComponent)(); };
PlanningExamensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanningExamensComponent, selectors: [["app-planning-examens"]], decls: 1, vars: 0, template: function PlanningExamensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYW5uaW5nLWV4YW1lbnMvY29tcG9uZW50cy9wbGFubmluZy1leGFtZW5zL3BsYW5uaW5nLWV4YW1lbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanningExamensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-planning-examens',
                templateUrl: './planning-examens.component.html',
                styleUrls: ['./planning-examens.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin/planning-examens/components/show-planning-examens/show-planning-examens.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/planning-examens/components/show-planning-examens/show-planning-examens.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ShowPlanningExamensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPlanningExamensComponent", function() { return ShowPlanningExamensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_planning_examens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/planning-examens.service */ "./src/app/admin/services/planning-examens.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ShowPlanningExamensComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Retour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowPlanningExamensComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Retour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowPlanningExamensComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.Result == null ? null : ctx_r2.Result.version);
} }
function ShowPlanningExamensComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nom de l'examinateur: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.Result == null ? null : ctx_r3.Result.name, "");
} }
class ShowPlanningExamensComponent {
    constructor(planningExamenService, route) {
        this.planningExamenService = planningExamenService;
        this.route = route;
    }
    ngOnInit() {
        this.dateToday = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).add(-1, 'days').format('DD-MM-YYYY');
        this.id = this.route.snapshot.paramMap.get('id');
        this.planningExamenService.getPlanningById(this.id).subscribe((resp) => {
            this.Result = resp.result[0];
            this.Result.date_examen = moment__WEBPACK_IMPORTED_MODULE_1__(this.Result.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
            this.Result.date = moment__WEBPACK_IMPORTED_MODULE_1__(this.Result.date_examen, 'DD-MM-YYYY HH:mm:ss');
            this.Result.date = this.Result.date.format('DD-MM-YYYY');
            this.Result.heure_debut = moment__WEBPACK_IMPORTED_MODULE_1__(this.Result.date_examen, 'DD-MM-YYYY HH:mm:ss');
            this.Result.heure_debut = this.Result.heure_debut.format('HH:mm');
            this.Result.date_fin = moment__WEBPACK_IMPORTED_MODULE_1__(this.Result.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
            this.Result.heure_fin = moment__WEBPACK_IMPORTED_MODULE_1__(this.Result.date_fin, 'DD-MM-YYYY HH:mm:ss');
            this.Result.heure_fin = this.Result.heure_fin.format('HH:mm');
            this.Result.heure = this.Result.heure_debut + ' à ' + this.Result.heure_fin;
        });
    }
}
ShowPlanningExamensComponent.ɵfac = function ShowPlanningExamensComponent_Factory(t) { return new (t || ShowPlanningExamensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_planning_examens_service__WEBPACK_IMPORTED_MODULE_2__["PlanningExamensService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ShowPlanningExamensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowPlanningExamensComponent, selectors: [["app-show-planning-examens"]], decls: 35, vars: 11, consts: [[1, "content-wrapper"], [1, "content"], [1, "container-fluid"], [1, "text-right", "mt-5", 2, "padding-top", "50px !important"], ["routerLink", "/admin/list-planning-cours-examen/planning-examen/list-planning-examen", "class", "btn btn-success mr-2", 4, "ngIf"], ["routerLink", "/admin/list-planning-cours-examen-inactive/planning-examen/list-planning-examen-inactive", "class", "btn btn-success mr-2", 4, "ngIf"], [1, "row", "mb-2", "mt-4"], [1, "col-12", "col-sm-6", "col-md-12", "col-lg-12"], [1, "card", "bg-light"], [1, "card-body", "pt-5"], [1, "row"], [1, "col-12"], [1, "lead", "text-muted"], ["class", "lead text-muted", 4, "ngIf"], ["routerLink", "/admin/list-planning-cours-examen/planning-examen/list-planning-examen", 1, "btn", "btn-success", "mr-2"], [1, "fas", "fa-arrow-alt-circle-left"], ["routerLink", "/admin/list-planning-cours-examen-inactive/planning-examen/list-planning-examen-inactive", 1, "btn", "btn-success", "mr-2"]], template: function ShowPlanningExamensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowPlanningExamensComponent_button_4_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowPlanningExamensComponent_button_5_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " R\u00E9f\u00E9rence: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShowPlanningExamensComponent_p_16_Template, 4, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Heure: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ShowPlanningExamensComponent_p_25_Template, 4, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Statut d'instructeur: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nbr estim\u00E9 des participants: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.Result == null ? null : ctx.Result.date) >= ctx.dateToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.Result == null ? null : ctx.Result.date) < ctx.dateToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Result == null ? null : ctx.Result.ref_formation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Result == null ? null : ctx.Result.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Result == null ? null : ctx.Result.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Result == null ? null : ctx.Result.heure, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Result == null ? null : ctx.Result.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 9, ctx.Result == null ? null : ctx.Result.statut_f), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Result == null ? null : ctx.Result.nbr_participant, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".lead[_ngcontent-%COMP%] {\n  font-size: .9rem;\n  font-weight: 300;\n}\n@media(max-width:768px) {\n  .lead[_ngcontent-%COMP%] {\n    font-size: .8rem;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGxhbm5pbmctZXhhbWVucy9jb21wb25lbnRzL3Nob3ctcGxhbm5pbmctZXhhbWVucy9zaG93LXBsYW5uaW5nLWV4YW1lbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGxhbm5pbmctZXhhbWVucy9jb21wb25lbnRzL3Nob3ctcGxhbm5pbmctZXhhbWVucy9zaG93LXBsYW5uaW5nLWV4YW1lbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFkIHtcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcbiAgLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowPlanningExamensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-planning-examens',
                templateUrl: './show-planning-examens.component.html',
                styleUrls: ['./show-planning-examens.component.css']
            }]
    }], function () { return [{ type: _services_planning_examens_service__WEBPACK_IMPORTED_MODULE_2__["PlanningExamensService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/planning-examens/planning-examens-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/planning-examens/planning-examens-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PlanningExamensRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningExamensRoutingModule", function() { return PlanningExamensRoutingModule; });
/* harmony import */ var _components_planning_examens_calendar_planning_examens_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/planning-examens-calendar/planning-examens-calendar.component */ "./src/app/admin/planning-examens/components/planning-examens-calendar/planning-examens-calendar.component.ts");
/* harmony import */ var _components_show_planning_examens_show_planning_examens_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/show-planning-examens/show-planning-examens.component */ "./src/app/admin/planning-examens/components/show-planning-examens/show-planning-examens.component.ts");
/* harmony import */ var _components_edit_planning_examens_edit_planning_examens_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-planning-examens/edit-planning-examens.component */ "./src/app/admin/planning-examens/components/edit-planning-examens/edit-planning-examens.component.ts");
/* harmony import */ var _components_add_planning_examens_add_planning_examens_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-planning-examens/add-planning-examens.component */ "./src/app/admin/planning-examens/components/add-planning-examens/add-planning-examens.component.ts");
/* harmony import */ var _components_list_planning_examens_inactive_list_planning_examens_inactive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-planning-examens-inactive/list-planning-examens-inactive.component */ "./src/app/admin/planning-examens/components/list-planning-examens-inactive/list-planning-examens-inactive.component.ts");
/* harmony import */ var _components_list_planning_examens_list_planning_examens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-planning-examens/list-planning-examens.component */ "./src/app/admin/planning-examens/components/list-planning-examens/list-planning-examens.component.ts");
/* harmony import */ var _components_planning_examens_planning_examens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/planning-examens/planning-examens.component */ "./src/app/admin/planning-examens/components/planning-examens/planning-examens.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











const routes = [
    { path: '',
        component: _components_planning_examens_planning_examens_component__WEBPACK_IMPORTED_MODULE_6__["PlanningExamensComponent"],
        children: [
            {
                path: 'list-planning-examens',
                component: _components_list_planning_examens_list_planning_examens_component__WEBPACK_IMPORTED_MODULE_5__["ListPlanningExamensComponent"],
            },
            {
                path: 'list-planning-examens-inactive',
                component: _components_list_planning_examens_inactive_list_planning_examens_inactive_component__WEBPACK_IMPORTED_MODULE_4__["ListPlanningExamensInactiveComponent"],
            },
            {
                path: 'add-planning-examens',
                component: _components_add_planning_examens_add_planning_examens_component__WEBPACK_IMPORTED_MODULE_3__["AddPlanningExamensComponent"],
            },
            {
                path: 'edit-planning-examens/:id',
                component: _components_edit_planning_examens_edit_planning_examens_component__WEBPACK_IMPORTED_MODULE_2__["EditPlanningExamensComponent"],
            },
            {
                path: 'show-planning-examens/:id',
                component: _components_show_planning_examens_show_planning_examens_component__WEBPACK_IMPORTED_MODULE_1__["ShowPlanningExamensComponent"],
            },
            {
                path: 'planning-examens-calendar',
                component: _components_planning_examens_calendar_planning_examens_calendar_component__WEBPACK_IMPORTED_MODULE_0__["PlanningExamensCalendarComponent"],
            }
        ]
    }
];
class PlanningExamensRoutingModule {
}
PlanningExamensRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PlanningExamensRoutingModule });
PlanningExamensRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function PlanningExamensRoutingModule_Factory(t) { return new (t || PlanningExamensRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PlanningExamensRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PlanningExamensRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/planning-examens/planning-examens.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/planning-examens/planning-examens.module.ts ***!
  \*******************************************************************/
/*! exports provided: PlanningExamensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningExamensModule", function() { return PlanningExamensModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _planning_examens_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planning-examens-routing.module */ "./src/app/admin/planning-examens/planning-examens-routing.module.ts");
/* harmony import */ var _components_add_planning_examens_add_planning_examens_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-planning-examens/add-planning-examens.component */ "./src/app/admin/planning-examens/components/add-planning-examens/add-planning-examens.component.ts");
/* harmony import */ var _components_edit_planning_examens_edit_planning_examens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-planning-examens/edit-planning-examens.component */ "./src/app/admin/planning-examens/components/edit-planning-examens/edit-planning-examens.component.ts");
/* harmony import */ var _components_list_planning_examens_list_planning_examens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-planning-examens/list-planning-examens.component */ "./src/app/admin/planning-examens/components/list-planning-examens/list-planning-examens.component.ts");
/* harmony import */ var _components_list_planning_examens_inactive_list_planning_examens_inactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-planning-examens-inactive/list-planning-examens-inactive.component */ "./src/app/admin/planning-examens/components/list-planning-examens-inactive/list-planning-examens-inactive.component.ts");
/* harmony import */ var _components_planning_examens_planning_examens_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/planning-examens/planning-examens.component */ "./src/app/admin/planning-examens/components/planning-examens/planning-examens.component.ts");
/* harmony import */ var _components_planning_examens_calendar_planning_examens_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/planning-examens-calendar/planning-examens-calendar.component */ "./src/app/admin/planning-examens/components/planning-examens-calendar/planning-examens-calendar.component.ts");
/* harmony import */ var _components_show_planning_examens_show_planning_examens_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/show-planning-examens/show-planning-examens.component */ "./src/app/admin/planning-examens/components/show-planning-examens/show-planning-examens.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-skeleton.js");

















 // a plugin






_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_17__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_18__["default"]
]);
class PlanningExamensModule {
}
PlanningExamensModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlanningExamensModule });
PlanningExamensModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlanningExamensModule_Factory(t) { return new (t || PlanningExamensModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _planning_examens_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanningExamensRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__["FullCalendarModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"],
            ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_22__["NzSkeletonModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanningExamensModule, { declarations: [_components_add_planning_examens_add_planning_examens_component__WEBPACK_IMPORTED_MODULE_3__["AddPlanningExamensComponent"], _components_edit_planning_examens_edit_planning_examens_component__WEBPACK_IMPORTED_MODULE_4__["EditPlanningExamensComponent"], _components_list_planning_examens_list_planning_examens_component__WEBPACK_IMPORTED_MODULE_5__["ListPlanningExamensComponent"], _components_list_planning_examens_inactive_list_planning_examens_inactive_component__WEBPACK_IMPORTED_MODULE_6__["ListPlanningExamensInactiveComponent"], _components_planning_examens_planning_examens_component__WEBPACK_IMPORTED_MODULE_7__["PlanningExamensComponent"], _components_planning_examens_calendar_planning_examens_calendar_component__WEBPACK_IMPORTED_MODULE_8__["PlanningExamensCalendarComponent"], _components_show_planning_examens_show_planning_examens_component__WEBPACK_IMPORTED_MODULE_9__["ShowPlanningExamensComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _planning_examens_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanningExamensRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__["FullCalendarModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"],
        ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_22__["NzSkeletonModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanningExamensModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_add_planning_examens_add_planning_examens_component__WEBPACK_IMPORTED_MODULE_3__["AddPlanningExamensComponent"], _components_edit_planning_examens_edit_planning_examens_component__WEBPACK_IMPORTED_MODULE_4__["EditPlanningExamensComponent"], _components_list_planning_examens_list_planning_examens_component__WEBPACK_IMPORTED_MODULE_5__["ListPlanningExamensComponent"], _components_list_planning_examens_inactive_list_planning_examens_inactive_component__WEBPACK_IMPORTED_MODULE_6__["ListPlanningExamensInactiveComponent"], _components_planning_examens_planning_examens_component__WEBPACK_IMPORTED_MODULE_7__["PlanningExamensComponent"], _components_planning_examens_calendar_planning_examens_calendar_component__WEBPACK_IMPORTED_MODULE_8__["PlanningExamensCalendarComponent"], _components_show_planning_examens_show_planning_examens_component__WEBPACK_IMPORTED_MODULE_9__["ShowPlanningExamensComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _planning_examens_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanningExamensRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__["FullCalendarModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"],
                    ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_22__["NzSkeletonModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=planning-examens-planning-examens-module.js.map