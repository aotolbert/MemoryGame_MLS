import React from "react";

const Image = ({ link, styler }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={`${link}`} className="img-thumbnail shadow-lg p-3 mb-5 bg-white rounded p-3 mx-4">
    </img>
  );

  export default Image;