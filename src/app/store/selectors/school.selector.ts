import { createSelector } from '@ngrx/store';
import { SchoolState } from '../reducers/school.reducer';

export const selectSchoolState = (state: any) => state.schools;

export const selectAllSchools = createSelector(
  selectSchoolState,
  (state: SchoolState) => state.schools
);

export const selectSelectedSchool = createSelector(
  selectSchoolState,
  (state: SchoolState) => state.selectedSchool
);