import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CadastrarPremioComponent } from './cadastrar-premio/cadastrar-premio.componenet';
import { routing } from './premio-routing.module';
import { PremioService } from './service/premio.service';


@NgModule({
  declarations: [
    CadastrarPremioComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    routing
  ],
  providers: [
    PremioService
  ],
})
export class PremioModule {}