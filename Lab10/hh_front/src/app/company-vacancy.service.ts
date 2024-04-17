import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Company, Vacancy } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyVacancyService{

  BASE_URL: string = 'http://127.0.0.1:8000';
  // PHOTO_URL: string = ''
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies`);
  }
  // getCompaniesId(id: number): Observable<Company>{
  //   return this.client.get<Company>(`${this.BASE_URL}/companies/${id}`);
  // }
  // getVacancies(): Observable<Vacancy[]>{
  //   return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies`);
  // }
  // getVacanciesId(id: number): Observable<Vacancy>{
  //   return this.client.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}`);
  // }
  // getCompaniesVacancies(id: number): Observable<Company,Vacancy>{
  //   return this.client.get<Company,Vacancy>(`${this.BASE_URL}/companies/${id}/vacancies`);
  // }
   getTopTenVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/top-ten`);
  }

}
