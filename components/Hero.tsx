"use client";

// Main hero

import CustomButton from "./CustomButton";
import { useState, useEffect } from "react";
import { FormProps, TablaPersonas } from "../types";

const current = new Date().toISOString().split("T")[0];
//Para que Update, Submit y Delete no actualicen pag

const Hero = () => {
    const [activeTab, setActiveTab] = useState("form1");
    const [personas, setPersonas] = useState<TablaPersonas | null>(null);

    // Fetch personas from backend
   const fetchPersonas = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}personas`);
      if (!response.ok) throw new Error("Failed to fetch personas");
      const data: TablaPersonas = await response.json();
      setPersonas(data);
    } catch (error) {
      console.error(error.message);
    }
    };


    useEffect(() => {
        if (activeTab === "Persona") fetchPersonas();
    }, [activeTab]);

    const renderTablePersonas = () => {
        if (!personas || personas.length === 0) return <p>No hay datos disponibles.</p>;
    
        return (
          <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 dark:bg-gray-700">ID</th>
                <th className="border px-4 py-2 dark:bg-gray-700">ID Residencia</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Cédula Cabeza Familia</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Nombre Completo</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Fecha de Nacimiento</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Sexo</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Email</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Teléfono</th>
                <th className="border px-4 py-2 dark:bg-gray-700">Celular</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((persona) => (
                <tr key={persona.id}>
                  <td className="border px-4 py-2">{persona.id}</td>
                  <td className="border px-4 py-2">{persona.residencia_id}</td>
                  <td className="border px-4 py-2">{persona.cdf_id}</td>
                  <td className="border px-4 py-2">{persona.nombre_completo}</td>
                  <td className="border px-4 py-2">{persona.fecha_nacimiento}</td>
                  <td className="border px-4 py-2">{persona.sexo}</td>
                  <td className="border px-4 py-2">{persona.email}</td>
                  <td className="border px-4 py-2">{persona.telefono}</td>
                  <td className="border px-4 py-2">{persona.celular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };

      const handleSubmit = (formType: string) => {
        switch (formType) {
            case "Persona":
                console.log("Añadir Persona");
                // Aquí iría la lógica para añadir Persona
                break;
            case "Vivienda":
                console.log("Añadir Vivienda");
                // Aquí iría la lógica para añadir Vivienda
                break;
            case "Propiedad Vivienda":
                console.log("Añadir Propiedad Vivienda");
                // Aquí iría la lógica para añadir Propiedad Vivienda
                break;
            case "Negocio":
                console.log("Añadir Negocio");
                // Aquí iría la lógica para añadir Negocio
                break;
            default:
                console.log("Acción no definida");
        }
    };
    const handleDelete = (formType: string) => {
        switch (formType) {
            case "Persona":
                console.log("Eliminar Persona");
                // Aquí iría la lógica para eliminar Persona
                break;
            case "Vivienda":
                console.log("Eliminar Vivienda");
                // Aquí iría la lógica para eliminar Vivienda
                break;
            case "Propiedad Vivienda":
                console.log("Eliminar Propiedad Vivienda");
                // Aquí iría la lógica para eliminar Propiedad Vivienda
                break;
            case "Negocio":
                console.log("Eliminar Negocio");
                // Aquí iría la lógica para eliminar Negocio
                break;
            default:
                console.log("Acción no definida");
        }
    };

    const handleUpdate = (formType: string) => {
        switch (formType) {
            case "Persona":
                console.log("Actualizar Persona");
                // Aquí iría la lógica para actualizar Persona
                break;
            case "Vivienda":
                console.log("Actualizar Vivienda");
                // Aquí iría la lógica para actualizar Vivienda
                break;
            case "Propiedad Vivienda":
                console.log("Actualizar Propiedad Vivienda");
                // Aquí iría la lógica para actualizar Propiedad Vivienda
                break;
            case "Negocio":
                console.log("Actualizar Negocio");
                // Aquí iría la lógica para actualizar Negocio
                break;
            default:
                console.log("Acción no definida");
        }
    };

    const renderForm = () => {
        switch (activeTab) {
            case "Persona":
                return (
                    <>
                       <Form1 submit={() => handleSubmit("Persona")} del={() => handleDelete("Persona")} update={() => handleUpdate("Persona")} />
                      {renderTablePersonas()}
                    </>
                  );
            case "Vivienda":
                return (
                    <>
                      <Form2 submit={() => handleSubmit("Vivienda")} del={() => handleDelete("Vivienda")} update={() => handleUpdate("Vivienda")} />
                      {/* Add the corresponding table or content for Vivienda here */}
                    </>
                  );
            case "Propiedad Vivienda":
                return (
                    <>
                      <Form3 submit={() => handleSubmit("Propiedad Vivienda")} del={() => handleDelete("Propiedad Vivienda")} update={() => handleUpdate("Propiedad Vivienda")} />
                      {/* Aquí el contenido para Propiedad Vivienda */}
                      {/* Add the corresponding table or content for Propiedad Vivienda here */}
                    </>
                  );
            case "Negocio":
                return (
                    <>
                      <Form4 submit={() => handleSubmit("Negocio")} del={() => handleDelete("Negocio")} update={() => handleUpdate("Negocio")} />
                      {/* Add the corresponding table or content for Negocio here */}
                    </>
                  );
            default:
                return <Form1 submit={() => handleSubmit("Persona")} del={() => handleDelete("Persona")} update={() => handleUpdate("Persona")} />;
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
                                //onClick={() => setActiveTab(tab)}
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
const Form1 = ({ submit, del, update }: FormProps) => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload

        // Explicitly cast e.target to HTMLFormElement
        const form = e.target as HTMLFormElement;
        
        // Check validity of the form
        if (form.checkValidity()) {
            submit(); // If form is valid, call the submit function passed as a prop
        } else {
            form.reportValidity(); // Trigger form validation (show validation messages)
        }
    };
    
        const handleDelete = (e: React.FormEvent) => {
            e.preventDefault(); // Prevent page reload
            del(); // Call the delete function passed as a prop
        };
    
        const handleUpdate = (e: React.FormEvent) => {
            e.preventDefault(); // Prevent page reload
            update(); // Call the update function passed as a prop
        };
    return(
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
                        <div className="flex justify-center space-x-4 mt-10">
                        <CustomButton
                        title="Añadir"
                        containerStyles="bg-emerald-600 text-black rounded-full"
                        handleClick={handleFormSubmit}>
                        </CustomButton>
                        <CustomButton
                        title="Eliminar"
                        containerStyles="bg-emerald-600 text-black rounded-full"
                        handleClick={handleDelete}>
                        </CustomButton>
                        <CustomButton
                        title="Actualizar"
                        containerStyles="bg-emerald-600 text-black rounded-full"
                        handleClick={handleUpdate}>
                        </CustomButton>
                        </div>
        </form>
    </div>
    );
};

const Form2 = ({ submit, del, update }: FormProps) => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        submit(); // Call the submit function passed as a prop
    };

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        del(); // Call the delete function passed as a prop
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        update(); // Call the update function passed as a prop
    };
return(
<div>
<form>
<div className="flex space-x-4">
                            <div className="flex-auto w-[8rem]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">ID:</label>
                                <input type="number" 
                                id="id" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                placeholder="##########" 
                                required />
                            </div>
                            <div className="flex-auto w-[8rem]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">ID Municipio:</label>
                                <input type="number" 
                                id="municipio_id" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                placeholder="##########"
                                required 
                                />
                            </div>
                            <div className="flex-auto w-[8rem]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Tipo Vivienda:</label>
                                <input type="text" 
                                id="tipo_vivienda" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                placeholder="Apartamento" 
                                required
                                />
                            </div>
                            <div className="flex-auto">
                                <label className="block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Dirección:</label>
                                <input type="text" 
                                id="direccion" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600" 
                                placeholder="Bethlehem Lane 3356" 
                                required />
                            </div>
                            <div className="flex-auto">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pisos:</label>
                                <input type='number' id="pisos" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder='#'
                                max={10}/>
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
                    <div className="flex justify-center space-x-4 mt-10">
                    <CustomButton
                    title="Añadir"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleFormSubmit}>
                    </CustomButton>
                    <CustomButton
                    title="Eliminar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleDelete}>
                    </CustomButton>
                    <CustomButton
                    title="Actualizar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleUpdate}>
                    </CustomButton>
                    </div>
    </form>
</div>
);
};
const Form3 = ({ submit, del, update }: FormProps)=> {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        submit(); // Call the submit function passed as a prop
    };

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        del(); // Call the delete function passed as a prop
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        update(); // Call the update function passed as a prop
    };
return(
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
                    <div className="flex justify-center space-x-4 mt-10">
                    <CustomButton
                    title="Añadir"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleFormSubmit}>
                    </CustomButton>
                    <CustomButton
                    title="Eliminar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleDelete}>
                    </CustomButton>
                    <CustomButton
                    title="Actualizar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleUpdate}>
                    </CustomButton>
                    </div>
    </form>
</div>
);
};
const Form4 = ({ submit, del, update }: FormProps) => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        submit(); // Call the submit function passed as a prop
    };

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        del(); // Call the delete function passed as a prop
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        update(); // Call the update function passed as a prop
    };
return(
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
                    <div className="flex justify-center space-x-4 mt-10">
                    <CustomButton
                    title="Añadir"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleFormSubmit}>
                    </CustomButton>
                    <CustomButton
                    title="Eliminar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleDelete}>
                    </CustomButton>
                    <CustomButton
                    title="Actualizar"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleUpdate}>
                    </CustomButton>
                    </div>
    </form>
</div>
);
};

export default Hero;