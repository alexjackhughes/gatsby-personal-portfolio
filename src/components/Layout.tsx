import React from "react";

const Layout: React.FC = ({ children }) => (
  <div className="container">
    <div className="columns">
      <div className="column is-three-quarters">{children}</div>
    </div>
  </div>
);

export default Layout;
