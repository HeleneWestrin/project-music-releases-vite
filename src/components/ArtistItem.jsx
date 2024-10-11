export const ArtistItem = ({ name, url, isLast, isNextToLast }) => {
  return (
    <>
      <a className="artist__link" href={url} target="_blank" rel="noreferrer">
        <span className="sr-only">Artist or group:</span> {name}
      </a>
      {/* Determine how to format when there are multiple artists for a track */}
      {!isLast && !isNextToLast && ", "}
      {isNextToLast && " & "}
    </>
  );
};
