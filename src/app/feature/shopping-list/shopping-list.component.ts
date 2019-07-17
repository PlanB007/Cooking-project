import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Flower', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingrdient: Ingredient) {
    this.ingredients.push(ingrdient);
  }

}
