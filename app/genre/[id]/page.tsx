import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage(props: Props) {
  const {
    params: { id },
  } = props;
  const {
    searchParams: { genre },
  } = props;

  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure OpenAI service suggestions */}
      <div className=" flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-4xl font-bold px-10">Results for {genre}</h1>
      </div>
      <MovieCarousel movies={movies} title="Movies" isVertical />
    </div>
  );
}

export default GenrePage;
