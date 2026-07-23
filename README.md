# 🎬 Screenly

A simple, but not simplistic, movie catalog. Built with React + TypeScript, powered by TMDB — search movies, sort them, filter by genre, all without annoying delays or UI flicker.

This isn't a "20-minute tutorial clone." Building it meant actually thinking through request architecture, race conditions, and the fact that TMDB's API flat out refuses to give you search and filters at the same time (more on that below — it's a whole story).

## What's inside

- **Pagination that doesn't flicker** — the old page stays on screen while the new one loads
- **Sorting** — by popularity, rating, and title (A-Z and Z-A)
- **Genre filter**, pulled straight from TMDB
- **Search** that doesn't spam the API on every keystroke (debounce saves the day)
- **Background refetch indicator** — so you always know data is loading, even while the old table is still visible

## The most interesting technical problem

TMDB's API is oddly designed: the endpoint for sorting and filtering (`/discover/movie`) can't do text search, and the endpoint for search (`/search/movie`) can't sort or filter. I checked TMDB's official forum, and the team straight up admitted there's no way to combine these on the API level — "you'll have to build that yourself."

So that's what I did: when search is active, I take the raw results from `/search/movie` and filter/sort them myself on the client — turns out TMDB still returns a `genre_ids` field even in search results, so the genre filter doesn't get lost.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Query (React Query v5)
- TMDB API

## Getting started
git clone https://github.com/your-username/screenly.git
cd cinescope
npm install



Create a `.env` file in the root (grab a free key at [themoviedb.org](https://www.themoviedb.org/settings/api)):
VITE_TMDB_API_KEY=your_key_here



Then run:
npm run dev



## How the code is organized

Each feature (pagination, sorting, filtering, search) lives in its own folder with separate `Container` (logic) and `View` (markup) components — makes the code easier to read and test than dumping everything into one giant file.

## What's next

- ARIA attributes on the loading indicator, so screen readers understand what's happening too
- Migrating to Feature-Sliced Design
- A movie details page (with lazy loading)
- Favorite movies with local storage and optimistic UI

## License

This is a learning project. Movie data comes from TMDB, but the project itself is not affiliated with or endorsed by TMDB in any way.
