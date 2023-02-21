import { RecipeInterface, RecipeResponseInterface } from './../models/recipe.model';
import { RequestService } from './../services/request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipeList: RecipeInterface[] = [];

  constructor(private requestService: RequestService){}

  ngOnInit() {
    this.requestService.getRecipes().subscribe((data: RecipeResponseInterface) => {
      this.recipeList = data.results;
    })
  }

}
