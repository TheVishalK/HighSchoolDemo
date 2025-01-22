import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess } from './item.actions';

// Define the state shape
export interface ItemState {
  items: string[];
}

// Set the initial state
export const initialState: ItemState = {
  items: []
};

// Create the reducer
export const itemReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
);
