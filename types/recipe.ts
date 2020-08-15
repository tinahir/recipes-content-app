import { Entry } from "contentful";
import IPhoto from "./photo";
import ITag from "./tag";
import IChef from "./chef";

interface IRecipe {
  calories: number;
  description: string;
  title: string;
  photo?: Entry<IPhoto>;
  tags?: Entry<ITag>[];
  chef?: Entry<IChef>;
}

export default IRecipe;
