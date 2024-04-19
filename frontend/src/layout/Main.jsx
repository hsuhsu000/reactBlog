import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getExpDuration } from "../util/getToken";
import Loader from "../components/Loader";
const Main = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const { state } = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "TOKEN EXP") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const duration = getExpDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);
  return (
    <>
      <section className="col-8 offset-2">
        <Navbar></Navbar>
        {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </section>
    </>
  );
};

export default Main;
