import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {ServertableComponent} from './servers/servertable/servertable.component';
import {HighlightsDirective} from './common/highlights.directive';
import {DropdownDirective} from './common/dropdown.directive';
import {LoggingService} from './logging.service';
import {UserserComponent} from './userser/userser.component';
import {RecipesService} from './services/recipes.service';
import {ShoppinglistserviceService} from './services/shoppinglistservice.service';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { ShortenpipePipe } from './shortenpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServertableComponent,
    HighlightsDirective,
    DropdownDirective,
    UserserComponent,
    PagenotfoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ShortenpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoggingService, RecipesService, ShoppinglistserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
