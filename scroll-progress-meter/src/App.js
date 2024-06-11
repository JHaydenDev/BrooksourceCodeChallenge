import React from "react";
import ProgressMeter from "./components/ProgressMeter";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <ProgressMeter />
      <Header />

      <div className="content p-4 mt-4 max-w-4xl mx-auto">
        <a
          href="https://www.ajc.com/sports/atlanta-braves/"
          className="text-link-blue"
        >
          ATLANTA BRAVES
        </a>
        <h1
          className="text-5xl font-bold mb-4 font-serif
"
        >
          No Braves broadcasts? Possible solutions and a lot of frustration to
          Comcast/Bally’s dispute
        </h1>
        <div
          className="font-medium text-lg	
          font-serif pb-4
"
        >
          Reponses to AJC callout for how customers are watching the Braves.
        </div>
        <img
          src={
            "https://www.ajc.com/resizer/0A3PTLKPeZHrnPa8ZafX-j7yffg=/850x480/cloudfront-us-east-1.images.arcpublishing.com/ajc/F3CSKSVTK57KAEH4RO4YHBWBKA.JPG"
          }
          alt="1"
        />

        <p className="my-6 text-caption-text">
          John Gonzalez reacts in the ninth inning at the Braves home opening
          day game versus the Diamondbacks at Truist Park in Atlanta on Friday,
          April 5, 2024. (Arvin Temkar / arvin.temkar@ajc.com)
        </p>

        <p className="mb-4">
          There are two ways for fans to watch the Atlanta Braves this season
          without access to Bally Sports. The first one comes with the least
          aggravation and frustration but carries the highest cost: switch to
          DirecTV or AT&T U-verse.
        </p>
        <p className="mb-4">
          The second way is cheaper but more of a hassle: stream games illegally
          by finding free internet sites with ads, popups, poor picture quality,
          and sometimes a broadcast that lags behind the real-time action.
        </p>
        <p className="mb-4">
          The ongoing impasse between Sinclair Broadcast Group, which owns the
          Bally Sports networks, and Comcast has caused great frustration for
          Atlanta sports fans, many of whom no longer have access to Braves
          games on Bally Sports South and Bally Sports Southeast. The two
          companies have been unable to agree on a new carriage contract,
          resulting in the removal of the Bally Sports networks from Comcast’s
          channel lineup.
        </p>
        <p className="mb-4">
          For now, fans in the Braves’ TV territory who don’t have access to
          Bally Sports via a traditional or streaming TV provider must choose
          between switching providers, finding illegal streams, or waiting and
          hoping that Sinclair and Comcast will reach an agreement at some
          point.
        </p>
        <p className="mb-4">
          The two companies have been at odds over the terms of a new carriage
          agreement since their previous contract expired in September. Sinclair
          has claimed that Comcast is demanding unfair rates, while Comcast has
          accused Sinclair of demanding a significant increase in carriage fees.
        </p>
        <p className="mb-4">
          Fans who are unwilling or unable to switch providers have taken to
          social media to express their frustration and seek alternative ways to
          watch the Braves. Some fans have found success with streaming services
          such as MLB.TV, which offers out-of-market games but blacks out games
          in the Braves’ TV territory.
        </p>
        <p className="mb-4">
          Others have resorted to using VPN services to bypass MLB.TV’s blackout
          restrictions, though this practice is technically against the
          service’s terms of use. Meanwhile, fans without access to Bally Sports
          or alternative streaming options are left in the dark, unable to watch
          their favorite team.
        </p>
        <p className="mb-4">
          The situation has also drawn the attention of lawmakers. In March, a
          group of U.S. senators sent a letter to Sinclair CEO Chris Ripley and
          Comcast CEO Brian Roberts urging the two companies to resolve their
          dispute and restore access to Bally Sports networks for Comcast
          subscribers.
        </p>
        <p className="mb-4">
          “The prolonged blackout of Bally Sports networks on Comcast’s systems
          is unfair to the millions of sports fans who rely on these channels to
          watch their favorite teams,” the senators wrote. “We urge you to come
          to an agreement as soon as possible to ensure that fans are not
          unfairly penalized by this corporate dispute.”
        </p>
        <p className="mb-4">
          For now, the stalemate continues, and Braves fans without access to
          Bally Sports must find alternative ways to watch their team or wait
          and hope for a resolution.
        </p>
      </div>
    </div>
  );
};

export default App;
