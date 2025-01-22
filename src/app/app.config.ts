import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SchoolService } from './school.service';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './store/item.reducer';

export const appConfig: ApplicationConfig = {
  //imports:[StoreModule.forRoot({ itemState: itemReducer })],
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(), 
    provideRouter(routes), 
    SchoolService]
};
