import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test recipe',
            'This is simply a test',
            'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png',
            [
                new Ingredient('Flower', 1),
                new Ingredient('Piece of meat', 2),
            ]),
        new Recipe(
            'A Second recipe',
            'This is a test',
            'https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png',
            [
                new Ingredient('Beans', 2),
                new Ingredient('Ginger', 3),
            ]),
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
