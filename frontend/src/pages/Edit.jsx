import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";
import { getToken } from "../util/getToken";
const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm header={"Edit Your Post Here!"} btnText={"Update"} oldPostData={post}></PostForm>
    </>
  );
};

export default Edit;

export const action = async ({ request, params }) => {
  const token = getToken();
  const postId = params.id; // Extract post ID from params
  const data = await request.formData();

  const postData = {
    id: postId,
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch(`http://localhost:8080/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    console.log("Error updating post");
    return;
  }

  return redirect("/"); // Redirect to the updated post detail page
};
