/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import Head from "next/head";

export default function HomePage() {
  return (
    <div
      sx={{
        mx: 3,
      }}
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          sx={{
            py: 3,
          }}
        >
          <h1
            sx={{
              fontSize: 6,
            }}
          >
            Recipes Every Week
          </h1>
          <h2>
            Choose from a variety of exciting recipes every week. Explore new
            cuisines and authentic flavors
          </h2>
        </div>
        <Link href="/recipes" variant="links.button">
          View Recipes
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}
