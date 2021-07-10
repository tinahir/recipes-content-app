/** @jsxImportSource theme-ui */
import { ReactNode } from "react";
import { jsx, Spinner, Box } from "theme-ui";

type Props = {
  children?: ReactNode;
};

export default function Loading({ children }: Props) {
  return (
    <Box
      sx={{
        height: "100%",
        textAlign: "center",
      }}
    >
      <Spinner></Spinner>
      {children}
    </Box>
  );
}
