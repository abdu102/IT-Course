import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { signin } from "../../api/sigin";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const auth = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      passowrd,
    };
    // signin.login(newUser).then((response) => {
    //   console.log(response);
    // });
  };
  return (
    <section>
      <div className="container">
        <div className="signIn flex flex-col justify-center items-center w-[43%] shadow-xl mx-auto mt-[100px] p-5 gap-y-3">
          <div className="signIn__title p-1">
            <h2 className="text-[#4763E4] md:text-[30px] text-[24px] font-bold">
              ADMIN DASHBOARD
            </h2>
          </div>
          <form className="signIn__form flex flex-col gap-y-2 w-[70%]">
            <label htmlFor="userName" className="text-[#333] font-semibold">
              Enter Username
            </label>
            <input
              type="text"
              id="userName"
              value={username}
              onChange={(evt) => setUsername(evt.target.value)}
              className="focus:outline-none border border-[#5C73DB] p-2 rounded-[12px] pl-[16px]"
              placeholder="Enter username"
            />

            <label htmlFor="password" className="text-[#333] font-semibold">
              Enter Username
            </label>
            <input
              type="password"
              id="password"
              value={passowrd}
              onChange={(evt) => setPassword(evt.target.value)}
              className="focus:outline-none border border-[#5C73DB] p-2 rounded-[12px] pl-[16px]"
              placeholder="Enter password"
            />
          </form>
          <div className="flex flex-col gap-y-3 py-3 w-[70%]">
            <button
              type="click"
              onClick={(e) => auth(e)}
              className="w-full bg-[#4763E4] p-2 rounded-[12px] text-center text-white active:bg-[#2941bb]"
            >
              Tekshirish
            </button>
            <span className="w-full flex justify-between items-center">
              <NavLink
                to="/signup"
                className="w-[35%] p-3 bg-[#4763E4] rounded-[12px] text-center text-white"
              >
                Sign Up
              </NavLink>
              <a href="#" className="text-center text-[#4763E4]">
                muammo bo’yicha murojat
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
