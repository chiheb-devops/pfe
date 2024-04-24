import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/admin/services/session.service';
import { CoursService } from 'src/app/admin/services/cours.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import countries from 'src/app/countries.json';
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
  debut: NgbDateStruct;
  fin: NgbDateStruct;
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
  isLoading = false;
  public countryList: { name: string }[] = countries;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private coursService: CoursService,
    private sessionService: SessionService,
    private categorieService: CategorieService
  ) { }

  ngOnInit(): void {
    const current = new Date();
    this.todayDate = {
  year: current.getFullYear(),
  month: current.getMonth() + 1,
  day: current.getDate()
};

    this.fetchCategorie();
    this.fetchCours();
    this.fetchAllCours();
    this.SessionForm = this.formBuilder.group({
    ref_formation: ['', [Validators.required]],
    version_session: ['', ],
    cat_formation: ['', ],
    date_debut: ['', [Validators.required]],
    type: ['', [Validators.required]],
    langue: ['', [Validators.required]],
    lieu: ['', ],
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
    const DateDebut = this.SessionForm.value.date_debut;
    const myDateDebut = new Date(DateDebut.year, DateDebut.month - 1, DateDebut.day);
    const valueDateDebut = moment(myDateDebut).format('YYYY-MM-DD');
    this.submitted = true;
    // stop here if form is invalid
    if (this.SessionForm.invalid) {
        return;
    }
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
      id_cour: filterIdCour[0].id,
      date_debut: valueDateDebut,
      type: this.SessionForm.value.type,
      langue: this.SessionForm.value.langue,
      lieu: this.SessionForm.value.lieu || null,
      etat_session: this.SessionForm.value.etat_session
    };
    this.sessionService.saveSession(session).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(['/admin/list-session-cours-examen/session-cours/list-cours']);
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
  this.coursService.getAllVersionByRef(this.SessionForm.value.ref_formation).subscribe((resp: any) => {
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
  this.coursService.getAllDistinctCours().subscribe((data: any) => {
    this.testcours = data.result;
    this.cours = data.result;
  });
 }
 fetchAllCours(){
  this.coursService.getAllCours().subscribe((resp: any) => {
    this.allCours = resp.results;
  });
 }
 fetchCategorie(){
  this.categorieService.getAllCategories().subscribe((data: any) => {
    this.categories = data.results;
  });
 }
 changeType(e){
   if (e) {
    if (this.SessionForm.value.type === 'présentielle') {
      this.displayCountry = true;
      this.SessionForm.get('lieu').setValidators(Validators.required);
    } else {
     this.SessionForm.get('lieu').clearValidators();
     this.displayCountry = false;
     this.SessionForm.patchValue({
       lieu: '',
     });
    }
   }
 }
}
