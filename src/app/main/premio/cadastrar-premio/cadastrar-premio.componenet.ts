import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PremioService } from '../service/premio.service';
import { Premio } from './../model/premio';

@Component({
    selector: 'app-cadastrar-premio-componenet',
    templateUrl: './cadastrar-premio.component.html'
})
export class CadastrarPremioComponent implements OnInit {

    public premio: Premio = new Premio();

    public premios: Premio[] = [];

    constructor(private premioService: PremioService,
                private toastService: ToastrService) {}

    public ngOnInit(): void {
        this.buscar();
    }
    public salvar(): void {
        if (this.premio && this.premio.descricao) {
            this.premioService.salvar(this.premio)
                          .subscribe(sucesso => this.onSucesso('Prêmio cadastrado com sucesso!!'),
                                     erro => console.log(erro));
        }
    }

    public onSucesso(message: string): void {
        this.toastService.success('Sucesso!', message);
        this.premio = new Premio();
        this.buscar();
    }

    public excluir(id: number): void {
        this.premioService.excluir(id)
                          .subscribe(sucesso => this.onSucesso('Prêmio excluído com sucesso!!'),
                                     erro => console.log(erro));
    }

    public vincular(): void {
        this.premioService.vincular(this.premios)
                          .subscribe(sucesso => this.onSucesso('Prêmio(s) vinculado(s) com sucesso!!'),
                                     erro => console.log(erro));
    }

    public buscar(): void {
        this.premioService.buscar().subscribe(premios => this.premios = premios,
                                              erro => console.log(erro));
    }
}
