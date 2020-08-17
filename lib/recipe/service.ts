import { contentfulClient } from "../content-api";
import { ContentType } from "../content-type";
import recipeAdapter from "./adapter";
import IRecipe from "../../contentful-models/recipe";

class RecipeService {
  async list() {
    const data = await contentfulClient.getEntries<IRecipe>({
      content_type: ContentType.Recipe,
    });

    const items = data.items.map((item) => recipeAdapter.convert(item));
    return items;
  }

  async getById(id: string) {
    const data = await contentfulClient.getEntry<IRecipe>(id);
    const item = recipeAdapter.convert(data);
    return item;
  }
}

export const recipeService = new RecipeService();
