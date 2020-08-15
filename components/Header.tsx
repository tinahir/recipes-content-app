/** @jsx jsx */
import { Link, jsx } from "theme-ui";

export default function Header() {
  return (
    <header
      sx={{
        variant: "styles.header",
        px: 3,
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          sx={{
            variant: "styles.navlink",
            fontSize: 6,
            py: 2,
          }}
        >
          #
        </Link>
      </div>
    </header>
  );
}
