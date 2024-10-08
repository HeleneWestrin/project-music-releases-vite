import { AlbumItem } from "./AlbumItem";

export const AlbumList = ({ items }) => {
  return (
    <section className="album__list">
      {items.map((item) => {
        const albumName = item.name || "Unknown album name";
        const albumUrl = item.external_urls?.spotify || "No album URL";
        const firstImageUrl = item.images?.[0]?.url || "No image available";
        const albumId = item.id || "No album ID";

        return (
          <AlbumItem
            key={albumId}
            image={firstImageUrl}
            albumName={albumName}
            albumUrl={albumUrl}
            artists={item.artists}
          />
        );
      })}
    </section>
  );
};
