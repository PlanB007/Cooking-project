import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png' ),
    new Recipe('A Second recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
