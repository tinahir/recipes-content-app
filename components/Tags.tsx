/** @jsxImportSource theme-ui */
import { jsx, Box, Themed, ThemeUIStyleObject } from "theme-ui";

type Props = {
  items: string[];
  sx?: ThemeUIStyleObject;
};

export default function Tags({ items, sx }: Props) {
  return (
    <Box sx={sx}>
      <Themed.ul>
        {items.map((item) => (
          <li
            key={item}
            sx={{
              listStyle: "none",
              backgroundColor: "muted",
              color: "dark",
              display: "inline-block",
              padding: 2,
              marginRight: 2,
              textTransform: "uppercase",
              fontSize: 0,
              fontWeight: 700,
            }}
          >
            {item}
          </li>
        ))}
      </Themed.ul>
    </Box>
  );
}
