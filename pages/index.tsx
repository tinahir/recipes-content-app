/** @jsx jsx */
import { jsx, Link, Styled, Text } from "theme-ui";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Recipes Every Week</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout header={<Header />}>
        <div>
          <Styled.h1
            sx={{
              fontSize: 6,
              pb: 3,
            }}
          >
            Recipes Every Week
          </Styled.h1>
          <Text
            sx={{
              pb: 5,
              color: "#a0aec0",
            }}
          >
            Choose from a variety of exciting recipes every week. <br /> Explore
            new cuisines and authentic flavors.
          </Text>
        </div>
        <Link href="/recipes" variant="links.button">
          View recipes
        </Link>
      </Layout>
    </div>
  );
}
