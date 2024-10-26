import React from "react";

const NavbarKasir = () => {
  return (
    <>
      <header className="bg-brown sticky top-0 z-[11] flex justify-center text-white py-[6px]">
        <div className="w-[75em] flex justify-between ">
          <div className="flex gap-5 items-center">
            <h1>
              <span className="font-bold">Wikusama</span>Cafe
            </h1>
          </div>
          <div className="text-end text-[12px]">
            <h1 className="text-[16px]">Nama user</h1>
            <p>Kasir</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarKasir;
