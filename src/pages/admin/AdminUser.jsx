import React, { useState } from "react";
import { datadummy } from "../../assets/data";
import { CiSearch } from "react-icons/ci";

const AdminUser = () => {
    const [search, setSearch] = useState("");

    // Fungsi filter berdasarkan username, email, atau gender
    const searchFilter = datadummy.filter((item) => {
        return (
            item.username.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.gender.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="w-[60em] p-4">
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-lg">Users</h1>
                <div className="relative flex space-x-2 items-center">
                    <div className="relative flex items-center">
                        <span className="absolute left-2">
                            <CiSearch size={20} className="text-black z-10" />
                        </span>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="outline outline-1 outline-gray px-8 h-10 flex items-center placeholder:text-[14px]"
                            placeholder="Search..."
                        />
                    </div>
                    <button
                        type="button"
                        className="bg-brown text-white px-4 py-2 rounded hover:saturate-50"
                    >
                        Add New!
                    </button>
                </div>
            </nav>
            <section className="bg-white2 p-5 drop-shadow rounded-[4px]">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-700 text-[#707070]">
                            <th className="p-2 text-start ">Id</th>
                            <th className="p-2 text-start ">Username</th>
                            <th className="p-2 text-start ">Email</th>
                            <th className="p-2 text-start ">Gender</th>
                            <th className="p-2 text-start ">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchFilter.map((item, index) => (
                            <tr key={index} className="text-[#888888]">
                                <td className="p-2 ">{item.id}</td>
                                <td className="p-2 ">{item.username}</td>
                                <td className="p-2 ">{item.email}</td>
                                <td className="p-2 ">{item.gender}</td>
                                <td className="p-2 ">
                                    <div className="flex">
                                        <ul className="flex">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <h2 className=" rounded-md inline text-black">
                Total Data : {searchFilter.length}
            </h2>
        </div>
    );
};

export default AdminUser;
