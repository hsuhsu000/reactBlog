import React from "react";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";

const PostItem = ({ posts }) => {
  const { id, title, date, image } = posts;
  return (
    <section className="post">
      <Link to={`${id}`}>
        <img src={image} alt={title} />
      </Link>
      <br />
      <br />
      <Link to={`${id}`}>
        <h4 className="title">{title}</h4>
      </Link>

      <p className="date">
        <ClockIcon className="icon"></ClockIcon>
        <span>{date}</span>
      </p>

      <hr />
    </section>
  );
};

export default PostItem;
