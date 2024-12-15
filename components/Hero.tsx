"use client";

// Main hero

import CustomButton from "./CustomButton";
import { useState } from "react";
import { FormProps } from "../types";

const current = new Date().toISOString().split("T")[0];

const Hero = () => {
    const [activeTab, setActiveTab] = useState("form1");

    const submitForm1 = () => {
        // Conectar con BD para persona
    };

    const submitForm2 = () => {
        // Conectar con BD para vivienda
    };

    const submitForm3 = () => {
        // Conectar con BD para propiedad
    };

    const submitForm4 = () => {
        // Conectar con BD para negocio
    };

    const renderForm = () => {
        switch (activeTab) {
            case "Persona":
                return <Form1 submit={submitForm1} />;
            case "Vivienda":
                return <Form2 submit={submitForm2} />;
            case "Propiedad Vivienda":
                return <Form3 submit={submitForm3} />;
            case "Negocio":
                return <Form4 submit={submitForm4} />;
            default:
                return <Form1 submit={submitForm1} />;
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 flex justify-center w-full">
                <div className="w-full max-w-[1440px]">
                    <h1 className="hero__title text-center">
                        Implementación de la BD de Lab0
                    </h1>
                    
                    {/* Tabs */}
                    <div className="flex justify-center space-x-4 my-6">
                        {["Persona", "Vivienda", "Propiedad Vivienda", "Negocio"].map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === tab ? "bg-emerald-600 text-white" : "bg-gray-300 text-black"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Form and Table Content */}
                    <div className="mx-auto">
                        {renderForm()}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

// Form 1 Implementation
const Form1 = ({ submit }: FormProps) => (
    <div>
    <form>
    <div className="flex space-x-4">
                                <div className="flex-auto w-[8rem]">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">ID:</label>
                                    <input type="number" 
                                    id="id-input" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                    placeholder="##########" 
                                    required />
                                </div>
                                <div className="flex-auto w-[8rem]">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">ID Residencia:</label>
                                    <input type="number" 
                                    id="residencia_id-input" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                    placeholder="##########" 
                                    />
                                </div>
                                <div className="flex-auto w-[8rem]">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">ID Cabeza Familia:</label>
                                    <input type="number" 
                                    id="cdf_id-input" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                    placeholder="##########" 
                                    />
                                </div>
                                <div className="flex-auto">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Nombre Completo:</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" placeholder="Pépito Perez" required />
                                </div>
                                <div className="flex-auto">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Nacimiento:</label>
                                    <input type='date' id="nacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Día/Mes/Año'name='birthdate' max={current}/>
                                </div>
                                <div className="flex-auto">
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo:</label>
                                    <select id="sexo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="F">Mujer</option>
                                        <option value="M">Hombre</option>
                                    </select>
                                </div>
                                <div className="flex-auto">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                                </div>
                                <div className="flex-auto w-[7.5rem]">
                                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">Teléfono:</label>
                                    <input type="number" id="numero-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" placeholder="9021013527" required />
                                </div>
                                <div className="flex-auto w-[7.5rem]">
                                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">Célular:</label>
                                    <input type="number" id="numero-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" placeholder="9021013527" required />
                                </div>
                        </div>
                        <CustomButton
                        title="Añadir"
                        containerStyles="bg-emerald-600 text-black rounded-full mt-10 mx-auto"
                        handleClick={submit}>
                        </CustomButton>
        </form>
        <div id="tablavahere" className="mt-8">Tabla dinámica según la pestaña</div>
    </div>
);

const Form2 = ({ submit }: FormProps) => <div>Formulario 2</div>;
const Form3 = ({ submit }: FormProps) => <div>Formulario 3</div>;
const Form4 = ({ submit }: FormProps) => <div>Formulario 4</div>;

export default Hero;