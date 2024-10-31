import React, { useState, useEffect } from "react";
import "./gelombang.css";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../api/LoginAPI";
import { jwtDecode } from "jwt-decode";

const Authentication = () => {
    const [errorLogin, setErrorLogin] = useState(null);
    const [inputUser, setInputUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputUser({ ...inputUser, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            alert("Anda sudah login");
            navigate("/" + decoded.role);
        }
    }, [navigate]);

    const loginPH = useUserLogin();

    const handleLogin = async () => {
        loginPH.mutate(inputUser, {
            onSuccess: (data) => {
                console.log(data);
                setErrorLogin(null);
                const navigasi = localStorage.getItem("token");
                const dekode = jwtDecode(navigasi);
                navigate("/" + dekode.role);
            },
            onError: (error) => {
                console.log(error);
                setErrorLogin(error.response.data.message);
            },
        });
    };

    const handleLoginAdmin = () => {
        setInputUser({
            email: "admin@gmail.com",
            password: "admin",
        });
        handleLogin();
    };
    const handleLoginKasir = () => {
        setInputUser({
            email: "kasir1@gmail.com",
            password: "kasir1",
        });
        handleLogin();
    };
    const handleLoginManager= () => {
        setInputUser({
            email: "manager1@gmail.com",
            password: "manager1",
        });
        handleLogin();
    };

    return (
        <>
            <div className="bg-gray h-screen ">
                <div className="flex flex-col h-screen  items-center justify-center gap-4 z-10">
                    <h1 className="text-brown text-lg">
                        <span className="font-bold">Wikusama</span>Cafe Git Pull
                    </h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-center font-medium text-xl">
                            Login Your account
                        </h1>
                        <form action="" className="flex flex-col gap-4">
                            <input
                                onChange={handleChange}
                                name="email"
                                type="text"
                                placeholder="Email"
                                className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md "
                            />
                            <input
                                onChange={handleChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="outline-none bg-black/25 placeholder-[#7B7B7B] text-[#7B7B7B] px-3 py-2 rounded-md"
                            />
                            <input
                                onClick={handleLogin}
                                type="button"
                                value="Login"
                                className="bg-brown rounded-md py-2 cursor-pointer hover:bg-brown/85 transition-all"
                            />
                            <div className="flex justify-between">
                                <input
                                    onClick={handleLoginAdmin}
                                    type="button"
                                    value="Login as Admin"
                                    className="w-[48%] bg-brown rounded-md py-2 cursor-pointer hover:bg-brown/85 transition-all"
                                />
                                <input
                                    onClick={handleLoginKasir}
                                    type="button"
                                    value="Login as Kasir"
                                    className="w-[48%] bg-brown rounded-md py-2 cursor-pointer hover:bg-brown/85 transition-all"
                                />
                                <input
                                    onClick={handleLoginManager}
                                    type="button"
                                    value="Login as Manager"
                                    className="w-[48%] bg-brown rounded-md py-2 cursor-pointer hover:bg-brown/85 transition-all"
                                />
                            </div>
                        </form>
                        <h1>{errorLogin}</h1>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1727829775 max-xl:opacity-0">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Authentication;
