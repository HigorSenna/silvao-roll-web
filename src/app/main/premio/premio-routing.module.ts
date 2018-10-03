import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CadastrarPremioComponent } from './cadastrar-premio/cadastrar-premio.componenet';

const routes: Routes = [
    {
        path: '',
        component: CadastrarPremioComponent,
        children: [
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);