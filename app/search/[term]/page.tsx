import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage(props: Props) {
  const {
    params: { term },
  } = props;

  if (!term) {
    return notFound();
  }
  const searchTerm = decodeURI(term);

  const movies = await getSearchMovies(searchTerm);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-4xl font-bold px-10">Results for {searchTerm}</h1>
        <MovieCarousel movies={movies} title="Movies" isVertical />
        <MovieCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  );
}

export default SearchPage;
