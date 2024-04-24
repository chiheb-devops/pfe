import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  constructor( private http: HttpClient) { }
  getAllPlanning(): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/lists`);
  }
  getAllPlanningActivePast(): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/active/past`);
  }
  getAllPlanningActiveForCalender(): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/calender`);
  }
  getAllPlanningInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/lists/inactive`);
  }
  getAllDistinctRefFormation(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/ref/formation/${cat}`);
  }
  getAllDistinctVersionFormation(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/version/formation/${ref}`);
  }
  getAllDistinctTypeFormation(ref, version): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/type/formation/${ref}/${version}`);
  }
  getAllDistinctTypeFormationWithoutVersion(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/type/forma/withoutversion/${ref}`);
  }
// start
getAllDistinctPaysFormationWithoutVersion(ref, type): Observable<any> {
  return this.http.get(`${environment.apiUrlPlanning}/planning/list/type/forma/pays/withoutversion/${ref}/${type}`);
}
getAllDateFormationDistintDistienciellleWithoutVersion(ref, type): Observable<any>  {
  return this.http.get(`${environment.apiUrlPlanning}/planning/list/date/forma/dist/withoutversion/${ref}/${type}`);
}
getAllDateFormationPresentielleWithoutVersion(ref, type, pays): Observable<any> {
  return this.http.get(`${environment.apiUrlPlanning}/planning/list/date/forma/present/withoutversion/${ref}/${type}/${pays}`);
}
// end
  getAllDistinctPaysFormation(ref, version, type): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/pays/formation/${ref}/${version}/${type}`);
  }
  getAllDateFormationDistintDistienciellle(ref, version, type): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/date/formations/${ref}/${version}/${type}`);
  }
  getAllDateFormationPresentielle(ref, version, type, pays): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/date/formations/presentielle/${ref}/${version}/${type}/${pays}`);
  }
  getAllAffecteSessionFormateur(): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/formateur/affected`);
  }
  getAllDateFormation(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/list/date/formation/${id}`);
  }
  envoyerEmailFormateur(email, ref, dated, datef, stautf, nomf, addressf, nombrep, numero, contact): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/sendmail/${email}/${ref}/${dated}/${datef}/${stautf}/${nomf}/${addressf}/${nombrep}/${numero}/${contact}`);
  }
  deletePlanning(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlPlanning}/planning/delete/${id}`);
  }
  deletePlanningAfterAffected(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlPlanning}/planning/deleteplanning/${id}`);
  }
  savePlanning(planning): Observable<any> {
    return this.http.post(`${environment.apiUrlPlanning}/planning/add` , planning);
  }
  getPlanningById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/lists/${id}`);
  }
  getPlanningUpdatedById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/lists/update/${id}`);
  }
  getPlanningUpdatedByIdSession(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPlanning}/planning/lists/update/idsession/${id}`);
  }
  updatePlanning(id, planning): Observable<any> {
    return this.http.put(`${environment.apiUrlPlanning}/planning/update/${id}`, planning);
  }
  editPlanningForSession(planning): Observable<any> {
    return this.http.put(`${environment.apiUrlPlanning}/planning/edit/planning/session`, planning);
  }
  editPlanningForDeleteProvider(id): Observable<any> {
    return this.http.put(`${environment.apiUrlPlanning}/planning/editPlanningForDeleteProvider/${id}`, null);
  }
  getAllPlanningForCalendar(): Observable<any>{
    return this.http.get(`${environment.apiUrlPlanning}/planning/getAllPlanningForCalendar`);
  }
}
