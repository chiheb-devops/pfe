import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor( private http: HttpClient) { }
  getAllTainingFeautureById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/list/training/feauture`, user);
  }
  getAllTainingPastById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/list/training/past`, user);
  }
  getAllTainingForCalendarById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/list/training/calendar`, user);
  }
  getNumberTraining(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/number/training`, user);
  }
  getNumberTrainingByCategory(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/number/training/category`, user);
  }
  getAllCategorieActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlCompteFor}/compteformateur//lists/category`);
  }
  getAllTainingById(user): Observable<any> {
    return this.http.post(`${environment.apiUrlCompteFor}/compteformateur/all/training`, user);
  }
}
