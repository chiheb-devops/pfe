import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanningExamensService {
  constructor( private http: HttpClient) { }
  getAllPlanning(): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/lists`);
  }
  getAllPlanningActivePast(): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/active/past`);
  }
  getAllPlanningActiveForCalender(): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/calender`);
  }
  getAllPlanningInactive(): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/lists/inactive`);
  }
  getAllDistinctRefFormation(cat): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/ref/formation/${cat}`);
  }
  getAllDistinctVersionFormation(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/version/formation/${ref}`);
  }
  getAllDistinctTypeFormation(ref, version): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/type/formation/${ref}/${version}`);
  }
  getAllDistinctTypeFormationWithoutVersion(ref): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/type/forma/withoutversion/${ref}`);
  }
// start
getAllDistinctPaysFormationWithoutVersion(ref): Observable<any> {
  return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/type/forma/pays/withoutversion/${ref}`);
}
getAllDateFormationDistintDistienciellleWithoutVersion(ref, type): Observable<any>  {
  return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/date/forma/dist/withoutversion/${ref}/${type}`);
}
getAllDateFormationPresentielleWithoutVersion(ref, pays): Observable<any> {
  return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/date/forma/present/withoutversion/${ref}/${pays}`);
}
// end
  getAllDistinctPaysFormation(ref, version): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/pays/formation/${ref}/${version}`);
  }
  getAllDateFormationDistintDistienciellle(ref, version, type): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/date/formations/${ref}/${version}/${type}`);
  }
  getAllDateFormationPresentielle(ref, version, pays): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/date/formations/presentielle/${ref}/${version}/${pays}`);
  }
  getAllAffecteSessionFormateur(): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/formateur/affected`);
  }
  getAllDateFormation(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/list/date/formation/${id}`);
  }
  envoyerEmailFormateur(email, ref, dated, datef, stautf, nomf, addressf, nombrep, numero, contact): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/sendmail/${email}/${ref}/${dated}/${datef}/${stautf}/${nomf}/${addressf}/${nombrep}/${numero}/${contact}`);
  }
  deletePlanning(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlPanningExamen}/planning-examens/delete/${id}`);
  }
  deletePlanningAfterAffected(id): Observable<any> {
    return this.http.delete(`${environment.apiUrlPanningExamen}/planning-examens/deleteplanning/${id}`);
  }
  savePlanning(planning): Observable<any> {
    return this.http.post(`${environment.apiUrlPanningExamen}/planning-examens/add` , planning);
  }
  getPlanningById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/lists/${id}`);
  }
  getPlanningUpdatedById(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/lists/update/${id}`);
  }
  getPlanningUpdatedByIdSession(id): Observable<any> {
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/lists/update/idsession/${id}`);
  }
  updatePlanning(id, planning): Observable<any> {
    return this.http.put(`${environment.apiUrlPanningExamen}/planning-examens/update/${id}`, planning);
  }
  editPlanningForSession(planning): Observable<any> {
    return this.http.put(`${environment.apiUrlPanningExamen}/planning-examens/edit/planning/session`, planning);
  }
  editPlanningForDeleteProvider(id): Observable<any> {
    return this.http.put(`${environment.apiUrlPanningExamen}/planning-examens/editPlanningForDeleteProvider/${id}`, null);
  }
  getAllPlanningForCalendar(): Observable<any>{
    return this.http.get(`${environment.apiUrlPanningExamen}/planning-examens/getAllPlanningForCalendar`);
  }
}
