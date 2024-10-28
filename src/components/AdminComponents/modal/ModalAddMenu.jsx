import React, { useState } from "react";
import ModalForm from "../../ModalForm";
import { useCreateMenu } from "../../../api/MenuAPI";

const ModalAddMenu = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        nama_menu: "",
        jenis_menu: "",
        harga_menu: "",
        deskripsi_menu: "",
        gambar_menu: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "gambar_menu") {
            setData({ ...data, [name]: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const PHcreateMenu = useCreateMenu();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        PHcreateMenu.mutate(formData, {
            onSuccess: (response) => {
                console.log("Menu created successfully:", response);
                setError(null);
                props.click();
            },
            onError: (error) => {
                console.error("Error creating menu:", error);
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
            <h2 className="text-center">Add New Menu</h2>
            <label htmlFor="nama_menu">
                <input
                    name="nama_menu"
                    onChange={handleChange}
                    type="text"
                    placeholder="Nama Menu..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="jenis_menu">
                <select
                    name="jenis_menu"
                    onChange={handleChange}
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                >
                    <option value="">Pilih Jenis Menu...</option>
                    <option value="makanan">Makanan</option>
                    <option value="minuman">Minuman</option>
                </select>
            </label>
            <label htmlFor="harga_menu">
                <input
                    name="harga_menu"
                    onChange={handleChange}
                    type="number"
                    placeholder="Harga Menu..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="deskripsi_menu">
                <textarea
                    name="deskripsi_menu"
                    onChange={handleChange}
                    placeholder="Deskripsi Menu..."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <label htmlFor="gambar_menu">
                <input
                    name="gambar_menu"
                    onChange={handleChange}
                    type="file"
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                />
            </label>
            <button
                type="submit"
                className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
            >
                Create Menu!
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </ModalForm>
    );
};

export default ModalAddMenu;
