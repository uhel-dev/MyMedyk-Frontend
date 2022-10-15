import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FaqPageService {

    private API_URL= environment.API_URL;

    constructor(
        private http : HttpClient
    ) {}

    getData(){
        let url = `${this.API_URL}/faq?populate=deep`;
        return this.http.get(url);
    }

}