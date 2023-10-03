import ImageLoader from "@/components/ImageLoader";

import { AspectRatio } from "../ui/aspect-ratio";

type BackgroundPosterProps = {
  poster_path: string;
  backdrop_path: string | null;
  alt: string;
  priority?: boolean;
  imageClassNames?: string;
};

const BASE_IMG_URL = process.env.NEXT_PUBLIC_OG_TMBD_IMG_PATH;

const ResponsiveBackgroundPoster = ({
  poster_path,
  backdrop_path,
  alt,
  priority,
  imageClassNames,
}: BackgroundPosterProps) => {

  const backdropImgSrc = backdrop_path ? `${BASE_IMG_URL}${backdrop_path}` : null;
  const posterImgSrc = `${BASE_IMG_URL}${poster_path}`;

  return (
    <>
      {/* 
         show the backdrop_path img on larger screens.
         if backdrop_path is null, use the poster_path
      */}
      <div className="ml-auto hidden h-full w-[60%] md:flex">        
          <AspectRatio ratio={16 / 9}>
            <ImageLoader
              src={`${backdropImgSrc ? backdropImgSrc : posterImgSrc}`}
              alt={alt}
              fill
              sizes="100vw"
              priority={priority}
              className={`absolute inset-0 bg-no-repeat object-cover ${imageClassNames}`}
            />
          </AspectRatio>        
      </div>

      {/* show the poster_path img on smaller screens */}
      <div className="md:hidden">
        <ImageLoader
          src={posterImgSrc}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className={`absolute inset-0 bg-no-repeat object-cover  ${imageClassNames}`}
        />
      </div>
    </>
  );
};

export default ResponsiveBackgroundPoster;
