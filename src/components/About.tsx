import React from "react";
import Layout from "./Layout";
import { ReactComponent as BottomCurve } from "../images/curves/white.svg";

const About: React.FC = () => (
  <>
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <Layout>
          <h2 className="title is-1">Who the heck am I?</h2>
          <h3 className="subtitle">
            I'm Alexander Jack Hughes. But you can call me Alex.
          </h3>
          <h3 className="subtitle">
            To give you a brief history lesson; I've been building software
            startups for the better part of a decade, with tech stacks mainly in
            Node & React (with a smattering of TypeScript thrown in for good
            measure).
          </h3>
          <h3 className="subtitle">
            In between I received an MSc in Computer Science, and had a few
            pieces about startups and coding{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hackernoon.com/@alex"
            >
              published by Hackernoon
            </a>
            .
          </h3>
          <h3 className="subtitle">But enough about me, how have you been?</h3>
        </Layout>
      </div>
      <div className="hero-bottom">
        <BottomCurve className="curve" />
      </div>
    </div>
  </>
);

export default About;
