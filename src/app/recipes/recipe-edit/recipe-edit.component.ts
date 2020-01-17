import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipesService} from '../../services/recipes.service';
import {Recipe} from '../../common/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editmode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editmode = params['id'] != null;
      console.log(this.editmode);
      this.initForm();
    });
  }

  initForm() {
    let recipeName = '';
    let imagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.editmode) {
      const recipe = this.recipesService.getRecipeById(this.id);
      console.log(recipe);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          console.log(ingredient.name);
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+[0-9]$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
        name: new FormControl(recipeName, Validators.required),
        imagePath: new FormControl(imagePath, Validators.required),
        description: new FormControl(recipeDescription, Validators.required),
        ingredients: recipeIngredients
      }
    );
  }

  onAddIngredient() {

    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]+[0-9]$/)])

      })
    );
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if (this.editmode) {
      this.recipesService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipesService.addRecipe(newRecipe);
    }

  }

}
