import React from "react";
import Divider from "../../components/Divider";
const ManagerHome = () => {
    return (
        <>
            <div className="w-auto flex justify-between">
                <h1 className="font-bold text-2xl">
                    Welcome to, WikusamaCafe👋 <br /> Manager
                </h1>
                <div className="relative flex items-center">
                    <span className="absolute left-2">
                    </span>
                    <input
                        type="text"
                        className="outline outline-1 outline-gray px-8 h-10 flex items-center placeholder:text-[14px]"
                        placeholder="Search"
                    />
                </div>
            </div>
            <Divider />
        </>
    );
};

export default ManagerHome;
