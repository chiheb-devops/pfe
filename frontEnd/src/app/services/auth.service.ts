import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private changeModal = new BehaviorSubject(false);
  sharedchangeModal = this.changeModal.asObservable();
  private changeModalUtilisateur = new BehaviorSubject(false);
  sharedchangeModalUtilisateur = this.changeModalUtilisateur.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  auth(user): Observable<any> {
    return this.http.post(`${environment.apiUrlAuth}/user/withouttoken/auth`, user);
  }
  saveUser(token, user) {
    localStorage.setItem('Authtoken', token);
    localStorage.setItem('User', JSON.stringify(user));
  }
  isLogedin(): boolean {
    if (localStorage.getItem('Authtoken') && JSON.parse(localStorage.getItem('User')).role === 'Instructeur') {
      return true;
    } else {
      return false;
    }
  }
  admin(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') && dJwt.roleAdmin !== 'Pas de rôle') {
      return true;
    } else {
      return false;
    }
  }
  formateurGuard(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') &&  (dJwt.role  === 'Instructeur' && dJwt.examinateur !== 'oui') ) {
      return true;
    } else {
      return false;
    }
  }
  examinateurGuard(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') &&  (dJwt.role  === 'Instructeur' && dJwt.examinateur === 'oui') ) {
      return true;
    } else {
      return false;
    }
  }
  utilisateurGuard(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') &&  (dJwt.role  === 'Utilisateur' || dJwt.role === 'Consultant'
    || dJwt.role === 'Freelance') ) {
      return true;
    } else {
      return false;
    }
  }
  adminGlobal(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') &&  dJwt.roleAdmin === 'Administrateur global' ) {
      return true;
    } else {
      return false;
    }
  }
  adminDonnees(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') && ( dJwt.roleAdmin === 'Administrateur global' || dJwt.roleAdmin === 'Administrateur des sessions de formations/examens' || dJwt.roleAdmin === 'Administrateur des données d\'information' || dJwt.roleAdmin === 'Administrateur d\'allocation' )) {
      return true;
    } else {
      return false;
    }
  }
  adminUtilisateurs(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') && ( dJwt.roleAdmin === 'Administrateur global' || dJwt.roleAdmin === 'Administrateur d\'utilisateurs' )) {
      return true;
    } else {
      return false;
    }
  }
  adminSessions(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') && ( dJwt.roleAdmin === 'Administrateur global' || dJwt.roleAdmin === 'Administrateur des sessions de formations/examens' || dJwt.roleAdmin === 'Administrateur d\'allocation' )) {
      return true;
    } else {
      return false;
    }
  }
  adminAllocations(): boolean {
    const dJwt = this.decodedJwt();
    if (localStorage.getItem('Authtoken') && ( dJwt.roleAdmin === 'Administrateur global' || dJwt.roleAdmin === 'Administrateur d\'allocation' )) {
      return true;
    } else {
      return false;
    }
  }
  notAdminAllocations(): boolean {
    const dJwt = this.decodedJwt();
    if ( dJwt.roleAdmin !== 'Administrateur d\'allocation' ) {
      return true;
    } else {
      return false;
    }
  }
  notAdminSessions(): boolean {
    const dJwt = this.decodedJwt();
    if ( dJwt.roleAdmin !== 'Administrateur des sessions de formations/examens' && dJwt.roleAdmin !== 'Administrateur d\'allocation' ) {
      return true;
    } else {
      return false;
    }
  }
  Selfadmin(): boolean {
    if (localStorage.getItem('Authtoken') && JSON.parse(localStorage.getItem('User')).role !== 'admin' ) {
      return true;
    } else {
      return false;
    }
  }
  returnToken(){
    return localStorage.getItem('Authtoken');
  }
  postVerifAuthoriazation(user){
    return this.http.post(`${environment.apiUrlIns}/utilisateur/verif/authoriazation`, user);
  }
  Logout() {
    localStorage.removeItem('Authtoken');
    localStorage.removeItem('User');
  }
  forgetPassword(email): Observable<any> {
    return this.http.get(`${environment.apiUrlAuth}/user/withouttoken/forget/${email}`);
  }
  formateurChangerVotrePassword(user): Observable<any> {
    return this.http.put(`${environment.apiUrlAuth}/user/withouttoken/changervotrepassword`, user);
  }
  formateurChangerPassword(user): Observable<any> {
    return this.http.put(`${environment.apiUrlIns}/utilisateur/changerpassword`, user);
  }
  compteFormateurChangerPassword(user): Observable<any> {
    return this.http.put(`${environment.apiUrlCompteFor}/compteformateur/changerpassword`, user);
  }
  getcurrentuser(): Observable<any> {
    return of(JSON.parse(localStorage.getItem('User')));
  }
  listUser() {
    return this.http.get(`${environment.apiUrlIns}/utilisateur/list`);
  }
  changeForModal(change: boolean){
    this.changeModal.next(change);
  }
  changeForModalUtilisateur(change: boolean): void{
    this.changeModalUtilisateur.next(change);
  }
  decodedJwt(): any {
    const token = this.returnToken();
    if (token) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken.results[0];
    } else {
      return null;
    }
  }
}
