export interface IRecipe {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  url?: string;
  chefName?: string;
  tags?: Array<string>;
}
