import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private http: HttpClient) { }
  getNumberCategoryActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/categories/active`);
  }
  getNumberCourseActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/course/active`);
  }
  getNumberSessionActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/session/active`);
  }
  getNumberformateurActive(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/formateur/active`);
  }

  getNumberAllSessionByCategory(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/sessions/all/${cat}`);
  }
  /******* */
  getAllCategorieActiveForNumberSession(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/category/sessions`);
  }
   /******* for Utilisateurs */
   getDashboardUtilisateurs(): Observable<any> {
    return this.http.get(`${environment.apiUrlDashboard}/dashboard/number/forUtilisateurs`);
  }
}
