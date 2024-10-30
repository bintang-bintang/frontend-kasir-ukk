import React from "react";
import { jwtDecode } from "jwt-decode";

const NavbarKasir = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
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
                        <h1 className="text-[16px]">{decoded.username}</h1>
                        <p>{decoded.role}</p>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarKasir;
