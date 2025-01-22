import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { School } from '../models/school';
import { SchoolDetails } from '../models/school-detail';
import { SchoolService } from '../school.service';
import { SchoolDetailComponent } from '../school-detail/school-detail.component';

@Component({
  selector: 'app-school-list',
  standalone: true,
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
  imports: [SchoolDetailComponent],
  providers: []
})
export class SchoolListComponent {
  schools = signal<School[]>([]); // Using Angular signals for reactive data
  selectedSchool: School|SchoolDetails | null = null;
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private schoolService: SchoolService, private router: Router){
      this.fetchSchools();
  }

  fetchSchools() {
    this.loading.set(true);
    this.schoolService.fetchSchools().pipe(
      tap(() => this.loading.set(false)),  // Hide loading after the request completes
      catchError((error) => {
        this.error.set('Failed to fetch schools');
        this.loading.set(false);
        return of([]); // Fallback to empty array
      })
    ).subscribe((schools) => {
      this.schools.set(schools);
    });
  }

  onSelectSchool(schoolId: string) {
    this.loading.set(true);
    this.schoolService.fetchSchool(schoolId).pipe(
      tap(() => this.loading.set(false)),
      catchError((error) => {
        this.error.set('Failed to fetch school details');
        this.loading.set(false);
        return of({} as SchoolDetails);  // Fallback to empty object
      })
    ).subscribe((details) => {
      this.selectedSchool = details;
    });
  }

}
