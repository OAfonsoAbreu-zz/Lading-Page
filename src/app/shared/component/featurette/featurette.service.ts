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
            titulo: "Nossos serviços", 
            texto: "Desenvolvemos sites institucionais, lading pages, tudo utilizando as mais novas tecnologias e páginas totalmente responsivas, para que você possa oferecer a melhor experiência para seus clientes. Também oferecemos serviço de SEO para otimizar seu site nos buscadores e atrair cada vez mais clientes.", 
            pathImagem: "assets/img/servicos.jpg", 
            ordemTexto: 2, 
            ordemImagem : 1
        },
        
    ] 

    retriveAll(): Featurette[]{
        return this.featurettes;
    }

}