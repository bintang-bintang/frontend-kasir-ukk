import React from 'react'

const TableToOrder = (props) => {
  return (
    <div className="p-5 flex justify-between items-center bg-white2 drop-shadow-sm rounded-md">
            <h1>{props.nama_meja}</h1>
            {props.status ? (
                <div className="flex gap-5 items-center font-light">
                    <p className="bg-success/30 text-success text-[1em] px-[3rem] py-2 rounded-md">
                        Tersedia
                    </p>
                    <button
                        type="button"
                        className="bg-brown text-white2  px-3 py-2 rounded-md"
                    >
                        Next
                    </button>
                </div>
            ) : (
                <div className="flex gap-5 items-center font-light">
                    <p className="bg-danger/30 text-danger text-[1em] px-[3rem] py-2 rounded-md">
                        Tidak tersedia
                    </p>
                    <button
                        type="button"
                        className="bg-netral/30 text-white2  px-3 py-2 cursor-default rounded-md"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
  )
}

export default TableToOrder