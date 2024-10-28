import React, { useState } from "react";
import ModalForm from "../../ModalForm";
import { useCreateUser } from "../../../api/UserAPI";

const ModalAddUser = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const PHcreateuser = useCreateUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        PHcreateuser.mutate(data, {
            onSuccess: (response) => {
                console.log("User created successfully:", response);
                setError(null);
                props.click();
            },
            onError: (error) => {
                console.error("Error creating user:", error);
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
            <h2 className="text-center">Add New User {props.nama_user}</h2>
            <label htmlFor="username_user">
                <input
                    name="username"
                    onChange={handleChange}
                    type="text"
                    placeholder="username..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="email_user">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="password_user">
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="password..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="role_user">
                <select
                    name="role"
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                    onChange={handleChange}
                >
                    <option value="">Select role...</option>
                    <option value="manager">Manager</option>
                    <option value="kasir">Kasir</option>
                </select>
            </label>
            <button
                type="submit"
                className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
            >
                Create User!
            </button>
            {/* {JSON.stringify(data)} */}
            <h1 className="w-fill">
            {error && <p className="text-red-500 text-center">{error}</p>}

            </h1>
        </ModalForm>
    );
};

export default ModalAddUser;
