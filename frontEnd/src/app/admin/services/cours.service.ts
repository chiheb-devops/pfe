import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor( private http: HttpClient) { }
  getAllCours(): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/lists`);
  }
  getAllDistinctCours(): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/list/distinct`);
  }
  getAllRefByCategories(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/lists/bycategories/${cat}`);
  }
  getAllCoursInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/lists/inactive`);
  }
  deleteCours(id): Observable<any> {
    return this.http.put(`${environment.apiUrlCourse}/cours/delete/${id}` , null);
  }
  saveCours(cours): Observable<any> {
    return this.http.post(`${environment.apiUrlCourse}/cours/add` , cours);
  }
  getAllVersionByRef(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/list/version/${ref}`);
  }
  getCoursById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlCourse}/cours/lists/${id}`);
  }
  updateCours(id, cours): Observable<any> {
    return this.http.put(`${environment.apiUrlCourse}/cours/update/${id}`, cours);
  }
  CoursReturnActive(cat): Observable<any> {
    return this.http.put(`${environment.apiUrlCourse}/cours/retunactive/${cat}`, null);
  }
  CoursReturnInactive(cat): Observable<any> {
    return this.http.put(`${environment.apiUrlCourse}/cours/retuninactive/${cat}`, null);
  }
  ReturnCoursActiveById(id): Observable<any> {
    return this.http.put(`${environment.apiUrlCourse}/cours/retunactivebyid/${id}`, null);
  }
}
