import {Component, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe.model';
import {LoggingService} from '../logging.service';
import {RecipesService} from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [LoggingService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private loggingserver: LoggingService, private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.loggingserver.logStatusChange('recipes on init');
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
