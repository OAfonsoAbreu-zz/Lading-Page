import { Component, Input } from "@angular/core";
import { Featurette } from "./featurette";

@Component({
    selector: "app-featurette",
    templateUrl: "./featurette.component.html",
    styleUrls: [
        "./featurette.component.css"
    ]
})

export class FeaturetteComponent{
    
    @Input()
    featurette: Featurette = new Featurette;

}