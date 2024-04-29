import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* <h1>Let&apos;s build a disney</h1> */}
      <CarouselBannerWrapper />
      {/* Carousel Banner Wrapper*/}
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={topRatedMovies} title="Top Rated Movies" />
        <MovieCarousel movies={popularMovies} title="Popular Movies" />
      </div>
    </main>
  );
}
