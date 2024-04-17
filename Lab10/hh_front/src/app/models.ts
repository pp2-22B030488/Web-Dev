// src/app/models.ts

export interface Company {
  companiesId: number;
  name: string;
  description: string;
  city: string;
  address: string;
  // Add other properties as needed
}

export interface Vacancy {
  vacanciesId: number;
  name: string;
  description: string;
  salary: number;
  company: string;
  // Add other properties as needed
}
