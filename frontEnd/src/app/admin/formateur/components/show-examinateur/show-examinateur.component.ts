import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { ActivatedRoute, Router } from "@angular/router";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-examinateur',
  templateUrl: './show-examinateur.component.html',
  styleUrls: ['./show-examinateur.component.css']
})
export class ShowExaminateurComponent implements OnInit {
  id;
 Result ;
 allCertif;
 allCv;
  constructor(
    private toastr: ToastrService,
    private formateurService: FormateurService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.fetchFormateur(this.id);
    this.fetchCertifFormateur(this.id);
    this.fetchCvFormateur(this.id);
  }
   fetchFormateur(id){
    this.formateurService.getFormateurById(id).subscribe((resp: any) => {
      this.Result = resp.result[0];
    });
   }
   fetchCertifFormateur(id){
    this.formateurService.getAllFormateurCertifById(id).subscribe((resp: any) => {
      this.allCertif = resp.result;
    });
   }
   fetchCvFormateur(id){
    this.formateurService.getAllFormateurCvById(id).subscribe((resp: any) => {
      this.allCv = resp.result;
    });
   }
   downloadCertif(name, email){
    Swal.fire({
      title: 'Êtes vous sûr de vouloir télécharger cette certification ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formateurService.downloadCertifById(name, email).subscribe((resp: any) => {
          const file: Blob = new Blob([resp], {type: resp.type}); // replace the type by whatever type is your response

          const blob = window.URL.createObjectURL(file);
          const link = document.createElement('a');
          link.href = blob;
          link.download = name;
          link.click();

        });
      }
    });
   }
   downloadCv(name, email){
    Swal.fire({
      title: 'Êtes vous sûr de vouloir télécharger ce CV ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formateurService.downloadCvById(name, email).subscribe((resp: any) => {
          const fileCv: Blob = new Blob([resp], {type: resp.type}); // replace the type by whatever type is your response

          const blobCV = window.URL.createObjectURL(fileCv);
          const linkCV = document.createElement('a');
          linkCV.href = blobCV;
          linkCV.download = name;
          linkCV.click();
        });
      }
    });
  }
}
