import React from "react";

const TagsSpan = ({ tags }) => {
  let tagsWithComma = tags?.slice(0, -1).map((tag) => `#${tag},`);
  const lastTagArray = tags?.slice(-1);
  tagsWithComma?.push(`#${lastTagArray[0]}`);
  let tagsSpan = tagsWithComma?.map((tag) => <span key={tag}>{tag} </span>);

  return tagsSpan;
};

export default TagsSpan;
