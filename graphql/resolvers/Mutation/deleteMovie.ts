import { readMovies, writeMovies } from "@/lib/storage";

export const deleteMovie = (_: any, args: { id: string }) => {
  let movies = readMovies();
  const lengthBefore = movies.length;
  movies = movies.filter((m: any) => m.id !== args.id);
  writeMovies(movies);
  return movies.length < lengthBefore;
};
