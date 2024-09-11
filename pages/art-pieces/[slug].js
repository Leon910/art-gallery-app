import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function ArtPiecePage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [artPiece, setArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [setArtPiece, pieces, slug]);

  if (!artPiece) {
    // Optionally render a loading state or nothing while artPiece is null
    return <p>Loading...</p>;
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === artPiece.slug)?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
    />
  );
}
