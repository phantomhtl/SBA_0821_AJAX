export const fetchRandomArtwork = async () => {
  try {
    const response = await axios.get(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,thumbnail,image_id,thumbnail?page=1&limit=100"
      // "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id,thumbnail"
    );
    const artworks = response.data.data;
    const randomNum = Math.floor(Math.random() * artworks.length);
    const randomArtwork = artworks[randomNum];
    return randomArtwork;
  } catch (error) {
    console.error("Error fetching artwork:", error);
    throw error;
  }
};

export const searchArtworks = async (query) => {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(
        query
      )}&fields=id,title,artist_display,date_display,thumbnail,image_id`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }

    const data = await response.json();
    const artworks = data.data;

    if (artworks.length === 0) {
      throw new Error("No artworks found");
    }

    return artworks;
  } catch (error) {
    console.error("Error searching artworks:", error);
    throw error;
  }
};
