import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FaUser } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";

const SidebarAdmin = (props) => {
    const location = useLocation(); // Mendapatkan URL path saat ini
    const currentPath = location.pathname; // Mengambil pathname, contoh: '/admin/users'

    return (
        <>
            <div className="bg-black h-screen w-60 fixed -z-10 top-0 left-0 p-4 text-white">
                <ul className="mt-16 flex flex-col">
                    {/* Tambahkan class 'bg-brown' jika path sesuai */}
                    <Link to="/admin/users">
                        <li
                            className={`px-6 py-2 hover:bg-brown flex items-center gap-[6px] ${
                                currentPath === "/admin/users" ? "bg-brown" : ""
                            }`}
                        >
                            <span>
                                <FaUser />
                            </span>
                            Users
                        </li>
                    </Link>
                    <Link to="/admin/products">
                        <li
                            className={`px-6 py-2 hover:bg-brown flex items-center gap-[6px] ${
                                currentPath === "/admin/products"
                                    ? "bg-brown"
                                    : ""
                            }`}
                        >
                            <span>
                                <IoFolderOpen />
                            </span>
                            Product Data
                        </li>
                    </Link>
                    <Link to="/admin/tables">
                        <li
                            className={`px-6 py-2 hover:bg-brown flex items-center gap-[6px] ${
                                currentPath === "/admin/tables"
                                    ? "bg-brown"
                                    : ""
                            }`}
                        >
                            <span>
                                <MdTableRestaurant />
                            </span>
                            Table Data
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="ml-60 py-10 px-8 ">{props.children}</div>
        </>
    );
};

export default SidebarAdmin;
