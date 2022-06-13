import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet/index";

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Sinanis Scott"
        slug="sinanisscott"
        datetime={new Date("2022-05-3")}
        text={`Umarım haklı çıkarsın ama hiç sanmyorum, 
  
umarım ben yanılıyorumdur ama dediğim gibi hiç sanmıyorum.`}
      ></Tweet>

      <Tweet
        name="Sinanis Scott"
        slug="sinanisscott"
        datetime={new Date("2022-04-3")}
        text={`yurt disi gezilerime giderken sahip oldugum heyecan, yurtdisindan italya’ya donerken daha yuksek oluyor. lan italya ben seni nasil birakacagim? ikinci defa asik olma hissiyatini yasattin bana.`}
      ></Tweet>
    </Layout>
  );
}

export default HomePage;
