import { Component, OnInit } from '@angular/core';
import { Featurette } from './shared/component/featurette/featurette';
import { FeaturetteService } from './shared/component/featurette/featurette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Lading-Page';

  featurettes: Featurette[] = [];

  constructor(private featuretteService: FeaturetteService){}

  ngOnInit(): void {

    this.featurettes = this.featuretteService.retriveAll();
  }
}
