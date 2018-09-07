import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'cadastrar-maletas',
                loadChildren: './maleta/maleta.module#MaletaModule'
            }
            // {
            //     path: 'update-menu',
            //     loadChildren: './update-menu/update-menu.module#UpdateMenuModule'
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