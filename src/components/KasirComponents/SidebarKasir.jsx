import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FaUser } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";

const SidebarKasir = (props) => {
    const location = useLocation(); // Mendapatkan URL path saat ini
    const currentPath = location.pathname; // Mengambil pathname, contoh: '/admin/users'

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <>
            <div className="bg-black h-screen w-60 fixed -z-10 top-0 left-0 p-4 text-white flex flex-col justify-between">
                <ul className="mt-16 flex flex-col">
                    {/* Tambahkan class 'bg-brown' jika path sesuai */}
                    <Link to="/kasir/orders">
                        <li
                            className={`px-6 py-2 hover:bg-brown flex items-center gap-[6px] ${
                                currentPath === "/kasir/orders"
                                    ? "bg-brown"
                                    : ""
                            }`}
                        >
                            <span>
                                <FaUser />
                            </span>
                            Orders
                        </li>
                    </Link>
                    <Link to="/kasir/history">
                        <li
                            className={`px-6 py-2 hover:bg-brown flex items-center gap-[6px] ${
                                currentPath === "/kasir/history"
                                    ? "bg-brown"
                                    : ""
                            }`}
                        >
                            <span>
                                <IoFolderOpen />
                            </span>
                            Orders History
                        </li>
                    </Link>
                </ul>
                <button
                    onClick={handleLogout}
                    className="text-start hover:underline px-6 py-2"
                >
                    Logout
                </button>
            </div>
            <div className="ml-60 py-10 px-8 ">{props.children}</div>
        </>
    );
};

export default SidebarKasir;
