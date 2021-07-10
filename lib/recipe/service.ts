import { contentfulClient } from "../content-api";
import { ContentType } from "../content-type";
import { recipeAdapter } from "./adapter";
import { IResult, Result } from "../result";
import { IRecipe } from "./model";
import IRecipeContent from "@/contentful-models/recipe";

class RecipeService {
  async list() {
    let result: IResult<IRecipe[]>;
    try {
      const data = await contentfulClient.getEntries<IRecipeContent>({
        content_type: ContentType.Recipe,
      });
      const items = data.items.map((item) => recipeAdapter.convert(item));

      result = new Result(items);
    } catch (e) {
      result = new Result(null, {
        code: e.sys.id,
        message: e.message,
      });
    }
    return result;
  }

  async getById(id: string) {
    let result: IResult<IRecipe>;
    try {
      const data = await contentfulClient.getEntry<IRecipeContent>(id);
      const item = recipeAdapter.convert(data);
      result = new Result(item);
    } catch (e) {
      result = new Result(null, {
        code: e.sys.id,
        message: e.message,
      });
    }
    return result;
  }
}

export const recipeService = new RecipeService();
