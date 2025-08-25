import { readMovies, writeMovies } from "@/lib/storage";

export const addMovie = (
  _: any,
  args: { title: string; description: string; poster: string; category: string }
) => {
  const movies = readMovies();
  const newMovie = {
    id: String(Date.now()),
    rating: 0,
    reviews: [],
    ...args,
  };
  movies.push(newMovie);
  writeMovies(movies);
  return newMovie;
};
