import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor( private http: HttpClient) { }
  getAllCours(): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/lists`);
  }
  getAllDistinctCours(): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/list/distinct`);
  }
  getAllRefByCategories(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/lists/bycategories/${cat}`);
  }
  getAllCoursInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/lists/inactive`);
  }
  deleteCours(id): Observable<any> {
    return this.http.put(`${environment.apiUrlExamen}/examen/delete/${id}` , null);
  }
  saveCours(cours): Observable<any> {
    return this.http.post(`${environment.apiUrlExamen}/examen/add` , cours);
  }
  getAllVersionByRef(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/list/version/${ref}`);
  }
  getCoursById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlExamen}/examen/lists/${id}`);
  }
  updateCours(id, cours): Observable<any> {
    return this.http.put(`${environment.apiUrlExamen}/examen/update/${id}`, cours);
  }
  CoursReturnActive(cat): Observable<any> {
    return this.http.put(`${environment.apiUrlExamen}/examen/retunactive/${cat}`, null);
  }
  CoursReturnInactive(cat): Observable<any> {
    return this.http.put(`${environment.apiUrlExamen}/examen/retuninactive/${cat}`, null);
  }
  ReturnCoursActiveById(id): Observable<any> {
    return this.http.put(`${environment.apiUrlExamen}/examen/retunactivebyid/${id}`, null);
  }
}
