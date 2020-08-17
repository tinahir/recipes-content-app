import { Entry } from "contentful";
import IAdapter from "../adapter";
import IRecipeContent from "../../contentful-models/recipe";
import { IRecipe } from "./model";

class RecipeAdapter implements IAdapter<IRecipe> {
  convert(item: Entry<IRecipeContent>) {
    let recipe: IRecipe = {
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      url: item.fields.photo?.fields?.file?.url,
    };

    if (item.fields.chef?.fields?.name) {
      recipe.chefName = item.fields.chef?.fields?.name;
    }
    if (item.fields.tags) {
      recipe.tags = item.fields.tags.map((value) => value.fields.name);
    }

    return recipe;
  }
}

export const recipeAdapter = new RecipeAdapter();
