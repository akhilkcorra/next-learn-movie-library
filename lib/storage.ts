import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "movies.json");

export function readMovies() {
  const data = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(data);
}

export function writeMovies(movies: any[]) {
  fs.writeFileSync(dataFile, JSON.stringify(movies, null, 2));
}
