import { createSchema, createYoga } from "graphql-yoga";
import { resolvers, typeDefs } from "@/graphql";

interface NextContext {
  params: Promise<Record<string, string>>;
}

const defaultQuery = /* GraphQL */ `
  # Sample Queries

  query GetAllMovies {
    movies {
      id
      title
      category
      rating
    }
  }

  query GetCategories {
    categories
  }

  mutation AddMovie {
    addMovie(
      title: "Interstellar"
      description: "Exploring space and time"
      poster: "https://picsum.photos/seed/interstellar/300/450"
      category: "Sci-Fi"
    ) {
      id
      title
      category
    }
  }
`;

const { handleRequest } = createYoga<NextContext>({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",
  graphiql: {
    defaultQuery,
  },

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
