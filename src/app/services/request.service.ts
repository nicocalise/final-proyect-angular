import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  const urlSearch= 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&';
  const apiKeySearch= 'apiKey=846f36711dde4c8081a9fd7584df2eb2';
  const number = 'number=50';

  const urlId = 'https://api.spoonacular.com/recipes';
  const information = 'information?includeNutrition=false';

@Injectable()

export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getRecipes():Observable<any> {
    return this.httpClient.get(urlSearch+apiKeySearch+'&'+number);
  }

  getRecipeID(id:string):Observable<any>{
    return this.httpClient.get(urlId+'/'+id+'/'+information+'&'+apiKeySearch);
  }

}
