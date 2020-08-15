import * as React from "react";
import { contentfulClient } from "../../lib/content-api";
import { ContentType } from "../../lib/content-type";
import IRecipe from "../../types/recipe";
import { Entry } from "contentful";
import { Card, Image, Link } from "theme-ui";
import RecipeItem from "../../components/RecipeItem";
import { getSeoTitle, replaceWhiteSpace } from "../../shared/stringUtility";

type Props = {
  recipes: Entry<IRecipe>[];
};

export default function RecipesPage({ recipes }: Props) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Link
          key={recipe.sys.id}
          href={`recipes/${recipe.sys.id}/${replaceWhiteSpace(
            recipe.fields.title,
            "-"
          )}`}
        >
          <RecipeItem
            title={recipe.fields.title}
            url={recipe.fields.photo?.fields.file.url!}
          ></RecipeItem>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await contentfulClient.getEntries<IRecipe>({
    content_type: ContentType.Recipe,
  });

  return {
    props: {
      recipes: data.items,
    },
    revalidate: 1, // In seconds
  };
}
