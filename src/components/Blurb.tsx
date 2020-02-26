import React from "react";

export interface Icon {
  icon: string;
  heading: string;
  title: string;
  color: string;
}

interface Props {
  blurb: Icon;
}

const Blurb: React.FC<Props> = ({ blurb: { icon, color, heading, title } }) => (
  <div className="level-item has-text-centered">
    <div>
      <span className={`icon fad ${icon} fa-3x is-large ${color}`} />
      <p className="heading">{heading}</p>
      <p className="title">{title}</p>
    </div>
  </div>
);

export default Blurb;
