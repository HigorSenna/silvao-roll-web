import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CadastrarMaletaComponent } from './cadastrar-maleta/cadastrar-maleta.component';
import { routing } from './maleta-routing.module';

@NgModule({
    declarations: [
        CadastrarMaletaComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        routing
    ],
    exports: [],
    providers: [
    ]
})

export class MaletaModule {}