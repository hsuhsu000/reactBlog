import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import Create, { action as postCreateAction } from "./pages/Create";
import Detail, { action as deleteAction, loader as detailsLoader } from "./pages/Detail";
import Edit, { action as editAction } from "./pages/Edit";
import Error from "./pages/Error";
import Auth, { action as authAction } from "./pages/Auth";
import { loader as logoutLoader } from "./pages/Logout";
import { tokenLoader, checkTokenLoader } from "./util/getToken";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      id: "root",
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <Posts></Posts>,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create></Create>,
          action: postCreateAction,
          loader: checkTokenLoader,
        },
        {
          path: "/auth",
          element: <Auth></Auth>,
          action: authAction,
        },
        {
          path: "/logout",
          loader: logoutLoader,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Detail></Detail>,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit></Edit>,
              action: editAction,
              loader: checkTokenLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
