import React from "react";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";
import { getToken } from "../util/getToken";
const Create = () => {
  return <PostForm header={"Create Your Post here!"} btnText={"Post"}></PostForm>;
};

export default Create;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const token = getToken();
  const postData = {
    id: uuid(),
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    console.log("Error");
  }
  return redirect("/");
};
