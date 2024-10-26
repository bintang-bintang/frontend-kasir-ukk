import React from "react";

const CardProduct = (props) => {
    return (
        <div className="bg-white2  w-[18.5em] h-fit drop-shadow-xl rounded-md overflow-hidden group cursor-pointer">
            <div className="w-fit p-2 h-[166.5px] overflow-hidden flex justify-center transition-all duration-[250ms] ease-in-out">
                <h1 className="z-10 text-xl transition-all duration-[250ms] ease-in-out text-white self-center absolute opacity-0 group-hover:opacity-100 italic text-[12px]">
                    Preview...
                </h1>
                <img
                    src="https://storyblok-image.english1.com/unsafe/1200x600/filters:focal(548x278:549x279):quality(90)/f/60990/1200x666/13ee7171e6/makanan-tradisional-indonesia.png"
                    alt="Gambar Product"
                    className=" rounded-[4px] transition-all duration-[250ms] ease-in-out bg-yellow-400 w-fit h-full group-hover:scale-[1.02] group-hover:brightness-50 "
                />
            </div>
            <div className="flex flex-col gap-1 px-4 py-2">
                <h1 className="text-[20px] text-black font-semibold">
                    {props.nama_menu}
                </h1>
                <p className="text-[12px] line-clamp-2 text-black/65">
                    {props.deskripsi_menu}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-[20px] text-brown font-semibold italic mt-1">
                        Rp{props.harga_menu},-
                    </p>
                    <p className="text-[12px] text-orange mt-1">
                        Stok : {props.stok_menu}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
