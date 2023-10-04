"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { Spinner } from "@nextui-org/react";
import Skeleton from "@/components/Skeleton";

interface ImageLoaderProps
  extends React.ComponentPropsWithoutRef<typeof Image> {
  loaderType?: "spinner" | "skeleton";
  src: StaticImageData | string;
  alt: string;
}

const ImageLoader = ({
  loaderType = "skeleton",
  src,
  alt,
  ...props
}: ImageLoaderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    // set isLoading to false after a delay
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0">
          {loaderType === "spinner" ? (
            <Spinner color="default" className="absolute inset-0" />
          ) : (
            <Skeleton rows={0} showOverlay={false} />
          )}
        </div>
      )}

      <Image
        src={src}
        alt={alt !== "" ? alt : "image"}
        onLoad={handleImageLoad}
        {...props}
      />
    </>
  );
};

export default ImageLoader;
