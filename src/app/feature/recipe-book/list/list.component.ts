import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
