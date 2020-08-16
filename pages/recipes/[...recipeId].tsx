import { contentfulClient } from "../../lib/content-api";
import IRecipe from "../../types/recipe";
import { Entry } from "contentful";
import { Card, Image, Text, Styled, Box, AspectImage, Flex } from "theme-ui";
import { useRouter } from "next/dist/client/router";
import { GetStaticPaths } from "next";
import Error from "next/error";
/** @jsx jsx */
import { Link, jsx } from "theme-ui";
import Tags from "../../components/Tags";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Head from "next/head";
import RecipeSkeleton from "../../components/RecipeSkeleton";
import Loading from "../../components/Loading";

type Props = {
  recipe: Entry<IRecipe>;
};

export default function RecipePage({ recipe }: Props) {
  const { isFallback } = useRouter();

  if (!isFallback && !recipe) {
    return <Error statusCode={404} title="This recipe could not be found" />;
  }

  if (isFallback) {
    return <Loading />;
  }

  const renderRecipe = () => {};

  return (
    <Layout header={<Header />}>
      <Head>
        <title>{recipe.fields.title}</title>
      </Head>
      <Card>
        <Flex
          sx={{
            flexDirection: "column",
            pb: 2,
          }}
        >
          <div sx={{ height: 256, overflow: "hidden" }}>
            <Image src={recipe.fields.photo?.fields.file.url} />
          </div>
          <Box p={3}>
            <Styled.h2>{recipe.fields.title}</Styled.h2>
            {recipe.fields.tags && <Tags items={recipe.fields.tags!}></Tags>}
            <Text>{recipe.fields.description}</Text>
            {recipe.fields.chef && (
              <Text>{recipe.fields.chef!.fields.name}</Text>
            )}
          </Box>
        </Flex>
      </Card>
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

  const data = await contentfulClient.getEntry<IRecipe>(id);

  return {
    props: {
      recipe: data,
    },
  };
}
