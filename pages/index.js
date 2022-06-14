import React from "react";
import useSWR from "swr";

import Layout from "../components/layout";
import fetcher from "../lib/fetch";
import Tweet from "../components/tweet/index";

function HomePage() {
  const { data, error } = useSWR("/api/tweet", fetcher);
  return (
    <Layout>
      {error && <p>An error has occured</p>}
      {!data && <p>Loading</p>}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet}></Tweet>;
      })}
    </Layout>
  );
}

export default HomePage;
