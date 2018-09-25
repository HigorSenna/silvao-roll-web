import { Component, OnInit } from '@angular/core';
import { Maleta } from '../maleta/model/maleta';
import { MaletaService } from '../maleta/service/maleta.service';

declare var $: any;

@Component({
    selector: 'app-sorteio',
    templateUrl: 'sorteio.component.html'
})
export class SorteioComponent implements OnInit {
    constructor(private maletaService: MaletaService) {}

    public maletas: Maleta[] = [];

    isClicked = false;
    public ngOnInit(): void {
        this.buscarMaletas();
    }

    private buscarMaletas(): void {
        this.maletaService.buscar()
                          .subscribe(
                            maletas => this.montarImagemMaleta(maletas),
                            erro => console.log(erro)
                        );
    }

    private montarImagemMaleta(maletas: Maleta[]): void {
        maletas.forEach(maleta => {
            if (maleta.arquivo) {
                maleta.arquivoExibir = 'data:image/jpeg;base64,' + maleta.arquivo;
            }
          });
          this.maletas = maletas;
    }
}
