import { Maleta } from './../model/maleta';
import { MaletaService } from './../service/maleta.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-cadastrar-maleta',
    templateUrl: 'cadastrar-maleta.component.html'
})

export class CadastrarMaletaComponent implements OnInit {

    constructor(private maletaService: MaletaService) {}

    public quantidadeMaletas: number;

    public ngOnInit(): void {
        this.configurarUploadImagem();
    }

    public salvar(): void {
        const maletas: Maleta[] = [];
        for (let i = 0; i < this.quantidadeMaletas; i++) {
            maletas.push(new Maleta());
        }
        this.maletaService.salvar(maletas)
                          .subscribe(retorno => console.log('voltou'));
    }
    public configurarUploadImagem(): void {

        setTimeout(function () {
            $('#imagem-maleta').fileinput({
                showUpload: false,
                previewFileType: ' image ',
                showCaption: true,
                showPreview: false,
                browseLabel: 'Escolher imagem',
                showRemove: false,
                // browseClass: 'btn btn-texas',
                maxFileSize: 5000,
                language: 'pt-BR',
                allowedFileExtensions: ['jpg', 'png', 'jpeg']
            });
        }, 500);
    }
}