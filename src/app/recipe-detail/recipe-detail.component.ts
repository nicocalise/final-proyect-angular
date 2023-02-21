import { RecipeInterface, RecipeResponseInterface } from './../models/recipe.model';
import { RequestService } from './../services/request.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  public recipeId: string ='';
  public recipe?: RecipeInterface;

  constructor(private activatedRoute: ActivatedRoute, private requestService: RequestService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.recipeId = params.get('recipeId') as string;
      this.getRecipeId(this.recipeId);
    });
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      console.log(queryParams);
    }) 
  }

  private getRecipeId(id:string): void {
    this.requestService.getRecipeID(id).subscribe(
      (response: RecipeInterface) => {
        this.recipe = response;
      });
  }
}
