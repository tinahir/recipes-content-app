/** @jsxImportSource theme-ui */
import { Link, Grid } from "theme-ui";
import RecipeItem from "@/components/RecipeItem";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Head from "next/head";
import NotFound from "@/pages/404";
import { replaceWhiteSpace } from "@/shared/stringUtility";
import { recipeService } from "@/lib/recipe/service";
import { InferGetStaticPropsType } from "next";

export default function RecipesPage({
  recipes,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (error) {
    return (
      <NotFound statusCode={500} title={`${error.code}: ${error.message}`} />
    );
  }
  if (Array.isArray(recipes) && recipes.length === 0) {
    return <NotFound title="This recipes could not be found" />;
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
        {recipes?.map((recipe) => (
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
  const result = await recipeService.list();
  return {
    props: {
      recipes: result.data,
      error: result.error,
    },
    revalidate: 60,
  };
}
