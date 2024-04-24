import { CategorieService } from 'src/app/admin/services/categorie.service';
import { DashboardService } from './../../services/dashboard.service';
import {  Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {  MultiDataSet , Label,  monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
numberCategory;
numberCourse: Observable<any>;
numberSession: Observable<any>;
numberFormateur: Observable<any>;
cours = [];
awscours;
SUMredhatallsession;
awsallsession = [];
SUMawsallsession;
categories = [];
traitementAllSession = [];
numberUtilisateurs;
test = [];
daraAsyn ;
roleAdmin;
verifDataReady = true;
tableReady = false;
fixDataReady = false;
 pieChartLabels: Label[] ;
 pieChartDat: MultiDataSet = [];
 pieChartType: ChartType = 'pie';
 pieChartLegend ;
 pieChartPlugins = [];
 forRoleAdmininstrateurDonnees = [];
 /** utilisateurs */
 pieChartLabelsUtilisateurs: Label[] ;
 pieChartDataUtilisateurs: MultiDataSet = [];
 pieChartTypeUtilisateurs: ChartType = 'pie';
 pieChartLegendUtilisateurs ;
 pieChartPluginsUtilisateurs = [];
 pieChartOptionsUtilisateurs: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
 /*** */
  /** role administrateur donnees  */
  pieChartLabelsDonnees: Label[] = [] ;
  pieChartDataDonnees: ChartDataSets[] = [];
  pieChartTypeDonnees: ChartType  = 'pie';
  pieChartLegendDonnees = true ;
  pieChartPluginDonnees = [];
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  pieChartOptionsDonnees: ChartOptions = {
   responsive: true,
   maintainAspectRatio: false,
 };
  /*** */
 pieChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
  constructor(private dashboardService: DashboardService,
              private authService: AuthService,  private categorieService: CategorieService) {

   }

  ngOnInit(): void {
    const decodedToken = this.authService.decodedJwt();
    this.roleAdmin = decodedToken.roleAdmin;
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getNumberCategory();
    this.getNumberCourseActive();
    this.getNumberSessionActive();
    this.getNumberformateurActive();
    this.getAllCategorieActiveForNumberSession();
    this.getDashboardUtilisateurs();
  }
  getNumberCategory(): void{
    this.dashboardService.getNumberCategoryActive().subscribe((data: any) => {
      this.numberCategory = data.results[0].numbercategory;
      this.verifDataReady = false;
      this.tableReady = true;
    });
   }
  getNumberCourseActive(): void {
   this.dashboardService.getNumberCourseActive().subscribe((data: any) => {
      this.numberCourse = data.results[0].numbercourse;
        });
   }
  getNumberSessionActive(): void {
    this.dashboardService.getNumberSessionActive().subscribe((data: any) => {
      this.numberSession = data.results[0].numbersession;
    });
   }
  getNumberformateurActive(): void{
    this.dashboardService.getNumberformateurActive().subscribe((data: any) => {
      this.numberFormateur = data.results[0].numberformateur;
    });
   }
   getAllCategorieActiveForNumberSession(): void{
    this.dashboardService.getAllCategorieActiveForNumberSession().subscribe((data: any) => {
      this.test = data.results;
      if (this.test ) {
          this.test .forEach(e => {
            this.pieChartLabels  = ['confirmée', 'en attente de confirmation', 'en cours', 'clôturée', 'reporter', 'annulée'];
            this.pieChartDat = [...this.pieChartDat, [e.numbersesionconfirm, e.numbersesionwaiting,
              e.numbersesionprogress, e.numbersesionclose,
              e.numbersesionreporter, e.numbersesioncanceled]];
            this.pieChartLegend = true;
          // administrateur donnees
            this.forRoleAdmininstrateurDonnees.push({nomCategorie: e.nomcategorie, nombreCoure: e.numbercours });
            this.pieChartLabelsDonnees = [...this.pieChartLabelsDonnees,  e.nomcategorie];
            this.pieChartDataDonnees = [...this.pieChartDataDonnees,  e.numbercours];
          });
          this.pieChartDat = [...this.pieChartDat];
          this.fixDataReady = true;
        }
    });
   }
   getDashboardUtilisateurs(): void{
    this.dashboardService.getDashboardUtilisateurs().subscribe((data: any) => {
      this.numberUtilisateurs = data.results[0];
      if (this.numberUtilisateurs) {
        this.pieChartLabelsUtilisateurs  = ['utilisateurs internes', 'utilisateurs externes', 'instructeurs', 'examinateurs'];
        this.pieChartDataUtilisateurs = [this.numberUtilisateurs.numberUtilisateursInternes,
          this.numberUtilisateurs.numberUtilisateursExternes, this.numberUtilisateurs.numberInstructeurs,
          this.numberUtilisateurs.numberExaminateurs];
        this.pieChartTypeUtilisateurs =  'pie';
        this.pieChartLegendUtilisateurs = true;
      }
    });
   }

}
