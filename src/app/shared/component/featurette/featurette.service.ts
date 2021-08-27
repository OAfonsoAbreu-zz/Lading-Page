import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Featurette } from "./featurette";

@Injectable({
    providedIn: 'root'
})

export class FeaturetteService{

    private featurettes: Featurette[] = [
        {
            id: "quem-somos",
            titulo: "Quem Somos", 
            texto: "Somos uma empresa com foco no desenvolvimento de Landing Pages e Sites institucionais. Contamos com uma equipe de especialistas em Front-End e Back-end, no qual nos possibilita desenvolver o site ideal para a sua empresa e negócio!", 
            pathImagem: "assets/img/quem-somos.jpg", 
            ordemTexto: 1, 
            ordemImagem : 2
        },
        {
            id: "servicos",
            titulo: "Quem Somos", 
            texto: "Somos uma empresa com foco no desenvolvimento de Landing Pages e Sites institucionais. Contamos com uma equipe de especialistas em Front-End e Back-end, no qual nos possibilita desenvolver o site ideal para a sua empresa e negócio!", 
            pathImagem: "assets/img/quem-somos.jpg", 
            ordemTexto: 2, 
            ordemImagem : 1
        },
        {
            id: "terceiro",
            titulo: "Terceiro", 
            texto: "Somos uma empresa com foco no desenvolvimento de Landing Pages e Sites institucionais. Contamos com uma equipe de especialistas em Front-End e Back-end, no qual nos possibilita desenvolver o site ideal para a sua empresa e negócio!", 
            pathImagem: "assets/img/quem-somos.jpg", 
            ordemTexto: 1, 
            ordemImagem : 2
        },
    ] 

    retriveAll(): Featurette[]{
        return this.featurettes;
    }

}