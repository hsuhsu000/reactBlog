import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const PostForm = ({ header, btnText, oldPostData }) => {
  const data = useActionData();
  return (
    <section className="form-section w-75 mx-auto ">
      <div className="header">
        <div className="date">
          <h4>{header}</h4>
        </div>
        <Link to={"/"}>
          <ArrowLeftIcon className="icon"></ArrowLeftIcon>
        </Link>
      </div>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <Form method="post">
        <div className="form-group">
          <label htmlFor="form-title">Title</label>
          <input type="text" className="form-control" id="form-title" name="title" required defaultValue={oldPostData ? oldPostData.title : ""} />
        </div>
        <div className="form-group">
          <label htmlFor="form-image">Image</label>
          <input type="url" className="form-control" id="form-image" name="image" required defaultValue={oldPostData ? oldPostData.image : ""} />
        </div>
        <div className="form-group">
          <label htmlFor="form-date">Date</label>
          <input type="date" className="form-control" id="form-date" name="date" required defaultValue={oldPostData ? oldPostData.date : ""} />
        </div>
        <div className="form-group">
          <label htmlFor="form-description">Description</label>
          <textarea name="description" id="form-description" cols="30" rows="5" className="form-control" required defaultValue={oldPostData ? oldPostData.description : ""}></textarea>
        </div>
        <br />
        <button className="btn btn-dark">{btnText}</button>
      </Form>
    </section>
  );
};

export default PostForm;
