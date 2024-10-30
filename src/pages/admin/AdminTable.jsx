import React, { useState } from "react";
import TableComponent from "../../components/AdminComponents/TableComponent";
import { useGetMejas } from "../../api/MejaAPI";
import ModalAddTable from "../../components/AdminComponents/modal/ModalAddTable";
import ModalDeleteTable from "../../components/AdminComponents/modal/ModalDeleteTable";

const AdminTable = () => {
    const { data, isLoading, isError } = useGetMejas();

    // Create meja modal
    const [statusAdd, setStatusAdd] = useState(false);
    const handleAddModal = () => {
        setStatusAdd(!statusAdd);
    };
    // Create meja modal
    // Delete meja modal
    const [statusDelete, setStatusDelete] = useState(false);
    const [dataMeja, setDataMeja] = useState({});
    const handleDeleteModal = () => {
        setStatusDelete(!statusDelete);
    };
    // Delete meja modal

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;
    console.log(data);

    return (
        <div className="w-[60em] p-4 flex flex-col gap-1">
            {/* Modal */}
            {statusAdd && (
                <ModalAddTable click={handleAddModal} status={statusAdd} />
            )}
            {statusDelete && (
                <ModalDeleteTable
                    click={handleDeleteModal}
                    status={statusDelete}
                    data={dataMeja}
                />
            )}
            {/* Modal */}
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Table Data</h1>
                <button
                    type="button"
                    onClick={handleAddModal}
                    className="px-3 py-2 bg-brown rounded-md drop-shadow-md text-white hover:bg-orange"
                >
                    Add new
                </button>
            </nav>
            <section className="drop-shadow rounded-[4px] flex flex-col gap-5 ">
                {data.map((data, index) => (
                    <TableComponent
                        key={index + 1}
                        {...data}
                        onClickDelete={() => {
                            handleDeleteModal();
                            setDataMeja(data);
                        }}
                    />
                ))}
            </section>
        </div>
    );
};

export default AdminTable;
