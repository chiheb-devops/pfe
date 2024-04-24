import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private http: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrlCat}/categories/lists`);
  }
  getAllCategoriesInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlCat}/categories/lists/inactive`);
  }
  deleteCategorie(id): Observable<any> {
    return this.http.put(`${environment.apiUrlCat}/categories/delete/${id}` , null);
  }
  saveCategorie(categorie): Observable<any> {
    return this.http.post(`${environment.apiUrlCat}/categories/add` ,categorie);
  }
  getCategorieById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlCat}/categories/lists/${id}`);
  }
  updateCategorie(id, categorie): Observable<any> {
    return this.http.put(`${environment.apiUrlCat}/categories/update/${id}`, categorie);
  }
  CategorieReturnActive(id): Observable<any> {
    return this.http.put(`${environment.apiUrlCat}/categories/retunnactive/${id}`, null);
  }
}
