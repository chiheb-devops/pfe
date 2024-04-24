import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor( private http: HttpClient) { }
  getAllSession(): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/lists`);
  }
  getAllSessionActivePast(): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/list/active/past`);
  }
  getAllSessionNoAfected(): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/lists/nonaffecter`);
  }
  getAllSessionInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/lists/inactive`);
  }
  deleteSession(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlSession}/session/delete/${id}`);
  }
  saveSession(session): Observable<any> {
    return this.http.post(`${environment.apiUrlSession}/session/add` , session);
  }
  getSessionById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/lists/${id}`);
  }
  getSessionWithEmailById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/lists/email/${id}`);
  }
  envoyerEmailFormateur(email, ref, dated, datef, type, langue,
     lieu, address, etat, etatsession, namef, namecours, pays, contact, numeroc, mailc, nbrpartic): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/sendemail/${email}/${ref}/${dated}/${datef}/${type}/${langue}/${lieu}/${address}/${etat}/${etatsession}/${namef}/${namecours}/${pays}/${contact}/${numeroc}/${mailc}/${nbrpartic}`);
  }
  envoyerEmailFormateurTypeDistancielle(email, ref, dated, datef, type, langue,
     address, etat, etatsession, namef, namecours, contact, numeroc, mailc, nbrpartic): Observable<any> {
   return this.http.get(`${environment.apiUrlSession}/session/sendeemail/distancielle/${email}/${ref}/${dated}/${datef}/${type}/${langue}/${address}/${etat}/${etatsession}/${namef}/${namecours}/${contact}/${numeroc}/${mailc}/${nbrpartic}`);
 }
 emailFormateurChanger(email, namef, ref, designation, dated, datef): Observable<any> {
  return this.http.get(`${environment.apiUrlSession}/session/formateurchanger/email/${email}/${namef}/${ref}/${designation}/${dated}/${datef}`);
}
  updateSession(id, session): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/update/${id}`, session);
  }
  updateSessionForCalendar(session): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/edit/calendar`, session);
  }
  updateSessionAffected(id, name): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/affected/${id}/${name}`, null);
  }
  updateStatutSession(id, etatsession): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/statutsession/${id}/${etatsession}`, null);
  }
  updateSessionEmptyAffected(id): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/emptyaffected/${id}`, null);
  }
  deleteFormateurSession(id): Observable<any> {
    return this.http.put(`${environment.apiUrlSession}/session/deleteformateur/${id}`, null);
  }
  deleteSessionByCategory(cat): Observable<any> {
    return this.http.delete(`${environment.apiUrlSession}/session/deletesession/category/${cat}`);
  }
  deleteSessionIdCours(idcours): Observable<any> {
    return this.http.delete(`${environment.apiUrlSession}/session/deletesession/idcours/${idcours}`);
  }
  getAllSessionAffectedByIdCours(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSession}/session/allSessionByIdCours/${id}`);
  }
}
