import React from "react";
import TableComponent from "../../components/AdminComponents/TableComponent";
import { dataDummyTable } from "../../assets/dataTable";
import { useCreateMeja, useGetMejas, useUpdateMeja, useDeleteMeja } from "../../api/MejaAPI";

const AdminTable = () => {
    const { data, isLoading, isError } = useGetMejas();



    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;
    console.log(data);
    
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
                {data.map((data, index) => (
                    <TableComponent key={index + 1} {...data} />
                ))}
            </section>
        </div>
    );
};

export default AdminTable;
