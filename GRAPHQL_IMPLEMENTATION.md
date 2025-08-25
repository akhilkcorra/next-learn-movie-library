# GraphQL Implementation

This document explains how the GraphQL endpoint is implemented for the Movies application using JSON file storage and modularized resolvers.

## Overview

- GraphQL endpoint is served at: `/api/graphql`
- Uses **GraphQL Yoga** for the server implementation.
- Movies data is stored in a JSON file (`/data/movies.json`).
- Data is read and written through helper functions in `/lib/storage.ts`.
- Resolvers and schema are modularized for clarity and scalability.

## Folder Structure

```
/app
  /api
    /graphql
      route.ts          # GraphQL handler (imports schema and resolvers)
/graphql
  /schema
    typeDefs.ts        # GraphQL type definitions
  /resolvers
    /Query
      movies.ts        # Resolver for movies query
      movie.ts         # Resolver for single movie
      categories.ts    # Resolver for categories
    /Mutation
      addMovie.ts      # Resolver for adding a movie
      updateMovie.ts   # Resolver for updating movie rating/reviews
      deleteMovie.ts   # Resolver for deleting a movie
  index.ts             # Combines schema and resolvers
```

## Schema (typeDefs)

```graphql
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
```

## Example Resolvers

### Query → Movies

```ts
import { getMovies } from "@/lib/storage";

export const movies = (_: any, args: { category?: string }) => {
  const data = getMovies();
  if (args.category) {
    return data.filter((m) => m.category === args.category);
  }
  return data;
};
```

### Mutation → Add Movie

```ts
import { getMovies, saveMovies } from "@/lib/storage";

export const addMovie = (
  _: any,
  args: { title: string; description: string; poster: string; category: string }
) => {
  const movies = getMovies();
  const newMovie = {
    id: String(Date.now()),
    rating: 0,
    reviews: [],
    ...args,
  };
  movies.push(newMovie);
  saveMovies(movies);
  return newMovie;
};
```

## GraphiQL Playground

GraphiQL is enabled by default for development at `/api/graphql`. You can:

- Test queries, mutations, and filters.
- Explore schema documentation via the Docs sidebar.

## Notes

- Data persistence is based on the JSON file in `/data/movies.json`.
- Changes are persisted across requests but reset if the server restarts or the JSON file is cleared.
- Splitting queries and mutations into separate resolver files helps scale as features grow.
