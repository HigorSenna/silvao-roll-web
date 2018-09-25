import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './premio-routing.module';
import { CadastrarPremioComponent } from './cadastrar-premio/cadastrar-premio.componenet';


@NgModule({
  declarations: [
    CadastrarPremioComponent
  ],
  imports: [
    routing
  ],
  providers: [
  ],
})
export class PremioModule {}