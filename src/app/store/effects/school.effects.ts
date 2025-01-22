import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadSchools, loadSchoolsSuccess, loadSchoolsFailure, loadSchoolDetails, loadSchoolDetailsSuccess } from '../actions/school.actions';
import { SchoolService } from '../../school.service';

@Injectable()
export class SchoolEffects {

  constructor(
    private actions$: Actions,
    private schoolService: SchoolService
  ) {}

  loadSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSchools),
      mergeMap(() =>
        this.schoolService.fetchSchools().pipe(
          map(schools => loadSchoolsSuccess({ schools })),
          catchError((error) => of(loadSchoolsFailure({ error: error.message })))
        )
      )
    )
  );

  loadSchoolDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSchoolDetails),
      mergeMap(({ schoolId }) =>
        this.schoolService.fetchSchool(schoolId).pipe(
          map(school => loadSchoolDetailsSuccess({ school })),
          catchError((error) => of(loadSchoolsFailure({ error: error.message })))
        )
      )
    )
  );
}