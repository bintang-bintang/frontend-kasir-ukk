import React from "react";
import { dataDummyTable } from "../../assets/dataTable";

import TableToOrder from "../../components/KasirComponents/TableToOrder";

const KasirOrder = () => {
    return (
        <div className="w-[60em] p-4 flex flex-col gap-1 self-center">
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Lists Meja</h1>
            </nav>
            <section className="drop-shadow rounded-[4px] flex flex-col gap-5 ">
                {dataDummyTable.map((data, index) => (
                    <TableToOrder key={index + 1} {...data} />
                ))}
            </section>
        </div>
    );
};

export default KasirOrder;
