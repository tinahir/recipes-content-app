/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";

type Props = {
  items: string[];
};

export default function Tags({ items, ...props }: Props) {
  return (
    <Box {...props}>
      <Styled.ul>
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
      </Styled.ul>
    </Box>
  );
}
