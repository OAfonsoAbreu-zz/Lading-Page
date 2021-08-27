import { Component, OnInit } from '@angular/core';
import { Featurette } from './shared/component/featurette/featurette';
import { FeaturetteService } from './shared/component/featurette/featurette.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Lading-Page';

  featurettes: Featurette[] = [];

  constructor(private featuretteService: FeaturetteService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any){}

  ngOnInit(): void {

    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
    
    this.featurettes = this.featuretteService.retriveAll();
  }
}
