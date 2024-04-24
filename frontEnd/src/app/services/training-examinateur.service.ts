import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrainingExaminateurService {

  constructor( private http: HttpClient) { }
  getAllTainingFeautureById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/training/feauture`, user);
  }
  getAllTainingPastById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/training/past`, user);
  }
  getAllTainingForCalendarById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/training/calendar`, user);
  }
  getNumberTraining(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/number/training`, user);
  }
  getNumberTrainingByCategory(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/number/training/category`, user);
  }
  getAllCategorieActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlCompteEx}/compteExaminateur/lists/category`);
  }
  getAllTainingById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/all/training`, user);
  }
  /**** start functions for examens */
  getNumberExamen(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/number/examen`, user);
  }
  getNumberExamenByCategory(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/number/examen/category`, user);
  }
  getAllExamenFeautureById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/examen/feauture`, user);
  }
  getAllExamenPastById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/examen/past`, user);
  }
  getAllExamenById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/all/examen`, user);
  }
  getAllExamenforcalendarById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteEx}/compteExaminateur/list/examen/calendar`, user);
  }
}
