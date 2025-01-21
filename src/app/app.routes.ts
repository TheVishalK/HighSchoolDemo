import { Routes } from '@angular/router';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';

export const routes: Routes = [
    {
      path: '',
      component: SchoolListComponent,
    },
    {
      path: 'detail/:id',
      component: SchoolDetailComponent,
    },
    {
      path: '**',
      redirectTo: '',
    },
  ];
