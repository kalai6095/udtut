import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../common/ingredient.model';
import {ShoppinglistserviceService} from '../../services/shoppinglistservice.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editmode = false;
  editedIndex: number;
  editedItem: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('amoutInput', {static: false}) amoutInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppinglistserviceService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEdditing.subscribe((data: number) => {
      this.editmode = true;
      this.editedIndex = data;
      this.editedItem = this.slService.getIngredientsByIndex(this.editedIndex);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  addItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    //const ingamout = this.amoutInputRef.nativeElement.value;
    const ingName = form.value.name;
    const ingamout = form.value.amount;
    if (ingName !== null && ingName !== undefined) {
      const newIngredient = new Ingredient(ingName, ingamout);
      // this.ingredientAdded.emit(newIngredient);
      this.slService.addIngredient(newIngredient);
    }
  }


  updateItem(form: NgForm) {
    /* const ingName = this.nameInputRef.nativeElement.value;
     const ingamout = this.amoutInputRef.nativeElement.value;
 */    //this.ingredientAdded.emit(ingName,ingamount);
    const ingName = form.value.name;
    const ingamout = form.value.amount;
    if (ingName !== null && ingName !== undefined) {
      const newIngredient = new Ingredient(ingName, ingamout);
      // this.ingredientAdded.emit(newIngredient);
      this.slService.updateIngredients(this.editedIndex, newIngredient);
      this.editmode = false;
      form.reset();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editmode = false;
  }

}
