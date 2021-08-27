import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Email } from "./email";
import { HttpClient } from "@angular/common/http";
import { EmailService } from "./email.service";

@Component({
    selector: "app-contato",
    templateUrl: "./contato.component.html",
    styleUrls:[
        "./contato.component.css"
    ]
})

export class ContatoComponent{

    private emailUrlBase: string = "http://localhost:3100/api/enviar-email/";

    email: Email = new Email();

    constructor(private emailService: EmailService){}

    enviar(): void{
        this.emailService.enviar(this.email).subscribe({
            next: email => {
                console.log("E-mail enviado com sucesso!", email);
            },
            error: ex => console.log("Error:", ex)
        });
    }
}