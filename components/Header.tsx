import { Link } from "theme-ui";

export default function Header() {
  return (
    <header
      sx={{
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: "auto",
          px: 3,
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <Link
          sx={{
            variant: "styles.navlink",
            fontSize: 5,
            py: 2,
          }}
        >
          Recipes
        </Link>
        <div sx={{ mx: "auto" }} />
      </div>
    </header>
  );
}
