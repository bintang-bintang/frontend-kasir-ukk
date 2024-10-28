import React from "react";
import { useGetMenus } from "../api/MenuAPI";

import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const Nopage = () => {
    const { data, isLoading, isError } = useGetMenus();
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error...</p>;
    console.log(data.data[0]);
    
    console.log(import.meta.env.VITE_DB + `/img/${data.data[0].gambar_menu}`);
    

    const imageUrl = import.meta.env.VITE_DB + `/img/${data.data[0].gambar_menu}`;
     
    return (
        <div>
            <h1>Coba</h1>
            <h2>{JSON.stringify(data.data[0])}</h2>
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
            <LazyLoadImage effect="blur" src={imageUrl} alt="" />
        </div>
    );
};

export default Nopage;
