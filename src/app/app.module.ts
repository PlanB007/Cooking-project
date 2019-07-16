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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    EditComponent,
    DetailComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
