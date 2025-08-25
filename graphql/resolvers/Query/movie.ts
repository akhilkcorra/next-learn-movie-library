import { readMovies } from "@/lib/storage";

export const movie = (_: any, args: { id: string }) => {
  return readMovies().find((m: any) => m.id === args.id) || null;
};
