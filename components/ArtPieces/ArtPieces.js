import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <StyledList key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`} passHref>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={144}
              width={144}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
            />
          </Link>
        </StyledList>
      ))}
    </ul>
  );
}
const StyledList = styled.li`
  list-style-type: none;
`;
