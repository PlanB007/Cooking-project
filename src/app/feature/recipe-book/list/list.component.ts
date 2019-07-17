import { RecipeService } from './../recipe.service';

import { LoggingService } from './../../../services/logging/logging.services';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [LoggingService]
})
export class ListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private logginsSerive: LoggingService, private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {

    this.logginsSerive.logToConsole('Recipe selected');
  }

}
