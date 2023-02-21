import { HtmlParser, HtmlTagDefinition } from "@angular/compiler";

export interface RecipeInterface {
    id: number;
    title: string;
    image: string;
    vegetarian: boolean;
    instructions: string;
    analyzedInstructions:analyzedInstructions[];
  }
  
  export interface RecipeResponseInterface {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: string;
    };
    results: RecipeInterface[];
  }

  export interface analyzedInstructions{
    steps: steps [];
  }

  export interface steps{
    step: string;
  }