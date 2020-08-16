import * as React from "react";
/** @jsx jsx */
import { jsx, Link, Styled, Grid } from "theme-ui";
import { contentfulClient } from "../../lib/content-api";
import { ContentType } from "../../lib/content-type";
import IRecipe from "../../types/recipe";
import { Entry } from "contentful";
import { Card, Image } from "theme-ui";
import RecipeItem from "../../components/RecipeItem";
import { replaceWhiteSpace } from "../../shared/stringUtility";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Head from "next/head";

type Props = {
  recipes: Entry<IRecipe>[];
};

export default function RecipesPage({ recipes }: Props) {
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
  const data = await contentfulClient.getEntries<IRecipe>({
    content_type: ContentType.Recipe,
  });

  return {
    props: {
      recipes: data.items,
    },
    revalidate: 1,
  };
}
