import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SorteioComponent } from './sorteio.component';

const routes: Routes = [
    {
        path: '',
        component: SorteioComponent,
        // children: [
        //     {
        //         path: 'cadastrar-maletas',
        //         loadChildren: './maleta/maleta.module#MaletaModule'
        //     }
        // ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);