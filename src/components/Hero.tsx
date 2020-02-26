import React from "react";
import Navigation from "./Navigation";
import Layout from "./Layout";
import ReactRotatingText from "react-rotating-text";

import { ReactComponent as TopCurve } from "../images/curves/primary.svg";

const items: string[] = [
  "startup founder",
  "Node back-end engineer",
  "TypeScript aficionado",
  "React front-end developer",
  "AWS-certified architect",
  "coding mentor"
];

const Hero: React.FC = () => (
  <>
    <div className="hero is-medium is-fullheight">
      <Navigation />
      <div className="hero-body">
        <Layout>
          <h1 className="title is-1" id="hero-title">
            Hi, I'm Alex!
          </h1>
          <h2 className="subtitle" id="hero-tagline">
            I'm a{" "}
            <ReactRotatingText items={items} className="has-text-primary" />.
          </h2>
        </Layout>
      </div>
      <div className="hero-bottom">
        <TopCurve className="curve is-marginless is-paddingless flip-horizontal" />
      </div>
    </div>
  </>
);

export default Hero;
