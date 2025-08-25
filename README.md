# Movie Catalog Boilerplate (Next.js + App Router + GraphQL + HeroUI)

## Overview

This boilerplate is a **movie catalog application** built with **Next.js App Router**, **GraphQL Yoga**, and **HeroUI**.
It is designed to help the team practice working with API routes, GraphQL queries/mutations, Server Actions, and UI integration using HeroUI.

The backend data is stored in a JSON file (`/data/movies.json`). **Please copy the initial data from `/data/initial_movies.json` to `/data/movies.json` before starting.**

- Data persists across requests.
- Data resets when the server restarts.

---

## What to Build

### Pages

1. **Home Page** (`/movies`)

   - Display all movies.
   - Allow filtering by category (menu navigation in Navbar).
   - Each movie shows poster, title, rating, and category.

2. **Movie Details Page** (`/movies/[id]`)

   - Show details of a single movie.
   - Display reviews for the movie.
   - Allow adding a new review.

3. **Add Movie Page** (`/add-movie`)

   - A form to create a new movie.
   - Fields: title, description, poster URL, category.

4. **Categories Menu** (in Navbar)

   - A menu showing categories of movies.
   - Clicking filters movies on the Home Page.

---

## API (GraphQL)

Single endpoint:

```
/api/graphql
```

### Queries

- **getMovies(category?: String)** → List all movies (optionally filtered by category).
- **getMovie(id: ID!)** → Fetch details of a single movie.
- **getCategories** → Get list of unique categories.

### Mutations

- **addMovie(title, description, category, posterUrl)** → Add a new movie.
- **addReview(movieId, reviewer, comment, rating)** → Add a review to a movie.
- **updateMovie(id, title?, description?, category?, posterUrl?)** → Update details of a movie.
- **deleteMovie(id)** → Remove a movie.

---

## GraphiQL

GraphiQL is enabled at:

```
http://localhost:3000/api/graphql
```

Default queries loaded in the explorer:

- Get all movies
- Get categories
- Add a new movie

---

## Development Notes

- Use **HeroUI** for building UI components ([HeroUI Docs](https://www.heroui.com/docs/components)).
- Use **Server Actions** wherever possible for mutations (add, update, delete, review).
- No external APIs are needed.
- Data changes will persist only until the server restarts.

---

## Deployment

### Deploy on Vercel (UI Method)

1. **Create a Vercel account**: [https://vercel.com/signup](https://vercel.com/signup).

2. **Push your project to GitHub (or GitLab/Bitbucket)**.

3. **Import project into Vercel**: [https://vercel.com/dashboard](https://vercel.com/dashboard) → _New Project_.

4. Select your repo and click **Import**.

5. Vercel auto-detects Next.js, leave defaults (`next build`, `.next`).

6. Click **Deploy**.

7. You’ll get a live URL like:

   ```
   https://your-project-name.vercel.app
   ```

8. Every new commit to your repo will auto-deploy.

Reference: [Vercel Next.js Deployment Guide](https://vercel.com/docs/frameworks/nextjs)

---

## Next Steps for Developers

1. Start with the **Home Page** to list movies.
2. Add **Movie Details Page** with reviews.
3. Implement **Add Movie Page**.
4. Add **Category Menu** in Navbar.
5. Polish UI with HeroUI components for consistency.

---

## GraphQL Implementation Notes

- The GraphQL endpoint (`/api/graphql`) is implemented using **GraphQL Yoga**.
- Data is read/written from `/data/movies.json`. This acts as a lightweight database.
- Queries and resolvers are split into separate folders instead of a single `graphql/route.ts` file for clarity:

  - `/graphql/schema/` → Schema definitions.
  - `/graphql/queries/` → Query resolvers (e.g., `getMovies.ts`, `getMovie.ts`).
  - `/graphql/mutations/` → Mutation resolvers (e.g., `addMovie.ts`, `addReview.ts`).
  - `/graphql/context.ts` → Handles loading/saving JSON data.

For detailed implementation steps, refer to:
👉 [GraphQL Implementation Guide](./GRAPHQL_IMPLEMENTATION.md)
