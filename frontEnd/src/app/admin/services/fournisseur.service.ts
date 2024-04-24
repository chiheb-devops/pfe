import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor( private http: HttpClient) { }
  getAllFournisseurWithoutAdress(): Observable<any> {
    return this.http.get(`${environment.apiUrlFourniss}/fournisseur/lists`);
  }
  getAllFournisseurInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlFourniss}/fournisseur/lists/inactive`);
  }
  deleteFournisseur(id): Observable<any> {
    return this.http.put(`${environment.apiUrlFourniss}/fournisseur/delete/${id}` , null);
  }
  getFournisseurById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlFourniss}/fournisseur/lists/four/${id}`);
  }
  saveFournisseur(fournisseur): Observable<any> {
    return this.http.post(`${environment.apiUrlFourniss}/fournisseur/add` , fournisseur);
  }
  updateFournisseur(id, fournisseur): Observable<any> {
    return this.http.put(`${environment.apiUrlFourniss}/fournisseur/update/${id}`, fournisseur);
  }
  ReturnFournisseurActive(id): Observable<any> {
    return this.http.put(`${environment.apiUrlFourniss}/fournisseur/returnactive/${id}`, null);
  }


  //pour effacer
  getAdressFournisseurById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlFourniss}/fournisseur/lists/four/${id}`);
  }
}
