import { BasicHighlightDirective } from './shared/basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './feature/recipe-book/recipe-book.component';
import { EditComponent } from './feature/shopping-list/edit/edit.component';
import { DetailComponent } from './feature/recipe-book/detail/detail.component';
import { ItemComponent } from './feature/recipe-book/item/item.component';
import { ListComponent } from './feature/recipe-book/list/list.component';
import { BetterHighlightDirective } from './shared/better-highlight/better-highlight.directive';
import { DropdownDirective } from './shared/dropdown-toggle/dropdown.directive';
import { ShoppingListService } from './feature/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    EditComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
