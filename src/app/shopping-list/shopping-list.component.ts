import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../common/ingredient.model';
import {ShoppinglistserviceService} from '../services/shoppinglistservice.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppinglistserviceService: ShoppinglistserviceService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppinglistserviceService.getIngredients();
    this.shoppinglistserviceService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  addIngredient(data: Ingredient) {
    //this.ingredients.push(data);
    this.shoppinglistserviceService.addIngredient(data);
    this.ingredients = this.shoppinglistserviceService.getIngredients();
  }

}
