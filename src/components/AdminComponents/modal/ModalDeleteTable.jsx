import React, { useState } from "react";
import ModalForm from "../../ModalForm";
import { useDeleteMeja } from "../../../api/MejaAPI";

const ModalDeleteUser = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(props.data)

    const PHdeletemeja = useDeleteMeja();

    const handleSubmit = (e) => {
        e.preventDefault();
        PHdeletemeja.mutate(data._id, {
            onSuccess: (response) => {
                console.log("User deleted successfully:", response);
                setError(null);
                props.click();
            },
            onError: (error) => {
                console.error("Error deleting user:", error);
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
            <h2 className="text-center">Delete User </h2>
            <h3 className="text-center font-semibold">{data.nama_meja}</h3>
            <button
                type="submit"
                className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
            >
                Delete User!
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </ModalForm>
    );
};

export default ModalDeleteUser;
