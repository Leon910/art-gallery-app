import styled from "styled-components";
import Image from "next/image";

const StyledButton = styled.button`
  position: ${({ $positionAbsolute }) =>
    $positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 1.5rem;
  z-index: 1;
  background-color: ${(props) => (props.$isFavorite ? "lightcoral" : "white")};
  border: 3px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  positionAbsolute,
}) {
  return (
    <StyledButton
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "Unfavorite" : "Favorite"}
      $isFavorite={isFavorite}
      positionAbsolute={positionAbsolute}
    >
      <Image
        src="/images/heart.svg"
        alt={isFavorite ? "Unfavorite" : "Favorite"}
        width={24}
        height={24}
        className={isFavorite ? "favorite" : "not-favorite"}
      />
    </StyledButton>
  );
}
