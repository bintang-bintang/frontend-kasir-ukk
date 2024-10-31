import React, { useState } from "react";
import ModalForm from "../../ModalForm";
import { jwtDecode } from "jwt-decode";
import { useCreateTransaksi } from "../../../api/TransaksiAPI";
import { useNavigate } from "react-router-dom";

const ModalTransaksi = (props) => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    const [dataTransaksi, setDataTransaksi] = useState({
        nama_pelanggan: "",
        id_meja: props.IDmeja,
        id_user: user._id,
    });

    const handleChange = (e) => {
        setDataTransaksi({
            ...dataTransaksi,
            [e.target.name]: e.target.value,
        });
    };

    const PHcreatetransaksi = useCreateTransaksi();
    const handleSubmit = (e) => {
        e.preventDefault();
        PHcreatetransaksi.mutate(dataTransaksi, {
            onSuccess: (dataTra) => {
                // console.log("Transaksi Berhasil!");
                console.log(dataTra);
                localStorage.setItem("id_meja", dataTra.data.id_meja);
                localStorage.setItem("nama_pelanggan", dataTra.data.nama_pelanggan);

                props.click();
                navigate(`/kasir/detailtransaksi/${dataTra.data._id}`);
            },
            onError: (error) => {
                console.log(error);

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
            {JSON.stringify(dataTransaksi)}
            <label htmlFor="nama_pelanggan">
                <input
                    type="text"
                    name="nama_pelanggan"
                    placeholder="nama pelanggan.."
                    className="outline outline-1 outline-gray bg-gray/50 px-3 py-2 rounded-md"
                    value={dataTransaksi.nama_pelanggan}
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                className="px-3 py-2 rounded-md text-white2 bg-brown hover:contrast-50"
            >
                Lanjut Transaksi!
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
        </ModalForm>
    );
};

export default ModalTransaksi;
