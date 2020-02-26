import React from 'react';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';

const Contact: React.FC = ({ data }) => {
  console.log('woo', data);
  return (
    <>
      <div className="hero is-medium is-fullheight">
        <Navigation />
        <div className="hero-body">
          <Layout>
            <h1 className="title is-1" id="hero-title">
              Let's talk
            </h1>
            <h3 className="subtitle">
              If you ever want just want to ask me a question, or get in touch -
              send me an email below. I'll usually respond instantly because I'm
              sad like that.
            </h3>
            <form>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-primary"
                    type="email"
                    placeholder="johnny@cash.com"
                  />
                  <span className="icon is-small is-left">
                    <i className="fad fa-mailbox" />
                  </span>
                </p>
              </div>
              <div className="field is-primary">
                <p className="control ">
                  <textarea className="textarea" placeholder="Textarea" />
                </p>
              </div>
              <button className="button is-rounded is-primary is-outlined">
                <span className="icon is-medium">
                  <i className="fad fa-paper-plane" />
                </span>
                <span className="has-text-weight-bold">Send message</span>
              </button>
            </form>
          </Layout>
        </div>
        <div className="hero-bottom">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="curve is-marginless is-paddingless flip-horizontal"
          />
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "images/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Contact;
