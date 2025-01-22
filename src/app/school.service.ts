import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { School } from './models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  API_URL = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  constructor(private http: HttpClient) { }

  fetchSchools() : Observable<School[]> {
    return this.http.get<School[]>(this.API_URL).pipe(
      delay(2000), // Add a delay of 2 seconds
      catchError((error) => {
        console.error('Error fetching schools:', error);
        return of([]);  // Return an empty array in case of an error
      })
    );
  }

  fetchSchool(dbn:any) : Observable<School> {
    return this.http.get<School[]>(this.API_URL).pipe(
      delay(1000),
      map((data: School[]) => {
        // Apply filtering logic to get the first match
        const foundSchool = data.find((item: School) => item.dbn === dbn);
        
        if (foundSchool) {
          return foundSchool; // Return the found school
        } else {
          throw new Error('School not found'); // or return null if you prefer
        }
      })
    );
  }
}
