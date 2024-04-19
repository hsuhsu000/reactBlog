import React from "react";
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const isToken = useRouteLoaderData("root");
  const { image, title, date, description } = post;
  const submit = useSubmit();
  const postDeleteHandler = () => {
    const confirmStatus = window.confirm("Are you sure want to delete?");

    if (confirmStatus === true) {
      submit(null, { method: "DELETE" });
    }
  };
  return (
    <section className="post">
      <h4>{title}</h4>
      <div className="header">
        <div className="date">
          <CalendarDaysIcon className="icon"></CalendarDaysIcon>
          <span>{date}</span>
        </div>
        <Link to={"/"}>
          <ArrowLeftIcon className="icon"></ArrowLeftIcon>
        </Link>
      </div>

      <img src={image} alt={title}></img>
      <p>{description}</p>
      {isToken && (
        <div className="detail-footer">
          <Link to={"edit-post"}>
            <p className="btn btn-dark">Edit</p>
          </Link>

          <p className="btn btn-danger" onClick={postDeleteHandler}>
            Delete
          </p>
        </div>
      )}
    </section>
  );
};

export default PostDetails;
