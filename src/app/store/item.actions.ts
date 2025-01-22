import { createAction, props } from '@ngrx/store';

// Define actions for loading, adding, and removing items
export const loadItems = createAction('[Item List] Load Items');
export const loadItemsSuccess = createAction(
  '[Item List] Load Items Success',
  props<{ items: string[] }>()
);
