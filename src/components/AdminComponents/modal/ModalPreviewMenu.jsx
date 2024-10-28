import React, { useState, useEffect } from "react";
import ModalForm from "../../ModalForm";
import { useUpdateMenu, useDeleteMenu } from "../../../api/MenuAPI";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ModalPreviewMenu = (props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(props.selectedMenu);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "gambar_menu") {
            setData({ ...data, [name]: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    // Delete menu
    const PHdeleteMenu = useDeleteMenu();
    const handleDelete = (e) => {
        e.preventDefault();
        PHdeleteMenu.mutate(data._id, {
            onSuccess: (response) => {
                console.log("Menu deleted successfully:", response);
                setError(null);
                props.click(); // Menutup modal setelah sukses menghapus menu
            },
            onError: (error) => {
                console.error("Error deleting menu:", error);
                setError(error.response?.data?.message || "An error occurred");
            },
        });
    };
    // Delete menu

    // Update menu
    const PHupdateMenu = useUpdateMenu();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        PHupdateMenu.mutate(
            { id: data._id.toString(), data: formData },
            {
                onSuccess: (response) => {
                    console.log("Menu updated successfully:", response);
                    setError(null);
                    props.click(); // Menutup modal setelah sukses mengupdate menu
                },
                onError: (error) => {
                    console.error("Error updating menu:", error);
                    setError(
                        error.response?.data?.message || "An error occurred"
                    );
                },
            }
        );
    };
    // Update menu

    return (
        <ModalForm
            click={props.click}
            status={props.status}
            onSubmit={handleSubmit}
        >
            <LazyLoadImage
                onClick={props.onClick}
                src={
                    data.gambar_menu
                        ? import.meta.env.VITE_DB + "/img/" + data.gambar_menu
                        : "/minuman.png"
                }
                alt={data.nama_menu}
                effect="blur"
                className="rounded-[4px] transition-all duration-[250ms] ease-in-out bg-yellow-400 w-full bg-cover h-[9em] group-hover:scale-[1.02] group-hover:brightness-50"
            />
            <div className="flex flex-col gap-4">
                <label htmlFor="nama_menu">
                    <input
                        name="nama_menu"
                        onChange={handleChange}
                        value={data.nama_menu}
                        type="text"
                        placeholder="Nama Menu..."
                        className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                    />
                </label>
                <label htmlFor="jenis_menu">
                    <select
                        name="jenis_menu"
                        onChange={handleChange}
                        value={data.jenis_menu}
                        className="outline outline-1 outline-gray bg-gray/50 text-[#7B7B7B] px-3 py-2 rounded-md"
                    >
                        <option value="minuman">Minuman</option>
                        <option value="makanan">Makanan</option>
                    </select>
                </label>
                <label htmlFor="harga_menu">
                    <input
                        name="harga_menu"
                        onChange={handleChange}
                        value={data.harga_menu}
                        type="number"
                        placeholder="Rp...,-"
                        className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                    />
                </label>
                <label htmlFor="deskripsi_menu">
                    <textarea
                        name="deskripsi_menu"
                        onChange={handleChange}
                        value={data.deskripsi_menu}
                        placeholder="Deskripsi Menu..."
                        className="resize-none outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md w-auto"
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
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="w-[48%] px-3 py-2 rounded-md text-white2 bg-success hover:contrast-50"
                >
                    Save
                </button>
                <button
                    onClick={handleDelete}
                    className="w-[48%] px-3 py-2 rounded-md text-white2 bg-danger hover:contrast-50"
                >
                    Delete
                </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </ModalForm>
    );
};

export default ModalPreviewMenu;