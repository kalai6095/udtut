import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../common/recipe.model';
import {RecipesService} from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  @Input('index') index: number;

  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    //this.recipeSelected.emit(i);
    this.recipesService.recipeSelected.next(recipe);
  }

}
