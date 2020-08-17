/** @jsx jsx */
import { Card, Image, Text, Styled, Box, Flex, jsx } from "theme-ui";
import { Entry } from "contentful";
import { GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Error from "next/error";
import IRecipe from "../../contentful-models/recipe";
import Tags from "../../components/Tags";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { recipeService } from "../../lib/recipe/service";
import IRecipeModel from "../../lib/recipe/model";

type Props = {
  recipe: IRecipeModel;
};

export default function RecipePage({ recipe }: Props) {
  const { isFallback } = useRouter();

  if (!isFallback && !recipe) {
    return <Error statusCode={404} title="This recipe could not be found" />;
  }

  const renderRecipe = () => (
    <>
      <Head>
        <title>{recipe.title}</title>
      </Head>
      <Card>
        <Flex
          sx={{
            flexDirection: "column",
            pb: 2,
          }}
        >
          <div sx={{ height: 256, overflow: "hidden" }}>
            <Image src={recipe.url} />
          </div>
          <Box p={3}>
            <Styled.h2>{recipe.title}</Styled.h2>
            {recipe.tags && <Tags items={recipe.tags!}></Tags>}
            <Text>{recipe.description}</Text>
            {recipe.chefName && (
              <Text>{`Shared with you by: ${recipe.chefName!.name}`}</Text>
            )}
          </Box>
        </Flex>
      </Card>
    </>
  );

  return (
    <Layout header={<Header />}>
      {isFallback ? (
        <Loading>
          <Text>Loading...</Text>
        </Loading>
      ) : (
        renderRecipe()
      )}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export async function getStaticProps({ params }: any) {
  const {
    recipeId: [id],
  } = params;

  const data = await recipeService.getById(id);

  return {
    props: {
      recipe: data,
    },
  };
}
