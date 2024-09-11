import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <StyledLink href="/art-pieces">
        <StyledButton>Go to Gallery</StyledButton>
      </StyledLink>

      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        height={288}
        width={288}
      />
      <StyledDescription>
        <p>
          <strong>Year: </strong>
          {year}
        </p>
        <p>
          <strong>Genre: </strong> {genre}
        </p>
      </StyledDescription>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #845e3c;
  color: #c4c4c4;
  margin: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #47a51f;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  background-color: #d2d5db;
`;
