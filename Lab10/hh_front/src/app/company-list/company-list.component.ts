import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Company} from "../models";
import {CompanyVacancyService} from "../company-vacancy.service";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies: Company[] = [];

  constructor(private comVService: CompanyVacancyService,
              private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies(){
        // this.albums = ALBUMS;
    this.comVService.getCompanies().subscribe((companies: Company[] = []) => {
    this.companies = companies;
    });
  }
}
