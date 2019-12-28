import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../common/ingredient.model';
import {ShoppinglistserviceService} from '../services/shoppinglistservice.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  paramsSubscription: Subscription;

  constructor(private shoppinglistserviceService: ShoppinglistserviceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ingredients = this.shoppinglistserviceService.getIngredients();
    this.shoppinglistserviceService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

    /*using rxjs subscription for route values*/
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    );
  }

  addIngredient(data: Ingredient) {
    //this.ingredients.push(data);
    this.shoppinglistserviceService.addIngredient(data);
    this.ingredients = this.shoppinglistserviceService.getIngredients();
  }

  /* on destroy of params subscription*/
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
