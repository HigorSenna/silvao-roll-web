import { Component, OnInit } from '@angular/core';
import { ImagemService } from '../../../compartilhado/service/imagem.service';

import { Maleta } from './../model/maleta';
import { MaletaService } from './../service/maleta.service';

declare var $: any;

@Component({
    selector: 'app-cadastrar-maleta',
    templateUrl: 'cadastrar-maleta.component.html'
})

export class CadastrarMaletaComponent implements OnInit {

    constructor(private maletaService: MaletaService,
                private imagemService: ImagemService) {}

    public quantidadeMaletas: number;
    private image: File;

    public ngOnInit(): void {
        this.configurarUploadImagem();
    }

    public getImage(event: EventTarget): void {
        const eventObject: MSInputMethodContext = <MSInputMethodContext>event;
        const target: HTMLInputElement = <HTMLInputElement>eventObject.target;
        this.image = null;
        this.image = target.files[0];
    }

    public salvar(): void {
        const maletas: Maleta[] = [];
        for (let i = 0; i < this.quantidadeMaletas; i++) {
            const maleta = new Maleta();
            maleta.nomeImagem = this.image.name;
            maletas.push(maleta);
        }
        this.maletaService.salvar(maletas)
                          .subscribe(sucesso => this.uploadImage());
    }

    private uploadImage(): void {
        this.imagemService.save(this.image).subscribe(
            success => {
                console.log('uploadImagemConcluido');
            }, error => {
                console.log('erro upload');
            });
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