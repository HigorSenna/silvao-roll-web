import { MainComponent } from './main/main.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './main/main.module#MainModule' },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
