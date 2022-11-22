import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from '../components/InputField';

type Props = {}
	const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // setCookie("isUserAuthenticated", true, {
    //   expires: new Date("Fri, 31 Dec 2023 23:59:59 GMT"),
    //   sameSite: "strict",
    //   secure: true,
    // });
    // setCookie("email", formValues.email, {
    //   expires: new Date("Fri, 31 Dec 2023 23:59:59 GMT"),
    //   sameSite: "strict",
    //   secure: true,
    // });
    void Router.push("/");
  };

function login({}: Props) {
  return (
    <>
      <div className="login">
        <section></section>
        <section>
          <div className="login-form-container">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <section className="login-right">
                <div className="login-content">
                  <h1 className="login-content__headline">Welcome!</h1>
                  <p className="login-content__text">Enter details to login.</p>

                  <form className="login-form" onSubmit={handleLoginSubmit}>
                    <InputField
                      type="email"
                      label="Email"
                      value={formValues.email}
                      onChange={(e) => handleChange(e, "email")}
                      size="large"
                      required={true}
                    />
                    
                    <InputField
                      type="password"
                      label="Password"
                      value={formValues.password}
                      onChange={(e) => handleChange(e, "password")}
                      size="large"
                      minLength={6}
                      required={true}
                    />
                    <button className="login-form__forgot-password">
                      Forgot Password?
                    </button>
                    <Button type="submit" size="large" content="Log In" />
                  </form>
                </div>
              </section>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
                <small>{errorState.email}</small>
              </div>
              <div>
                <PasswordInput
                  value={formState.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                />
                <small>{errorState.password}</small>
              </div>
              <p>Forgot password?</p>

              <button type="submit">LOG IN</button>
            </form>
            <Link to="/dashboard">SEE DASHBOARD</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default login