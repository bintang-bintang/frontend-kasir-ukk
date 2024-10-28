import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useUsersGet } from "../../api/UserAPI";
import ModalAddUser from "../../components/AdminComponents/modal/ModalAddUser";
import ModalDeleteUser from "../../components/AdminComponents/modal/ModalDeleteUser";
import ModalEditUser from "../../components/AdminComponents/modal/ModalEditUser";

const AdminUser = () => {
    const { data, isLoading, isError } = useUsersGet();
    const [search, setSearch] = useState("");
    const [userID, setUserID] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    // =================Add modal=================
    const [statusAdd, setStatusAdd] = useState(false);
    const handleAddModal = () => {
        setStatusAdd(!statusAdd);
    };
    // =================Add modal=================

    // =================delete modal=================
    const [statusdelete, setStatusdelete] = useState(false);
    const handledeleteModal = () => {
        setStatusdelete(!statusdelete);
    };
    // =================delete modal=================

    // =================edit modal=================
    const [statusEdit, setStatusEdit] = useState(false);
    const handleEditModal = () => {
        setStatusEdit(!statusEdit);
    };
    // =================edit modal=================

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;
    const filteredData = data.filter(
        (user) => user.role === "manager" || user.role === "kasir"
    );

    return (
        <div className="w-[60em] p-4">
            {/* Modal */}
            {statusAdd && (
                <ModalAddUser click={handleAddModal} status={statusAdd} />
            )}
            {statusdelete && (
                <ModalDeleteUser
                    click={handledeleteModal}
                    status={statusdelete}
                    userId={userID}
                    nama_user={
                        data.find((user) => user._id === userID)?.username
                    } // Meneruskan nama user sebagai prop
                />
            )}
            {statusEdit && (
                <ModalEditUser
                    click={handleEditModal}
                    status={statusEdit}
                    selectedUser={selectedUser}
                />
            )}
            {/* Modal */}
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
                        onClick={handleAddModal}
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
                        <tr className="text-[#707070]">
                            <th className="p-2 text-start ">Id</th>
                            <th className="p-2 text-start ">Username</th>
                            <th className="p-2 text-start ">Email</th>
                            <th className="p-2 text-start ">Password</th>
                            <th className="p-2 text-start ">Role</th>
                            <th className="p-2 text-start ">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr key={index}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2 ">{user.username}</td>
                                <td className="p-2 text-wrap">{user.email}</td>
                                <td className="p-2 max-w-[10em] truncate">
                                    {user.password}
                                </td>
                                <td className="p-2">{user.role}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => {
                                            setSelectedUser(user);
                                            handleEditModal();
                                        }}
                                        className="bg-yellow-400 text-white px-4 py-2 rounded hover:saturate-50"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            setUserID(user._id);
                                            handledeleteModal();
                                        }}
                                        type="button"
                                        className="bg-red-400 text-white px-4 py-2 rounded hover:saturate-50"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <h2 className=" rounded-md inline text-black">
                Total Data : {filteredData.length}
            </h2>
        </div>
    );
};

export default AdminUser;