import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Navbar = ({ email, setEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  const handleLogin = async (data) => {
    setEmail(data.email);
    reset();
  };

  useEffect(() => {
    if (errors.email) {
      alert(errors.email.message);
    } else if (errors.password) {
      alert(errors.password.message);
    }
  }, [errors.email, errors.password]);

  const handleLogout = async () => {
    await setEmail("");
    router.push("/");
  };

  return (
    <header className="container max-w-6xl m-auto border-b border-b-stone-600 py-4 flex justify-between items-center">
      <div className="">
        <h1 id="logo" className="flex text-3xl font-bold">
          <Link href={"/"}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block mr-2 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Funny Movies
            </a>
          </Link>
        </h1>
      </div>
      <div className="">
        {email && (
          <div
            data-testid="authenticated-actions"
            className={`flex md:gap-5 items-center`}
          >
            <span role={"welcome-text"}>Welcome {email}</span>
            <Link href={"/share"}>
              <a className="px-5 py-3 bg-sky-600 text-white">Share a movie</a>
            </Link>
            <button
              className="px-5 py-3 bg-rose-500 text-white"
              onClick={handleLogout}
              role={"logout-button"}
            >
              Logout
            </button>
          </div>
        )}

        {!email && (
          <div id="unauthenticated">
            <form
              data-testid="login-form"
              onSubmit={handleSubmit(handleLogin)}
              className={`flex md:gap-5 `}
            >
              <input
                type="email"
                id="email"
                name="email"
                required={true}
                placeholder="email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              <input
                type="password"
                name="password"
                required={true}
                id="password"
                placeholder="password"
                className=""
                {...register("password", {
                  required: "required",
                })}
              />
              <button
                role={"login-button"}
                className="px-5 py-3 bg-sky-600 text-white"
              >
                Login/Register
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
