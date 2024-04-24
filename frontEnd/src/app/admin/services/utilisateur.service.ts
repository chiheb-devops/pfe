import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  getAllFormateurInterne(): Observable<any> {
    return this.http.get(`${environment.apiUrlUtilisateurs}/utilisateurs/list/interne`);
  }
  getAllFormateurExterne(): Observable<any> {
    return this.http.get(`${environment.apiUrlUtilisateurs}/utilisateurs/list/externe`);
  }
  saveUtilisateur(utilisateur): Observable<any> {
    return this.http.post(`${environment.apiUrlUtilisateurs}/utilisateurs/register`, utilisateur);
  }

  getUtilisateurById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlUtilisateurs}/utilisateurs/lists/${id}`);
  }
  editUtilisateur(id, utilisateur): Observable<any> {
    return this.http.put(`${environment.apiUrlUtilisateurs}/utilisateurs/edit/${id}`, utilisateur);
  }

   // start service upload
   getAllFormateurCertifById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlInsUpload}/formateur/upload/lists/certif/${id}`);
  }
     saveCertifUtilisateur(email, idajouter, file): Observable<any> {
    return this.http.post(`${environment.apiUrlInsUpload}/formateur/upload/add/certif/${email}/${idajouter}`, file);
  }
  saveCvUtilisateur(email, idajouter, file): Observable<any> {
    return this.http.post(`${environment.apiUrlInsUpload}/formateur/upload/add/cv/${email}/${idajouter}`, file);
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
   // end service upload
   getAllUser(): Observable<any> {
    return this.http.get(`${environment.apiUrlUtilisateurs}/utilisateurs/allusers/lists`);
  }
  changePassword(id, email): Observable<any>  {
    return this.http.put(`${environment.apiUrlUtilisateurs}/utilisateurs/editPassword/${id}/${email}`, null);
  }
  deleteUtilisateur(id, verif): Observable<any> {
    return this.http.put(`${environment.apiUrlUtilisateurs}/utilisateurs/delete/${id}/${verif}`, null);
  }

  deleteUtilisateurInstructeur(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlUtilisateurs}/utilisateurs/deleteUtilisateurInstructeur/${id}`);
    }
  deleteUtilisateurExaminateur(id): Observable<any> {
      return this.http.delete(`${environment.apiUrlUtilisateurs}/utilisateurs/deleteUtilisateurExaminateur/${id}`);
      }
}
