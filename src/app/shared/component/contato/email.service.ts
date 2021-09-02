import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Email } from "./email";

@Injectable({
    providedIn: 'root'
})

export class EmailService{

    private emailUrlBase: string = "https://serverabreu.herokuapp.com/api/enviar-email/";

    constructor(private httpClient: HttpClient){}
    
    enviar(email: Email): Observable<Email>{
        return this.httpClient.post<Email>(this.emailUrlBase, email);
    }

}