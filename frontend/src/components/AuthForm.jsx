import React from "react";
import { Form, Link, useActionData, useSearchParams, useNavigation } from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";
  return (
    <section className="form-section w-75 mx-auto ">
      <div className="header">
        <div className="date">
          <h4>{isLogin ? "Login Account" : "Register Account"}</h4>
        </div>
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
          <label htmlFor="form-email">Email</label>
          <input type="email" className="form-control" id="form-email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="form-password">Password</label>
          <input type="password" className="form-control" id="form-password" name="password" required />
        </div>
        <br />

        <button className="btn btn-dark mb-3" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : isLogin ? "Login" : "Register"}
        </button>
      </Form>
      {isLogin ? (
        <p>
          Don't have an account? <Link to={"/auth?mode=signup"}> Register Account</Link>
        </p>
      ) : (
        <p>
          Already have an account? <Link to={"/auth?mode=login"}> Login Account</Link>
        </p>
      )}
    </section>
  );
};

export default AuthForm;
