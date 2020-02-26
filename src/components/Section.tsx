import React from "react";
import CountUp from "react-countup";
import Layout from "./Layout";
import Blurb, { Icon } from "./Blurb";

interface Props {
  company: string;
  color?: string;
  title: string;
  description: string;
  counter: {
    start: number;
    end: number;
  };
  icons: Icon[];
}

const Section: React.FC<Props> = ({
  company,
  color = "is-light",
  title,
  description,
  counter: { start, end },
  icons
}) => (
  <>
    <section className={`hero is-medium is-fullheight ${color}`}>
      <div className="hero-head has-margin-top-large">
        <div className="container">
          <h2
            className="title is-1 is-pulled-right has-right-margin-on-mobile transparent"
            id="hero-title"
          >
            <CountUp
              start={start}
              end={end}
              duration={3}
              // startOnMount={() => setTimeout(5)}
              delay={5} // TODO: set onStart with Tornis based on percentage of page viewed
            />
          </h2>
        </div>
      </div>
      <div className="hero-body">
        <Layout>
          <p className="heading is-size-7">{company}</p>
          <h2 className="title is-1">{title}</h2>
          <h3 className="subtitle white-space">{description}</h3>
        </Layout>
      </div>
      <div className="hero-foot has-margin-bottom-large">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <nav className="level is-mobile">
                {icons.map((blurb, index) => (
                  <Blurb key={index} blurb={blurb} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-bottom">
        <TopCurve className="curve is-marginless is-paddingless" />
      </div> */}
    </section>
  </>
);

export default Section;
