import React from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const isToken = useRouteLoaderData("root");
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center m-3 p-3">
        <Link to={"/"}>
          <h1>BLOG</h1>
        </Link>
        <div>
          <NavLink to={"/"} className="me-2">
            Posts
          </NavLink>
          {isToken && (
            <NavLink to={"/create-post"} className="me-2">
              Create
            </NavLink>
          )}
          {!isToken && <NavLink to={"/auth?mode=login"}>Login</NavLink>}
          {isToken && <NavLink to={"/logout"}>Logout</NavLink>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
