import { Suspense } from "react";
import dynamic from "next/dynamic";

import MovieDetailsTop from "@/components/application-group/movie-route/MovieDetailsTop";
// import RecommendedMediaList from "@/components/application-group/recommendations/RecommendedMediaList";
// import DetailsAboutShowSection from "@/components/application-group/DetailsAboutShowSection";
import ExplorerPanel from "@/components/application-group/ExplorerPanel";
import AnimatedStringLoader from "@/components/AnimatedStringLoader";

// lazy load the following components
const RecommendedMediaList = dynamic(
  () =>
    import(
      "@/components/application-group/recommendations/RecommendedMediaList"
    ),
);
const DetailsAboutShowSection = dynamic(
  () => import("@/components/application-group/DetailsAboutShowSection"),
);

type PageProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: PageProps) => {
  //  id from the params is a string with the movie id and the movie name seperated by a dash, so we split the string and get the id
  const movieId = params.id.split("-").pop() as string;

  const tabConfigs = [
    {
      key: "recommended",
      title: "More Like This",
      content: <RecommendedMediaList mediaId={movieId} mediaType="movie" />,
    },
    {
      key: "details",
      title: "Details",
      content: <DetailsAboutShowSection mediaId={movieId} mediaType="movie" />,
    },
  ];

  return (
    <section className=" text-white">
      {/* Top Section */}
      <div className="relative h-[90dvh] flex-1 sm:h-[90dvh] md:h-[85dvh] lg:h-[85dvh] ">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedStringLoader loadingString="..." />
            </div>
          }
        >
          <MovieDetailsTop movieId={movieId} />
        </Suspense>
      </div>
      {/* Middle Section */}

      <Suspense fallback={null}>
        <ExplorerPanel tabConfigs={tabConfigs} />
      </Suspense>
    </section>
  );
};

export default page;
