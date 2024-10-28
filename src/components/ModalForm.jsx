import React, { useEffect } from "react";

const ModalForm = (props) => {
    useEffect(() => {
        if (props.status) {
            // Saat modal terbuka, hilangkan scroll pada body
            document.body.style.overflowY = "hidden";
        } else {
            // Saat modal tertutup, kembalikan scroll pada body
            document.body.style.overflowY = "auto";
        }

        // Cleanup function untuk mengembalikan scroll pada body saat komponen di-unmount
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [props.status]);

    return (
        <div className="fixed inset-0 flex justify-center items-center z-[100]">
            <div
                className="fixed inset-0 bg-black/35"
                onClick={props.click}
            ></div>
            <form
                onSubmit={props.onSubmit}
                className="bg-white p-4 rounded-md z-20 flex flex-col gap-5 w-max"
            >
                {props.children}
            </form>
        </div>
    );
};

export default ModalForm;