import { DashboardExamenService } from './../../services/dashboard-examen.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {  MultiDataSet , Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Observable, Subscription } from 'rxjs';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard-examen',
  templateUrl: './dashboard-examen.component.html',
  styleUrls: ['./dashboard-examen.component.css']
})
export class DashboardExamenComponent implements OnInit, OnDestroy {
  numberCategory;
  numberCourse;
  numberSession;
  numberFormateur;
  cours = [];
  awscours;
  SUMredhatallsession;
  awsallsession = [];
  SUMawsallsession;
  categories = [];
  traitementAllSession = [];
  test = [];
  daraAsyn ;
  verifDataReady = true;
  tableReady = false;
  fixDataReady = false;
  roleAdmin;
  forRoleAdmininstrateurDonnees = [];
  // subscription
  subscriptionGetNumberCategory: Subscription;
  subscriptionGetNumberCourseActive: Subscription;
  subscriptionGetNumberSessionActive: Subscription;
  subscriptionNumberformateurActive: Subscription;
  subscriptionfetchCategorie: Subscription;
  subscriptionNumberC: Subscription;

   pieChartLabels: Label[] ;
   pieChartDat: MultiDataSet = [];
   pieChartType: ChartType ;
   pieChartLegend ;
   pieChartPlugins = [];
   pieChartOptions: ChartOptions = {
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
    constructor(private dashboardExamenService: DashboardExamenService,
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
    }
    getNumberCategory(): void {
     this.subscriptionGetNumberCategory =  this.dashboardExamenService.getNumberCategoryActive().subscribe((data: any) => {
        this.numberCategory = data.results[0].numbercategory;
        this.verifDataReady = false;
        this.tableReady = true;
      });
     }
    getNumberCourseActive(): void  {
      this.subscriptionGetNumberCourseActive = this.dashboardExamenService.getNumberCourseActive().subscribe((data: any) => {
        this.numberCourse = data.results[0].numbercourse;
      });
     }
    getNumberSessionActive(): void  {
     this.subscriptionGetNumberSessionActive = this.dashboardExamenService.getNumberSessionActive().subscribe((data: any) => {
        this.numberSession = data.results[0].numbersession;
      });
     }
    getNumberformateurActive(): void {
     this.subscriptionNumberformateurActive = this.dashboardExamenService.getNumberformateurActive().subscribe((data: any) => {
        this.numberFormateur = data.results[0].numberformateur;
      });
     }
     getAllCategorieActiveForNumberSession(): void{
      this.dashboardExamenService.getAllCategorieActiveForNumberSession().subscribe((data: any) => {
        this.test = data.results;
        if (this.test ) {
            this.test .forEach(e => {
              this.pieChartLabels  = ['confirmée', 'en attente de confirmation', 'en cours', 'clôturée', 'reporter', 'annulée'];
              this.pieChartDat = [...this.pieChartDat, [e.numbersesionconfirm, e.numbersesionwaiting,
                e.numbersesionprogress, e.numbersesionclose,
                e.numbersesionreporter, e.numbersesioncanceled]];
              this.pieChartType =  'pie';
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
      ngOnDestroy(): void  {
        this.subscriptionGetNumberCategory.unsubscribe();
        this.subscriptionGetNumberCourseActive.unsubscribe();
        this.subscriptionGetNumberSessionActive.unsubscribe();
        this.subscriptionNumberformateurActive.unsubscribe();
    }
}
