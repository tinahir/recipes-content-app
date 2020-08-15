import { contentfulClient } from "../../lib/content-api";
import IRecipe from "../../types/recipe";
import { Entry } from "contentful";
import { Card, Image, Text, Styled } from "theme-ui";
import { useRouter } from "next/dist/client/router";
import { GetStaticPaths } from "next";
import Error from "next/error";
/** @jsx jsx */
import { Link, jsx } from "theme-ui";
import Tags from "../../components/Tags";

type Props = {
  recipe: Entry<IRecipe>;
};

export default function RecipePage({ recipe }: Props) {
  const { isFallback } = useRouter();
  console.log(recipe);

  if (!isFallback && !recipe) {
    return <Error statusCode={404} title="This recipe could not be found" />;
  }

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main
      sx={{
        maxWidth: 768,
        mx: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card>
        <Image src={recipe.fields.photo?.fields.file.url} />
        <Styled.h2>{recipe.fields.title}</Styled.h2>
        {recipe.fields.tags && <Tags items={recipe.fields.tags!}></Tags>}
        <Text>{recipe.fields.description}</Text>
        {recipe.fields.chef && <Text>{recipe.fields.chef!.fields.name}</Text>}
      </Card>
    </main>
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
