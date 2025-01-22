import { createAction, props } from '@ngrx/store';
import { School } from '../../models/school';

// Action to load schools
export const loadSchools = createAction('[School] Load Schools');

// Action to load school details
export const loadSchoolDetails = createAction(
  '[School] Load School Details',
  props<{ schoolId: number }>()
);

// Action for successful loading of schools
export const loadSchoolsSuccess = createAction(
  '[School] Load Schools Success',
  props<{ schools: School[] }>()
);

// Action for successful loading of school details
export const loadSchoolDetailsSuccess = createAction(
  '[School] Load School Details Success',
  props<{ school: School }>()
);

// Action for error handling
export const loadSchoolsFailure = createAction(
  '[School] Load Schools Failure',
  props<{ error: string }>()
);