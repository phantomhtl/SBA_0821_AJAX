

export const updateArtworkUI = (artwork) => {
  document.getElementById('artworkTitle').textContent = artwork.title || 'Title: Unknown';
  document.getElementById('artworkArtist').textContent = `Artist: ${artwork.artist_display || 'Unknown'}`;
  document.getElementById('artworkDate').textContent = `Date: ${artwork.date_display || 'Unknown'}`;
  document.getElementById('artworkImage').src = artwork.image_id 
      ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` 
      : '';
  document.getElementById('artworkAltText').textContent = artwork.thumbnail?.alt_text || 'Alt Text: None';
};


// Update this function to create and append HTML for each artwork item
export const displayMultipleArtworks = (artworks) => {
  const container = document.getElementById("artworksContainer");
  container.innerHTML = ""; 

  artworks.forEach((artwork) => {
    const artworkDiv = document.createElement("div");
    artworkDiv.classList.add("artwork-item");

    const title = artwork.title || "Title: Unknown";
    const artist = artwork.artist_display || "Artist: Unknown";
    const date = artwork.date_display || "Date: Unknown";
    const imageSrc = artwork.image_id
      ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
      : "path/to/placeholder.jpg"; // Replace with an actual placeholder image if needed
    const altText = artwork.thumbnail?.alt_text || "No alternative text available";

    artworkDiv.innerHTML = `
      <h2>${title}</h2>
      <p>${artist}</p>
      <p>${date}</p>
      <img src="${imageSrc}" alt="${altText}" />
      <p>${altText}</p>
    `;

    container.appendChild(artworkDiv);
  });
};

export const clearArtworksContainer = () => {
  const container = document.getElementById("artworksContainer");
  container.innerHTML = ""; // Clear the container content
};
