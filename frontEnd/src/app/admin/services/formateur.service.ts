import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(
    private http: HttpClient
  ) { }
  getAllFormateur(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/lists`);
  }
  getAllUser(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/allusers/lists`);
  }
  getAllExaminateur(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/examinateur/lists`);
  }
  getAllExaminateurForPlanning(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/examinateur/planning/lists`);
  }
  getAllFormateurInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/lists/inactive`);
  }
  getAllExaminateurInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/examinateur/lists/inactive`);
  }
  saveFormateur(formateur): Observable<any> {
    return this.http.post(`${environment.apiUrlIns}/utilisateur/register`, formateur);
  }
  deleteFormateur(id): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/delete/${id}`, null);
  }
  formateurReturnActive(id): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/returnactive/${id}`, null);
  }
  ExaminateurReturnActive(id): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/examinateur/returnactive/${id}`, null);
  }
  deleteExaminateur(id): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/examinateur/deleteexaminateur/${id}`, null);
  }
  getFormateurById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/list/${id}`);
  }
  getAllFormateurCertifById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlInsUpload}/formateur/upload/lists/certif/${id}`);
  }
  getAllFormateurCvById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlInsUpload}/formateur/upload/lists/cv/${id}`);
  }
  downloadCertifById(name, email): Observable<any> {
    return this.http.get(`${environment.apiUrlInsUpload}/formateur/upload/certif/download/${name}/${email}` , {responseType: 'blob' as 'json'});
   }
  downloadCvById(name, email): Observable<any> {
    return this.http.get(`${environment.apiUrlInsUpload}/formateur/upload/cv/download/${name}/${email}`, {responseType: 'blob' as 'json'});
  }
  deleteCertifById(name, email): Observable<any> {
    return this.http.delete(`${environment.apiUrlInsUpload}/formateur/upload/certif/delete/${name}/${email}`);
   }
   deleteCvById(name, email): Observable<any> {
    return this.http.delete(`${environment.apiUrlInsUpload}/formateur/upload/cv/delete/${name}/${email}`);
   }
  editFormateur(id,formateur): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/edit/${id}`, formateur);
  }
  changePassword(id, email): Observable<any>  {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/editPassword/${id}/${email}`, null);
  }
  saveCertifFormateur(email, idajouter, file) {
    return this.http.post(`${environment.apiUrlInsUpload}/formateur/upload/add/certif/${email}/${idajouter}`, file);
  }
  saveCvFormateur(email, idajouter, file) {
    return this.http.post(`${environment.apiUrlInsUpload}/formateur/upload/add/cv/${email}/${idajouter}`, file);
  }
  // user with role
  getAllUserWithRole(): Observable<any> {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/role/lists`);
  }
  postUserWithRole(user): Observable<any> {
    return this.http.post(`${environment.apiUrlIns}/utilisateur/role/register`, user);
  }
}
