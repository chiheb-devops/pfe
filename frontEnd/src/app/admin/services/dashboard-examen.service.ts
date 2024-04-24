import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardExamenService {

  constructor( private http: HttpClient) { }
  getNumberCategoryActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/categories/active`);
  }
  getNumberCourseActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/course/active`);
  }
  getNumberSessionActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/session/active`);
  }
  getNumberformateurActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/formateur/active`);
  }

  getNumberAllSessionByCategory(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/sessions/all/${cat}`);
  }
  /******* */
  getAllCategorieActiveForNumberSession(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/category/sessions`);
  }
   /******* for Utilisateurs */
   getDashboardUtilisateurs(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboardExamen}/dashboard-examens/number/forUtilisateurs`);
  }
}
