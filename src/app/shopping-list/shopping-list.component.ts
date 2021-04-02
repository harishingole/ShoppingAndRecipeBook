import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredients[] = [
    new Ingredients('Apples',100),
    new Ingredients('Grapes',40)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(i:Ingredients){
    this.ingredient.push(i);
  }

}
