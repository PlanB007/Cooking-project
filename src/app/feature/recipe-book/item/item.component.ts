import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
