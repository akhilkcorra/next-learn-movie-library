import { readMovies, writeMovies } from "@/lib/storage";

export const updateMovie = (
  _: any,
  args: { id: string; rating?: number; review?: string }
) => {
  const movies = readMovies();
  const movie = movies.find((m: any) => m.id === args.id);
  if (!movie) return null;

  if (args.rating !== undefined) {
    movie.rating = args.rating;
  }
  if (args.review) {
    movie.reviews.push(args.review);
  }

  writeMovies(movies);
  return movie;
};
