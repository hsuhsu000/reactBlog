import React from "react";

const Loader = () => {
  return (
    <section className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
