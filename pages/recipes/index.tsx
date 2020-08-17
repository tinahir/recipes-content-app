import * as React from "react";
/** @jsx jsx */
import { Link, Grid, jsx } from "theme-ui";
import IRecipe from "../../contentful-models/recipe";
import { Entry } from "contentful";
import RecipeItem from "../../components/RecipeItem";
import { replaceWhiteSpace } from "../../shared/stringUtility";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Head from "next/head";
import { recipeService } from "../../lib/recipe/service";
import NotFound from "../404";
import IRecipeModel from "../../lib/recipe/model";

type Props = {
  recipes: IRecipeModel[];
};

export default function RecipesPage({ recipes }: Props) {
  if (!recipes) {
    return <NotFound title="This recipe could not be found" />;
  }

  return (
    <Layout header={<Header />}>
      <Head>
        <title>Recipes Every Week</title>
      </Head>
      <Grid
        gap={3}
        sx={{
          gridTemplateColumns: [
            [1, "1fr"],
            [2, "1fr 1fr"],
          ],
        }}
      >
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            sx={{
              textDecoration: "none",
            }}
            href={`recipes/${recipe.id}/${replaceWhiteSpace(
              recipe.title,
              "-"
            )}`}
          >
            <RecipeItem title={recipe.title} url={recipe.url!}></RecipeItem>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = await recipeService.list();
    return {
      props: {
        recipes: data,
      },
      revalidate: 1,
    };
  } catch (e) {
    return {
      props: {
        recipes: null,
      },
    };
  }
}
