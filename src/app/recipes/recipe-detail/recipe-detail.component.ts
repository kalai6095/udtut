import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../common/recipe.model';
import {ShoppinglistserviceService} from '../../services/shoppinglistservice.service';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
