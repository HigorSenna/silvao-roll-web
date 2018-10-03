import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Maleta } from '../model/maleta';
import { Injectable } from '@angular/core';

@Injectable()
export class MaletaService {
    private apiUrl: string = environment.apiUrl;
    constructor(private http: Http) {}

    public salvar(maletas: Maleta[]) {
        return this.http.post(`${this.apiUrl}/maletas`, maletas, this.headers())
            .map(response => response)
            .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }
    public buscar(): Observable<any> {
        return this.http.get(`${this.apiUrl}/maletas`, this.headers())
                        .map(response => response.json())
                        .catch(error => Observable.throw(error.json().message || 'Erro ao recuperar maletas'));
    }

    public excluir(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/maletas/${id}`, this.headers())
                        .map(response => response)
                        .catch(error => Observable.throw(error.json().message || 'Erro ao recuperar maletas'));
    }

    private headers(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({headers: headers});
    }
}