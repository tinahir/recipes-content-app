import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: process.env.SpaceId!,
  accessToken: process.env.AccessToken!,
});
