import React from "react";
import TableComponent from "../../components/AdminComponents/TableComponent";
import { dataDummyTable } from "../../assets/dataTable";

const AdminTable = () => {
    return (
        <div className="w-[60em] p-4 flex flex-col gap-1">
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Table Data</h1>
                <button
                    type="button"
                    className="px-3 py-2 bg-brown rounded-md drop-shadow-md text-white hover:bg-orange"
                >
                    Add new
                </button>
            </nav>
            <section className="drop-shadow rounded-[4px] flex flex-col gap-5 ">
                {dataDummyTable.map((data, index) => (
                    <TableComponent key={index + 1} {...data} />
                ))}
            </section>
        </div>
    );
};

export default AdminTable;
