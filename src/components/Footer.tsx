import React from 'react';
import moment from 'moment';

const Footer: React.FC = () => (
  <>
    <footer className="footer is-primary" style={{ marginTop: '-0.5rem' }}>
      <div className="content has-text-centered">
        <p>
          Built with <i className="fad fa-heart-circle has-text-danger" />
        </p>
        <p>Alexander Jack Hughes © {moment().format('YYYY')}</p>
      </div>
    </footer>
  </>
);

export default Footer;
