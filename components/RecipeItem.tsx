/** @jsx jsx */
import { Card, Image, Text, jsx } from "theme-ui";

type Props = {
  title: string;
  url: string;
};

export default function RecipeItem({ title, url }: Props) {
  return (

    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <Image src={url} />
      <Text>{title}</Text>
    </Card>
  );
}
