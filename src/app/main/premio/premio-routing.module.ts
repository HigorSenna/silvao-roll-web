import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CadastrarPremioComponent } from './cadastrar-premio/cadastrar-premio.componenet';

const routes: Routes = [
    {
        path: '',
        component: CadastrarPremioComponent,
        children: [
            // {
            //     path: 'cadastrar-maletas',
            //     loadChildren: './maleta/maleta.module#MaletaModule'
            // },
            // {
            //     path: 'sorteio',
            //     loadChildren: './sorteio/sorteio.module#SorteioModule'
            // },
            // {
            //     path: '',
            //     loadChildren: './dashboard/dashboard.module#DashboardModule'
            // },
            // {
            //     path: 'order',
            //     loadChildren: './order/order.module#OrderModule'
            // },
            // {
            //     path: 'client',
            //     loadChildren: './client/client.module#ClientModule'
            // },
            // {
            //     path: 'delivery-address',
            //     loadChildren: './delivery-address/delivery-address.module#DeliveryAddressModule'
            // }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);