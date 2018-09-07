import { Maleta } from './../model/maleta';
import { Http } from '@angular/http';
export class MaletaService {
    constructor(private http: Http) {}

    public buscar(): Maleta[] {
        // this.http.get("url")
    }
}