import React from "react";

function Links({ links }) {
  let linkHTML = links
    .map((link) => `<a href=${link.url}>${link.text}</a>`)
    .join(" • ");

  return <p dangerouslySetInnerHTML={{ __html: linkHTML }} />;
}

export default Links;
