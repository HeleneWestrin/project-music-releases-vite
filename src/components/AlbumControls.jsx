import { PlayButton } from "./PlayButton";
import { FavoriteButton } from "./FavoriteButton";
import { MenuButton } from "./MenuButton";

export const AlbumControls = ({ className }) => {
  return (
    <nav className={`album__controls ${className}`} aria-label="Album controls">
      <FavoriteButton />
      <PlayButton />
      <MenuButton />
    </nav>
  );
};
