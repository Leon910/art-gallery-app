import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/art";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error || !data) {
    return <h1>Error: {error}</h1>;
  }

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    console.log(artPiece);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} data={data} />
      </Layout>
    </>
  );
}
