export const ArtistItem = ({ name, url, isLast }) => {
  return (
    <>
      <a className="artist__link" href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
      {!isLast && ", "}
    </>
  );
};
