import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, CompanyListComponent, VacancyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
