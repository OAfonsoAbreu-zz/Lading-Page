import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { CarouselComponent } from "./carousel/carousel.component";
import { ContatoComponent } from "./contato/contato.component";
import { FeaturetteComponent } from "./featurette/featurette.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./navbar/nav-bar.component";


@NgModule({
    declarations:[
        NavBarComponent,
        FooterComponent,
        CarouselComponent,
        FeaturetteComponent,
        ContatoComponent
    ],
    imports:[
        RouterModule,
        NgxPageScrollModule,
        CommonModule,
        FormsModule
    ],
    exports:[
        NavBarComponent,
        FooterComponent,
        CarouselComponent,
        FeaturetteComponent,
        ContatoComponent
    ]
})

export class SharedComponentModule{

}