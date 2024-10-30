import React, { useState } from "react";
import { useCreateDetail, useGETdetailMenu } from "../../api/DetailmenuAPI";
const CobaOrder = () => {
    // Postman body example:
    //       {
    //           "id_transaksi": "671fd3743309537c34b41bc8",
    //           "order_menu": [
    //               {
    //                   "id_menu": "671cff059289776c7a2c5dfb",
    //                   "kuantitas": 5
    //               },
    //               {
    //                   "id_menu": "671ee495c7acebd279fd7029",
    //                   "kuantitas": 3
    //               }
    //           ]
    //       }
    const { data, isLoading, error } = useGETdetailMenu();

    const [coba, setCoba] = useState({
        id_transaksi: "671fd3743309537c34b41bc8",
        order_menu: [
            {
                id_menu: "671cff059289776c7a2c5dfb",
                kuantitas: 5,
            },
            {
                id_menu: "671ee495c7acebd279fd7029",
                kuantitas: 5,
            },
        ],
    });

    const PHcreatedetail = useCreateDetail();
    const handleCreateDetail = async () => {
        e.preventDefault();
        PHcreatedetail.mutate(coba, {
            onSuccess: (response) => {
                console.log("Detail created successfully:", response);
                setError(null);
                // props.click();
            },
        });
    };
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    console.log(data.data);

    return (
        <div>
            {data.data.map((item) => (
                <div className="">
                    {item._id}
                    <br />
                </div>
            ))}
            <div className="">CobOrder</div>
            <button type="button" onClick={handleCreateDetail}>Click Tambah</button>
        </div>
    );
};

export default CobaOrder;
