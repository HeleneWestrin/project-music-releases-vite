import { AlbumItem } from "./AlbumItem";

export const AlbumList = ({ title, albumType, items }) => {
  return (
    <section className="album__list">
      <h2 className="album__list__title">{title}</h2>
      {items
        .filter((item) => item.album_type === albumType) // Filter based on albumType
        .map((item) => {
          const albumName = item.name || "Unknown album name";
          const albumType = item.album_type || "Misc";
          const albumUrl = item.external_urls?.spotify || "No album URL";
          const firstImageUrl = item.images?.[0]?.url || "No image available";
          const albumId = item.id || "No album ID";

          return (
            <AlbumItem
              key={albumId}
              image={firstImageUrl}
              albumType={albumType}
              albumName={albumName}
              albumUrl={albumUrl}
              artists={item.artists}
            />
          );
        })}
    </section>
  );
};
