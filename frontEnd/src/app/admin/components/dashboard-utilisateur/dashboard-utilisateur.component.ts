import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {  MultiDataSet , Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard-utilisateur',
  templateUrl: './dashboard-utilisateur.component.html',
  styleUrls: ['./dashboard-utilisateur.component.css']
})
export class DashboardUtilisateurComponent implements OnInit {
  roleAdmin;
  numberUtilisateurs;
  pieChartLabelsUtilisateurs: Label[] ;
  pieChartDataUtilisateurs: MultiDataSet = [];
  pieChartTypeUtilisateurs: ChartType = 'pie';
  pieChartLegendUtilisateurs ;
  pieChartPluginsUtilisateurs = [];
  pieChartOptionsUtilisateurs: ChartOptions = {
   responsive: true,
   maintainAspectRatio: false
  };
  constructor(private authService: AuthService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const decodedToken = this.authService.decodedJwt();
    this.roleAdmin = decodedToken.roleAdmin;
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getDashboardUtilisateurs();
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
