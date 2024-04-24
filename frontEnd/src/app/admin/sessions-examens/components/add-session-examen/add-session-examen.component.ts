import { SessionExamenService } from './../../../services/session-examen.service';
import { ExamenService } from './../../../services/examen.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import countries from 'src/app/countries.json';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

import { CategorieService } from 'src/app/admin/services/categorie.service';
import {en_US, fr_FR, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-add-session-examen',
  templateUrl: './add-session-examen.component.html',
  styleUrls: ['./add-session-examen.component.css']
})
export class AddSessionExamenComponent implements OnInit {
  SessionForm: FormGroup;
  submitted = false;
  displayRef = false;
  displayVersion = false;
  displayCountry = false;
  cours = [];
  testcours = [];
  filtercours = [];
  categories = [];
  versions = [];
  allCours = [];
  todayDate;
  verif = false;
  title = 'json-file-read-angular';
  today = new Date();
  isLoading = false;
  public countryList: { name: string }[] = countries;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private examenService: ExamenService,
    private sessionExamenService: SessionExamenService,
    private categorieService: CategorieService,
    private i18n: NzI18nService
  ) { }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.fetchCategorie();
    this.fetchCours();
    this.fetchAllCours();
    this.SessionForm = this.formBuilder.group({
    ref_formation: ['', [Validators.required]],
    version_session: ['', ],
    cat_formation: ['', [Validators.required]],
    date_debut: ['', [Validators.required]],
    langue: ['', [Validators.required]],
    lieu: ['', [Validators.required]],
    etat_session: ['en attente de confirmation', [Validators.required]]
  });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.SessionForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.SessionForm.invalid) {
        return;
    }
    this.isLoading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.SessionForm.invalid) {
        return;
    }
    const valueDateDebut = moment(this.SessionForm.value.date_debut).format('YYYY-MM-DD HH:mm:ss');
    let  filterIdCour = [];
    if (this.versions[0].version !== null && this.versions[0].version !== '') {
       filterIdCour = this.allCours.filter(idcour => {
        return idcour.ref_form === this.SessionForm.value.ref_formation && idcour.version === this.SessionForm.value.version_session;
      });
    } else {
       filterIdCour = this.allCours.filter(idcour => {
        return idcour.ref_form === this.SessionForm.value.ref_formation;
      });
    }
    const session = {
      id_examen: filterIdCour[0].id,
      date_examen: valueDateDebut,
      langue: this.SessionForm.value.langue,
      lieu: this.SessionForm.value.lieu || null,
      etat_session: this.SessionForm.value.etat_session
    };
    this.sessionExamenService.saveSession(session).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(['/admin/list-session-cours-examen/session-examen/list-examen']);
      }
    });
}

   onchange(e){
     if (e) {
      this.displayRef = true;
      this.displayVersion = false;
      this.SessionForm.patchValue({
        ref_formation: '',
        version_session: ''
      });
      this.submitted = false;
      this.filtercours = this.testcours.filter((cour: any) => {
        return cour.categorie === this.SessionForm.value.cat_formation;
      });
      this.cours = this.filtercours.map((cour: any) => {
        return cour;
      });
     }
}
changeRef(e){
if (e) {
  this.versions = [];
  this.SessionForm.patchValue({
    version_session: '',
  });
  this.submitted = false;
  this.examenService.getAllVersionByRef(this.SessionForm.value.ref_formation).subscribe((resp: any) => {
    this.versions = resp.result;
    if (this.versions[0].version !== null && this.versions[0].version !== '' ) {
      this.displayVersion = true;
      this.SessionForm.get('version_session').setValidators(Validators.required);
    } else {
     this.SessionForm.get('version_session').clearValidators();
     this.displayVersion = false;
     this.SessionForm.patchValue({
      version_session: '',
     });
    }
  });
}
}
fetchCours(){
  this.examenService.getAllDistinctCours().subscribe((data: any) => {
    this.testcours = data.result;
    this.cours = data.result;
  });
 }
 fetchAllCours(){
  this.examenService.getAllCours().subscribe((resp: any) => {
    this.allCours = resp.results;
  });
 }
 fetchCategorie(){
  this.categorieService.getAllCategories().subscribe((data: any) => {
    this.categories = data.results;
  });
 }
 disabledDate = (current: Date): boolean => {
  // Can not select days before today and today
  return differenceInCalendarDays(current, this.today) < 0;
}
}
