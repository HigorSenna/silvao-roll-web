import { Component, OnInit } from '@angular/core';
import { Maleta } from '../maleta/model/maleta';
import { MaletaService } from '../maleta/service/maleta.service';
import { PremioService } from '../premio/service/premio.service';
import { Premio } from './../premio/model/premio';

declare var $: any;

@Component({
    selector: 'app-sorteio',
    templateUrl: 'sorteio.component.html'
})
export class SorteioComponent implements OnInit {
    constructor(private maletaService: MaletaService,
                private premioService: PremioService) {}

    public maletas: Maleta[] = [];

    public showLoading = false;

    public premioDaMaleta: Premio = new Premio();

    public idMaletaExcluir: number = null;
    public ngOnInit(): void {
        this.buscarMaletas();
    }

    public abrirMaleta(idMaleta: number) {
        this.showLoading = true;
        this.premioService.buscarPorMaleta(idMaleta)
                          .subscribe(premio => this.tratarSucessoBuscaPremio(premio),
                                     erro => {this.showLoading = false; console.log(erro); });
    }

    public abrirModalConfirmacaoExclusaoMaleta(idMaletaExcluir: number) {
        this.idMaletaExcluir = idMaletaExcluir;
        $('#modalConfirmacaoExclusaoMaleta').modal('show');
    }

    public excluirMaleta(): void {
        this.maletaService.excluir(this.idMaletaExcluir)
                          .subscribe(sucesso => {this.buscarMaletas(); $('#modalConfirmacaoExclusaoMaleta').modal('hide'); },
                                     erro => {console.log(erro), $('#modalConfirmacaoExclusaoMaleta').modal('hide'); });
    }

    private tratarSucessoBuscaPremio(premio: Premio): void {
        if (!premio || !premio.descricao) {
            this.premioDaMaleta.descricao = 'NADA';
        } else {
            this.premioDaMaleta = premio;
        }
        this.showLoading = false;
        $('#modalPremio').modal('show');
    }

    private buscarMaletas(): void {
        this.showLoading = true;
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
          this.showLoading = false;
    }
}
