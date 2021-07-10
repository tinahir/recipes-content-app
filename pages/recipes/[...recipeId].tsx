/** @jsxImportSource theme-ui */
import { Card, Image, Text, Themed, Box, Flex, jsx } from "theme-ui";
import { FaArrowLeft } from "react-icons/fa";
import { GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Tags from "@/components/Tags";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { recipeService } from "@/lib/recipe/service";
import { IRecipe } from "@/lib/recipe/model";
import NotFound from "../404";
import { Error } from "@/lib/result";

type Props = {
  recipe: IRecipe;
  error: Error;
};

export default function RecipePage({ recipe, error }: Props) {
  const { isFallback } = useRouter();
  if (error) {
    return (
      <NotFound statusCode={500} title={`${error.code}: ${error.message}`} />
    );
  }

  if (!isFallback && !recipe) {
    return <NotFound statusCode={404} title="This recipe could not be found" />;
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
            <Image src={recipe.url} alt={recipe.title} />
          </div>
          <Box p={3}>
            <Themed.h2
              sx={{
                pb: 3,
              }}
            >
              {recipe.title}
            </Themed.h2>
            {recipe.tags && (
              <Tags
                sx={{
                  pb: 3,
                }}
                items={recipe.tags!}
              ></Tags>
            )}
            <Text
              sx={{
                pb: 3,
              }}
            >
              {recipe.description}
            </Text>
            {recipe.chefName && (
              <Text>
                Shared with you by:{" "}
                <span
                  sx={{
                    fontWeight: "bold",
                    color: "primary",
                  }}
                >
                  {recipe.chefName}
                </span>
              </Text>
            )}
          </Box>
        </Flex>
      </Card>
    </>
  );
  const header = (
    <Header
      defaultBackHref="/recipes"
      renderBackButton={() => <FaArrowLeft />}
    />
  );
  return (
    <Layout header={header}>
      {isFallback ? (
        <Loading>
          <Text>Your favourite recipe is loading...</Text>
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

export async function getStaticProps({
  params,
}: {
  params: { recipeId: string[] };
}) {
  const {
    recipeId: [id],
  } = params;

  const result = await recipeService.getById(id);
  return {
    props: {
      recipe: result.data,
      error: result.error,
    },
    revalidate: 60,
  };
}
