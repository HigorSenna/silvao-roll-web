import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Premio } from './../model/premio';
import { PremioService } from '../service/premio.service';

@Component({
    selector: 'app-cadastrar-premio-componenet',
    templateUrl: './cadastrar-premio.component.html'
})
export class CadastrarPremioComponent implements OnInit {

    public premio: Premio = new Premio();

    public premios: Premio[] = [];

    constructor(private premioService: PremioService) {}

    public ngOnInit(): void {
        this.buscar();
    }
    public salvar(): void {
        if (this.premio && this.premio.descricao) {
            this.premioService.salvar(this.premio)
                          .subscribe(sucesso => this.onSucesso(),
                                     erro => console.log(erro));
        }
    }

    public onSucesso(): void {
        this.premio = new Premio();
        this.buscar();
    }

    public excluir(id: number): void {
        this.premioService.excluir(id)
                          .subscribe(sucesso => this.onSucesso(),
                                     erro => console.log(erro));
    }

    public vincular(): void {
        this.premioService.vincular(this.premios)
                          .subscribe(sucesso => this.onSucesso(),
                                     erro => console.log(erro));
    }

    public buscar(): void {
        this.premioService.buscar().subscribe(premios => this.premios = premios,
                                              erro => console.log(erro));
    }
}