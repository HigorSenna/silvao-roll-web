import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CadastrarMaletaComponent } from './cadastrar-maleta/cadastrar-maleta.component';

const routes: Routes = [
    {path: '', component:  CadastrarMaletaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);