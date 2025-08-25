export const typeDefs = /* GraphQL */ `
  type Movie {
    id: ID!
    title: String!
    description: String!
    poster: String!
    rating: Float
    reviews: [String]
    category: String!
  }

  type Query {
    movies(category: String): [Movie]
    movie(id: ID!): Movie
    categories: [String]
  }

  type Mutation {
    addMovie(
      title: String!
      description: String!
      poster: String!
      category: String!
    ): Movie
    updateMovie(id: ID!, rating: Float, review: String): Movie
    deleteMovie(id: ID!): Boolean
  }
`;
