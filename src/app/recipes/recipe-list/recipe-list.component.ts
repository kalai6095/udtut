import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../common/recipe.model';
import {RecipesService} from '../../services/recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeservice: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeservice.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeservice.getRecipe();
  }

  addRecipe() {
    /*  const recipe = new Recipe('', '', '',[]);
      this.recipeservice.addRecipe(recipe);
      this.recipeWasSelected.emit(recipe);*/
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  recipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
