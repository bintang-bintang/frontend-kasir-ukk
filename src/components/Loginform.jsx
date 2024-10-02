import React from "react";
import { useNavigate } from "react-router-dom";

const Loginform = (props) => {
  const navigate = useNavigate();

  const keHome = async () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-medium text-xl">Login Your account</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md "
        />
        <input
          type="text"
          placeholder="Password"
          className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md"
        />
        <input
          type="button"
          value="Login"
          className="bg-brown rounded-md py-2 cursor-pointer hover:bg-brown/85 transition-all"
          onClick={keHome}
        />
        <a href="/" className="underline self-end text-sm">
          Don't have account?
        </a>
      </form>
    </div>
  );
};

export default Loginform;
