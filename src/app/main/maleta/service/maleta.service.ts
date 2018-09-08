import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Maleta } from './../model/maleta';
import { Injectable } from '@angular/core';

@Injectable()
export class MaletaService {
    constructor(private http: Http) {}

    private apiUrl: string = environment.apiUrl;

    public salvar(maletas: Maleta[]) {
        console.log(maletas)
        return this.http.post(`${this.apiUrl}/maletas`, maletas, this.headers())
            .map(response => response.json())
            .catch(error => Observable.throw(error.json().message || 'Erro geral'));
    }
    public buscar(): Maleta[] {
        // this.http.get("url")
        return null;
    }

    private headers(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({headers: headers});
    }
}