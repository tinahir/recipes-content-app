/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

type Props = {
  items: string[];
};

export default function Tags({ items }: Props) {
  return (
    <div>
      <Styled.ul>
        {items.map((item) => (
          <li
            key={item}
            sx={{
              listStyle: "none",
              backgroundColor: " #f6f6f6",
              color: "#716d6a",
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
    </div>
  );
}
