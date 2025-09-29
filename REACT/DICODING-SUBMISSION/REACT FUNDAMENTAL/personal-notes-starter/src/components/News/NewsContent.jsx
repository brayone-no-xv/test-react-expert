import React from "react";
import PropTypes from "prop-types";

export default function NewsContent({
  title,
  description,
  image,
  isFeatured,
  tags = [],
  bookmark,
  style,
}) {
  // const response = await fetch(NewsContent);
  // const data = await response.json();

  // console.log(data.tags);

  return (
    <article style={style}>
      <img src={image} alt={title} />
      {isFeatured && (
        <p>
          <strong>Hot News!</strong>
        </p>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <div>{tags.map( (tag) => <p key={NewsContent.title}>`${tag}`</p>)}</div>
      <button onClick={bookmark}>Bookmark</button>
    </article>
  );
}

NewsContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  bookmark: PropTypes.func.isRequired,
  style: PropTypes.object,
};
