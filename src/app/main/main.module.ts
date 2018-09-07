import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';

import { routing } from './main-routing.module';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        routing
    ],
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    providers: [
    ]
})
export class MainModule {}