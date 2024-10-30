import React from "react";

const SubItem = (props) => {
    const gambar = props.gambar_sub;
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <div className="flex text-[10px] gap-4">
                    <img
                        src={
                            gambar
                                ? import.meta.env.VITE_DB + "/img/" + gambar
                                : "/minuman.png"
                        }
                        alt={props.nama_sub}
                        className="w-[10em] h-[5em]"
                    />
                    <div className="flex flex-col justify-around">
                        <h1>{props.nama_sub}</h1>
                        <div className="flex gap-2">
                            <button
                                onClick={() => props.handleQuantity(props.index, false)}
                                type="button"
                                className="bg-orange w-4 h-4 flex items-center justify-center rounded-full text-white text-md font-bold"
                            >
                                -
                            </button>
                            <span>{props.quantity}</span>
                            <button
                                onClick={() => props.handleQuantity(props.index, true)}
                                type="button"
                                className="bg-orange w-4 h-4 flex items-center justify-center rounded-full text-white text-md font-bold"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="text-[12px] font-light">
                    Rp.{props.harga_sub * props.quantity}
                </h1>
            </div>
        </div>
    );
};

export default React.memo(SubItem);