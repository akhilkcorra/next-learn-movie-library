import { readMovies } from "@/lib/storage";

export const movies = (_: any, args: { category?: string }) => {
  const data = readMovies();
  if (args.category) {
    return data.filter((m: any) => m.category === args.category);
  }
  return data;
};
