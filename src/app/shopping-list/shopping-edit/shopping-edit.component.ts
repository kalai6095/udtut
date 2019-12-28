import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../common/ingredient.model';
import {ShoppinglistserviceService} from '../../services/shoppinglistservice.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amoutInput', {static: false}) amoutInputRef: ElementRef;
 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppinglistserviceService) {
  }

  ngOnInit() {
  }

  addItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamout = this.amoutInputRef.nativeElement.value;
    if (ingName !== null && ingName !== undefined) {
      const newIngredient = new Ingredient(ingName, ingamout);
     // this.ingredientAdded.emit(newIngredient);
      this.slService.addIngredient(newIngredient);
    }
  }

  updateItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamout = this.amoutInputRef.nativeElement.value;

    //this.ingredientAdded.emit(ingName,ingamount);
  }
}
