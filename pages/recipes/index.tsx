import * as React from "react";
/** @jsx jsx */
import { Link, Grid, jsx } from "theme-ui";
import Error from "next/error";
import IRecipe from "../../types/recipe";
import { Entry } from "contentful";
import RecipeItem from "../../components/RecipeItem";
import { replaceWhiteSpace } from "../../shared/stringUtility";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Head from "next/head";
import { recipeService } from "../../lib/recipe-service";

type Props = {
  recipes: Entry<IRecipe>[];
};

export default function RecipesPage({ recipes }: Props) {
  if (!recipes) {
    return <Error statusCode={404} title="This recipe could not be found" />;
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
            key={recipe.sys.id}
            sx={{
              textDecoration: "none",
            }}
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
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = await recipeService.retrieveReceips();
    return {
      props: {
        recipes: data.items,
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
