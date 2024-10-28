import React, { useState, useEffect } from "react";
import ModalForm from "../../ModalForm";
import { useUpdateUserMutation } from "../../../api/UserAPI";

const ModalEditUser = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(props.selectedUser);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const PHupdateUser = useUpdateUserMutation();
    const handleSubmit = (e) => {
        e.preventDefault();
        PHupdateUser.mutate({id: data._id, data}, {
            onSuccess: (response) => {
                console.log("User updated successfully:", response);
                setError(null);
                props.click(); // Menutup modal setelah sukses mengupdate user
            },
            onError: (error) => {
                console.error("Error updating user:", error);
                setError(error.response.data.message);
            },
        });
    };

    return (
        <ModalForm
            click={props.click}
            status={props.status}
            onSubmit={handleSubmit}
        >
            <h2 className="text-center">Edit User</h2>
            <div className="flex flex-col gap-4">
                <input
                    onChange={handleChange}
                    value={data.username}
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md"
                />
                <input
                    onChange={handleChange}
                    value={data.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md"
                />
                <select
                    onChange={handleChange}
                    value={data.role}
                    name="role"
                    className="outline-none bg-black/25 text-[#7B7B7B] px-3 py-2 rounded-md"
                >
                    <option value="admin">Admin</option>
                    <option value="kasir">Kasir</option>
                    <option value="manager">Manager</option>
                </select>
                <button
                    type="submit"
                    className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
                >
                    Update User
                </button>
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
            <h1 className="text-[8px]">

            </h1>
        </ModalForm>
    );
};

export default ModalEditUser;
