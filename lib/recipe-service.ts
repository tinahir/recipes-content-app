import { contentfulClient } from "./content-api";
import IRecipe from "../types/recipe";
import { ContentType } from "./content-type";

class RecipeService {
  async retrieveReceips() {
    const data = await contentfulClient.getEntries<IRecipe>({
      content_type: ContentType.Recipe,
    });
    return data;
  }

  async getReceipById(id: string) {
    const data = await contentfulClient.getEntry<IRecipe>(id);
    return data;
  }
}

export const recipeService = new RecipeService();
