import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { Premio } from './../model/premio';

@Injectable()
export class PremioService {
    private apiUrl: string = environment.apiUrl;
    constructor(private http: Http) {}
    public salvar(maletas: Premio): Observable<any> {
        return this.http.post(`${this.apiUrl}/premios`, maletas, this.headers())
                        .map(response => response)
                        .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }

    public buscar(): Observable<any> {
        return this.http.get(`${this.apiUrl}/premios`, this.headers())
                        .map(response => response.json())
                        .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }

    public excluir(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/premios/${id}`, this.headers())
                        .map(response => response)
                        .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }

    public vincular(premios: Premio[]): Observable<any>  {
        return this.http.post(`${this.apiUrl}/premios/vincular`, premios, this.headers())
                        .map(response => response)
                        .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }

    private headers(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({headers: headers});
    }
}