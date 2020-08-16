/** @jsx jsx */
import { Card, Image, Text, jsx, Box } from "theme-ui";

type Props = {
  title: string;
  url: string;
};

export default function RecipeItem({ title, url }: Props) {
  return (
    <Card>
      <Image
        src={url}
        sx={{
          objectFit: "cover",
        }}
      />
      <Box px={3} pb={2}>
        <Text
          sx={{
            fontSize: 2,
            fontWeight: "500",
            color: "dark",
          }}
        >
          {title}
        </Text>
      </Box>
    </Card>
  );
}
