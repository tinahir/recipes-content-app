/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, Spinner, Box } from "theme-ui";

type Props = {
  children?: ReactNode;
};

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Spinner></Spinner>
    </Box>
  );
}
