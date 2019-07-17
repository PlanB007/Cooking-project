import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png' ),
        new Recipe('A Second recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png' )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
