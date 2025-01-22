import { createReducer, on } from '@ngrx/store';
import { loadSchoolsSuccess, loadSchoolDetailsSuccess, loadSchoolsFailure } from '../actions/school.actions';
import { School } from '../../models/school';


// Define initial state
export interface SchoolState {
  schools: School[];
  selectedSchool: School | null;
  error: string | null;
}

export const initialState: SchoolState = {
  schools: [],
  selectedSchool: null,
  error: null
};

export const schoolReducer = createReducer(
  initialState,
  on(loadSchoolsSuccess, (state, { schools }) => ({ ...state, schools })),
  on(loadSchoolDetailsSuccess, (state, { school }) => ({ ...state, selectedSchool: school })),
  on(loadSchoolsFailure, (state, { error }) => ({ ...state, error }))
);
