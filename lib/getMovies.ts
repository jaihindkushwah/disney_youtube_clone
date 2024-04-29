import { SearchResults } from "@/typings";

export default async function fetchFromTMDB(url: URL, catchTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };
  const response = await fetch(url, options);
  const data = (await response.json()) as SearchResults;

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);

  return await data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);

  return await data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);

  return await data.results;
}

export async function getDiscoverMovies(id?: string, keyword?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  if (id) url.searchParams.set("with_genres", id);
  if (keyword) url.searchParams.set("with_keywords", keyword);
  const data = await fetchFromTMDB(url);

  return await data.results;
}
export async function getSearchMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  const data = await fetchFromTMDB(url);

  return await data.results;
}
