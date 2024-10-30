import React, { useState } from "react";
import ModalForm from "../../ModalForm";
import { useCreateMeja } from "../../../api/MejaAPI";

const ModalAddTable = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        nama_meja: "",
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const PHcreatemeja = useCreateMeja();

    const handleSubmit = (e) => {
        e.preventDefault();
        PHcreatemeja.mutate(data, {
            onSuccess: (response) => {
                console.log("Meja created successfully:", response);
                setError(null);
                props.click();
            },
            onError: (error) => {
                console.error("Error creating meja:", error);
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
            <h2 className="text-center">Add Table </h2>
            <label htmlFor="">
                <input
                    type="text"
                    name="nama_meja"
                    placeholder="Table Name..."
                    className="w-full p-2 my-2 border border-gray-300 rounded-md"
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
            >
                Create Meja
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </ModalForm>
    );
};

export default ModalAddTable;
