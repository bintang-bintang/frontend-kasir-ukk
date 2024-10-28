import React, { useState } from "react";
import TableToOrder from "../../components/KasirComponents/TableToOrder";
import { useGetMejas } from "../../api/MejaAPI";
import { useNavigate } from "react-router-dom";

const KasirOrder = () => {
    const { data, isLoading, isError } = useGetMejas();
    const navigate = useNavigate();

    const handleOnClick = (id) => {
        navigate(`/kasir/orders/cart/${id}`);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;

    return (
        <div className="w-[60em] p-4 flex flex-col gap-1 self-center">
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Lists Meja</h1>
            </nav>
            <section className="drop-shadow rounded-[4px] flex flex-col gap-5 ">
                {data.map((meja, index) => (
                    <TableToOrder
                        key={index + 1}
                        {...meja}
                        onClick={() => handleOnClick(meja._id)}
                    />
                ))}
            </section>
        </div>
    );
};

export default KasirOrder;