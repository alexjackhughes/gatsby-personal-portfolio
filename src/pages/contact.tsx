import React from 'react';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import TopCurve from '../assets/curves/primary.svg';

const Contact: React.FC = () => (
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
                <textarea
                  className="textarea"
                  placeholder="What do you want to talk about?"
                />
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
        <TopCurve />
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
