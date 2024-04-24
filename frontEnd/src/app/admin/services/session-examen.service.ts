import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionExamenService {

  constructor(private http: HttpClient) { }
  getAllSession(): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/lists`);
  }
  getAllSessionActivePast(): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/list/active/past`);
  }
  getAllSessionNoAfected(): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/lists/nonaffecter`);
  }
  getAllSessionInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/lists/inactive`);
  }
  deleteSession(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlSessionExamen}/session-examen/delete/${id}`);
  }
  saveSession(session): Observable<any> {
    return this.http.post(`${environment.apiUrlSessionExamen}/session-examen/add` , session);
  }
  getSessionById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/lists/${id}`);
  }
  getSessionWithEmailById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/lists/email/${id}`);
  }
  envoyerEmailFormateur(email, ref, dated, heure, version_session, langue,
 etat, etatsession, namef, namecours, pays, nbrpartic): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/sendemail/${email}/${ref}/${dated}/${heure}/${langue}/${version_session}/${etat}/${etatsession}/${namef}/${namecours}/${pays}/${nbrpartic}`);
  }
 emailFormateurChanger(email, namef, ref, designation, dated): Observable<any> {
  return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/formateurchanger/email/${email}/${namef}/${ref}/${designation}/${dated}`);
}
  updateSession(id, session): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/update/${id}`, session);
  }
  updateSessionForCalendar(session): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/edit/calendar`, session);
  }
  updateSessionAffected(id, name): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/affected/${id}/${name}`, null);
  }
  updateStatutSession(id, etatsession): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/statutsession/${id}/${etatsession}`, null);
  }
  updateSessionEmptyAffected(id): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/emptyaffected/${id}`, null);
  }
  deleteFormateurSession(id): Observable<any> {
    return this.http.put(`${environment.apiUrlSessionExamen}/session-examen/deleteformateur/${id}`, null);
  }
  deleteSessionByCategory(cat): Observable<any> {
    return this.http.delete(`${environment.apiUrlSessionExamen}/session-examen/deletesession/category/${cat}`);
  }
  deleteSessionIdCours(idcours): Observable<any> {
    return this.http.delete(`${environment.apiUrlSessionExamen}/session-examen/deletesession/idcours/${idcours}`);
  }
  getAllSessionAffectedByIdCours(id): Observable<any> {
    return this.http.get(`${environment.apiUrlSessionExamen}/session-examen/allSessionByIdCours/${id}`);
  }
}
