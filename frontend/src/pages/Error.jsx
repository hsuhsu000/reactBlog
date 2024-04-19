import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="errorPage">
      <div className="text-center">
        <ExclamationTriangleIcon className="w-75"></ExclamationTriangleIcon>
        <p>Something went wrong!</p>
        <Link to={"/"} className="btn btn-dark">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
