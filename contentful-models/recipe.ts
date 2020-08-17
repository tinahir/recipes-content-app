import { Entry } from "contentful";
import IPhotoContent from "./photo";
import ITagContent from "./tag";
import IChefContent from "./chef";

interface IRecipeContent {
  calories: number;
  description: string;
  title: string;
  photo?: Entry<IPhotoContent>;
  tags?: Entry<ITagContent>[];
  chef?: Entry<IChefContent>;
}

export default IRecipeContent;
