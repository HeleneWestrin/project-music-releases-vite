import { useState } from "react";
import { AlbumControls } from "./AlbumControls";
import { ArtistItem } from "./ArtistItem";

export const AlbumItem = ({ image, albumName, albumUrl, artists }) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  // Combined state to determine when AlbumControls should be shown
  const showControls = hovered || focused;

  return (
    <article
      className="album__item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="album__cover">
        <img className="album__image" src={image} alt="" />
        <AlbumControls className={showControls ? "is-visible" : ""} />
      </div>
      <div className="album__info">
        <h2 className="album__name">
          <a href={albumUrl} className="album__link">
            {albumName}
          </a>
        </h2>
        {artists.map((artist, index) => (
          <ArtistItem
            key={artist.id}
            name={artist.name}
            url={artist.external_urls.spotify}
            isLast={index === artists.length - 1}
          />
        ))}
      </div>
    </article>
  );
};
