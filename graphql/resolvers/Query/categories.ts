import { readMovies } from "@/lib/storage";

export const categories = () => {
  const movies = readMovies();
  return Array.from(new Set(movies.map((m: any) => m.category)));
};
