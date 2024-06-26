import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import { getToken } from "../util/getToken";
const Detail = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <>
      <PostDetails post={post}></PostDetails>
    </>
  );
};

export default Detail;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};

export const action = async ({ request, params }) => {
  const token = getToken();
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
  }
  return redirect("/");
};
