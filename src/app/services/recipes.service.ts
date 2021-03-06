import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../common/recipe.model';
import {LoggingService} from '../logging.service';
import {Ingredient} from '../common/ingredient.model';
import {ShoppinglistserviceService} from './shoppinglistservice.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private logging: LoggingService,
              private slService: ShoppinglistserviceService) {
  }

  // tslint:disable-next-line:max-line-length
  private recipes: Recipe[] = [
    new Recipe(
      'Homemade Pierogi',
      'Pierogi (boiled filled dumplings) were originally peasant fare native to Central and Eastern Europe; ..',
      'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/1750-3-large.jpg?itok=g_y5ZuuQ',
      [
        new Ingredient('Meet', 5), new Ingredient('Chicken', 8),
      ]),
    new Recipe(
      'Classic deviled eggs',
      'Boiled eggs where the yolk is mixed with mayonnaise, mustard, vinegar, salt...',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg',
      [
        new Ingredient('Meet', 5), new Ingredient('Frensh Fries', 20)
      ])
  ];
  /*recipeSelected = new EventEmitter<Recipe>();*/
  recipeSelected = new Subject<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.logging.logStatusChange('new logging added');
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }


  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes);
  }
}
