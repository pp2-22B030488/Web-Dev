import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyListIdComponent} from "./company-list-id/company-list-id.component";
import {CompanyVacancyComponent} from "./company-vacancy/company-vacancy.component";
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {VacancyListIdComponent} from "./vacancy-list-id/vacancy-list-id.component";
import {TopTenVacanciesComponent} from "./top-ten-vacancies/top-ten-vacancies.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'companies', component: CompanyListComponent, title: 'Companies'},
    {path: 'companies/:companiesId', component: CompanyListIdComponent, title: 'CompaniesId'},
    {path: 'vacancies/companies', component: CompanyVacancyComponent, title: 'CompanyVacancy'},
    {path: 'vacancies', component: VacancyListComponent, title: 'Vacancies'},
    {path: 'vacancies/:vacanciesId', component: VacancyListIdComponent, title: 'VacanciesId'},
    {path: 'vacancies/top_ten', component: TopTenVacanciesComponent, title: 'TopTenVacancies'},
    {path: '**', component: NotFoundComponent, title: 'Not Found'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }