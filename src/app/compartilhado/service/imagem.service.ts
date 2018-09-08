import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImagemService {

    private apiUrl: string = environment.apiUrl;
    constructor(private http: Http) {
    }

    public save (file: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('image', file);
        return this.postFormData(formData);
    }

    private postFormData(formData: FormData): Observable<any> {

        return this.http.post(`${this.apiUrl}/imagens`, formData)
            .map(response => response)
            .catch(error => Observable.throw(error.json().message || 'Erro no upload da imagem'));
    }

}
