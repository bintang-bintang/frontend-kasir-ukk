import React from "react";

const NavbarAdmin = () => {
  return (
    <header className="bg-brown flex justify-center text-white py-[6px]">
      <div className="w-[75em] flex justify-between">
        <div className="flex gap-5 items-center">
          <h1>
            <span className="font-bold">Wikusama</span>Cafe
          </h1>
        </div>
        <div className="text-end text-[12px]">
            <h1 className="text-[16px]">Nama user</h1>
            <p>Role user</p>
        </div>
      </div>
    </header>
  );
};

export default NavbarAdmin;
