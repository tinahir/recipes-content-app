/** @jsx jsx */
import { Link, jsx, Badge, Styled } from "theme-ui";
import { Entry } from "contentful";
import ITag from "../types/tag";

type Props = {
  items: Entry<ITag>[];
};

export default function Tags({ items }: Props) {
  return (
    <div>
      <Styled.ul>
        {items.map((item) => (
          <li
            key={item.fields.name}
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
            {item.fields.name}
          </li>
        ))}
      </Styled.ul>
    </div>
  );
}
