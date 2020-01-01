import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../common/ingredient.model';
import {LoggingService} from '../logging.service';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppinglistserviceService {
  private ingredients: Ingredient[] = [
    new Ingredient('In Apple', 10),
    new Ingredient('In Mango', 5)
  ];
 /* ingredientsChanged = new EventEmitter<Ingredient[]>();*/
  ingredientsChanged = new Subject<Ingredient[]>();

  constructor(private logging: LoggingService) {
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    /*this.ingredientsChanged.emit(this.ingredients.slice());*/
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    /*this.ingredientsChanged.emit(this.ingredients.slice());*/
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
