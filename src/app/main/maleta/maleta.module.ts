import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ImagemService } from '../../compartilhado/service/imagem.service';
import { CadastrarMaletaComponent } from './cadastrar-maleta/cadastrar-maleta.component';
import { routing } from './maleta-routing.module';
import { MaletaService } from './service/maleta.service';

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
        MaletaService,
        ImagemService
    ]
})

export class MaletaModule {}