import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaletaService } from '../maleta/service/maleta.service';
import { routing } from './sorteio-routing.module';
import { SorteioComponent } from './sorteio.component';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        routing
      ],
    declarations: [
        SorteioComponent
    ],
    providers: [
        MaletaService
    ]
  })
export class SorteioModule {}