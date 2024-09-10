import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function SpotlightPiece({ pieces }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomArtPiece = getRandomElement(pieces);
  return (
    <StyledSpotlightContainer>
      <ArtPiecePreview
        image={randomArtPiece.imageSource}
        title={randomArtPiece.name}
        artist={randomArtPiece.artist}
        height={288}
        width={288}
      />
    </StyledSpotlightContainer>
  );
}
const StyledSpotlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
