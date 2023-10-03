const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchImages(
  id: string | number,
  type: "movie" | "tv",
): Promise<ImagesData> {
  try {
    const response = await fetch(
      `${BASE_URL}/${type}/${id}/images?api_key=${API_KEY}&include_image_language=en,null`,
    );

    if (!response.ok) {
      // Parse the error response as JSON to extract status_message
      const errorResponse = await response.json();
      const errorMessage =
        errorResponse?.status_message || "Unknown error occurred";
      throw new Error(errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    throw new Error(errorMessage);
  }
}
