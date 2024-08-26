import { fetchRandomArtwork, searchArtworks } from "./api.mjs";
import { updateArtworkUI, displayMultipleArtworks, clearArtworksContainer} from "./ui.mjs";

document.getElementById("loadArtwork").addEventListener("click", async () => {
  try {
    clearArtworksContainer();
    const randomArtwork = await fetchRandomArtwork();
    updateArtworkUI(randomArtwork);
  } catch (error) {
    console.error("Failed to load artwork:", error);
  }
});

document.getElementById("searchArtwork").addEventListener("click", async () => {
  const query = document.getElementById("searchQuery").value.trim();
  if (!query) {
    alert("Please enter a search term");
    return;
  }
  try {
    clearArtworksContainer();
    const searchResults = await searchArtworks(query);
    if (searchResults.length > 0) {
      displayMultipleArtworks(searchResults);
      // updateArtworkUI(searchResults[0]);
    } else {
      alert("No artworks found for your search.");
    }
  } catch (error) {
    console.error("Failed to search artworks:", error);
    alert("An error occurred while searching for artworks.");
  }
});
