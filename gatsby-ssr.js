import React from 'react';

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      src="https://kit.fontawesome.com/4a7fc4f53c.js"
      crossorigin="anonymous"
    />,
    <link
      rel="stylesheet"
      href="path/to/font-awesome/css/font-awesome.min.css"
    />,
  ]);
}
