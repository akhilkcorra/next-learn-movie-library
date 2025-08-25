import { typeDefs } from "./schema/typeDefs";
import { movies } from "./resolvers/Query/movies";
import { movie } from "./resolvers/Query/movie";
import { categories } from "./resolvers/Query/categories";
import { addMovie } from "./resolvers/Mutation/addMovie";
import { updateMovie } from "./resolvers/Mutation/updateMovie";
import { deleteMovie } from "./resolvers/Mutation/deleteMovie";

export const resolvers = {
  Query: { movies, movie, categories },
  Mutation: { addMovie, updateMovie, deleteMovie },
};

export { typeDefs };
