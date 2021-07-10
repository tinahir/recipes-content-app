/** @jsxImportSource theme-ui */
import { ReactNode } from "react";
import { jsx } from "theme-ui";

type Props = {
  children?: ReactNode;
};

export default function Skeleton({ children }: Props) {
  return (
    <div
      sx={{
        width: "100%",
        borderRadius: 5,
        backgroundImage:
          "linear-gradient(270deg, #fafafa, #eaeaea,#fafafa, #eaeaea)",
        animation: "loading 8s ease-in-out infinite",
      }}
    >
      {children}
    </div>
  );
}
