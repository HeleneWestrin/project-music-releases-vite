import data from "./data.json";
import { AlbumList } from "./components/AlbumList";

export const App = () => {
  return (
    <main>
      <div className="grid-container">
        <header>
          <h1>Music Collection</h1>
        </header>
        <AlbumList items={data.albums.items} />
      </div>
    </main>
  );
};
