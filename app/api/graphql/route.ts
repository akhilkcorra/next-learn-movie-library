import { createSchema, createYoga } from "graphql-yoga";
import { readMovies, writeMovies } from "@/lib/storage";

type Movie = {
  id: string;
  title: string;
  description: string;
  poster: string;
  rating: number;
  reviews: string[];
  category: string;
};

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
    typeDefs: /* GraphQL */ `
      type Movie {
        id: ID!
        title: String!
        description: String!
        poster: String!
        rating: Float
        reviews: [String!]!
        category: String!
      }

      type Query {
        movies(category: String): [Movie!]!
        movie(id: ID!): Movie
        categories: [String!]!
      }

      type Mutation {
        addMovie(
          title: String!
          description: String!
          poster: String!
          category: String!
        ): Movie!
        updateMovie(id: ID!, rating: Float, review: String): Movie!
        deleteMovie(id: ID!): Boolean!
      }
    `,
    resolvers: {
      Query: {
        movies: async (_: unknown, { category }: { category?: string }) => {
          const data: Movie[] = await readMovies();
          return category
            ? data.filter((m: Movie) => m.category === category)
            : data;
        },
        movie: async (_: unknown, { id }: { id: string }) => {
          const data: Movie[] = await readMovies();
          return data.find((m: Movie) => m.id === id);
        },
        categories: async () => {
          const data: Movie[] = await readMovies();
          return Array.from(new Set(data.map((m: Movie) => m.category)));
        },
      },
      Mutation: {
        addMovie: async (
          _: unknown,
          args: Omit<Movie, "id" | "rating" | "reviews">
        ) => {
          const data: Movie[] = await readMovies();
          const newMovie: Movie = {
            id: String(Date.now()),
            rating: 0,
            reviews: [],
            ...args,
          };
          data.push(newMovie);
          await writeMovies(data);
          return newMovie;
        },
        updateMovie: async (
          _: unknown,
          {
            id,
            rating,
            review,
          }: { id: string; rating?: number; review?: string }
        ) => {
          const data: Movie[] = await readMovies();
          const movie = data.find((m: Movie) => m.id === id);
          if (!movie) return null;
          if (rating !== undefined) movie.rating = rating;
          if (review) movie.reviews.push(review);
          await writeMovies(data);
          return movie;
        },
        deleteMovie: async (_: unknown, { id }: { id: string }) => {
          let data: Movie[] = await readMovies();
          const before = data.length;
          data = data.filter((m: Movie) => m.id !== id);
          await writeMovies(data);
          return data.length < before;
        },
      },
    },
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
