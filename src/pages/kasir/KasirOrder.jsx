import React, { useState } from "react";
import TableToOrder from "../../components/KasirComponents/TableToOrder";
import { useGetMejas } from "../../api/MejaAPI";
import { useNavigate } from "react-router-dom";
import ModalTransaksi from "../../components/KasirComponents/modal/ModalTransaksi";

const KasirOrder = () => {
    const { data, isLoading, isError } = useGetMejas();
    const navigate = useNavigate();

    // =================Add modal=================
    const [statusAdd, setStatusAdd] = useState(false);
    const [selectedMeja, setSelectedMeja] = useState(null);
    const handleAddModal = (id) => {
        setSelectedMeja(id);
        setStatusAdd(!statusAdd);
    };
    // =================Add modal=================
    const handleOnClick = (id) => {
        navigate(`/kasir/transaksi/${id}`);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;

    return (
        <div className="w-[60em] p-4 flex flex-col gap-1 self-center">
            {/* {Modal} */}
            {statusAdd && (
                <ModalTransaksi
                    click={handleAddModal}
                    status={statusAdd}
                    IDmeja={selectedMeja}
                />
            )}
            {/* {Modal} */}

            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Lists Meja</h1>
            </nav>
            <section className="drop-shadow rounded-[4px] flex flex-col gap-5 ">
                {data.map((meja, index) => (
                    <TableToOrder
                        key={index + 1}
                        {...meja}
                        onClick={() => handleAddModal(meja._id)}
                        IDmeja={meja._id}
                    />
                ))}
            </section>
        </div>
    );
};

export default KasirOrder;