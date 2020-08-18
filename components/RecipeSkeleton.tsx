/** @jsx jsx */
import Skeleton from "./Skeleton";
import { Flex, Box } from "theme-ui";
import { Link, jsx } from "theme-ui";

export default function RecipeSkeleton() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        pb: 2,
      }}
    >
      <div sx={{ height: 256, overflow: "hidden" }}>
        <Skeleton />
      </div>
      <Box p={3}></Box>
    </Flex>
  );
}
