import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error || !data) {
    return <h1>Error: {error}</h1>;
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
