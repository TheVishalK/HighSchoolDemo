import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from './models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  API_URL = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  constructor(private http: HttpClient) { }

  fetchSchools() : Observable<School[]> {
    return this.http.get<School[]>(this.API_URL);
  }
}
