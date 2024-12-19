"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "../../../components";
import { useState, useEffect } from "react";
import { TablaPersonas } from "../../../types";
import { Tabs } from "../../../components";

export default function Persona() {
    const [personas, setPersonas] = useState<TablaPersonas | null>(null);
    const router = useRouter();

    // Fetch personas from backend
    const fetchPersonas = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}personas`);
            if (!response.ok) throw new Error("Failed to fetch personas");
            const data: TablaPersonas = await response.json();
            setPersonas(data);
        } catch (error) {
            console.error("Error fetching personas:", error);
        }
    };

    useEffect(() => {
        fetchPersonas();
    }, []);

    // Create the table of personas with fetched data
    const renderTablePersonas = () => {
        if (!personas || personas.length === 0) {
            return <p>No hay datos disponibles.</p>;
        }

        return (
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2 dark:bg-gray-700">ID</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">ID Residencia</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">CIF</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Nombre Completo</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Fecha de Nacimiento</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Sexo</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Email</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Teléfono</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Celular</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.dni}>
                            <td className="border px-4 py-2">{persona.dni}</td>
                            <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/residencia?residencia_id=${persona.residencia_id}`)}
                            >
                                    {persona.residencia_id}
                            </td>
                            <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/cdf?cdf_id=${persona.cdf_id}`)}
                            >
                                    {persona.cdf_id}
                            </td>
                            <td className="border px-4 py-2">{persona.nombre_completo}</td>
                            <td className="border px-4 py-2">{persona.fecha_nacimiento}</td>
                            <td className="border px-4 py-2">{persona.sexo}</td>
                            <td className="border px-4 py-2">{persona.email}</td>
                            <td className="border px-4 py-2">{persona.telefono}</td>
                            <td className="border px-4 py-2">{persona.celular}</td>
                            <td className="border px-4 py-2">
                                <CustomButton
                                    title="Edit"
                                    containerStyles="bg-emerald-600 text-black rounded-full"
                                    handleClick={() => handleEditClick(persona.dni)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const handleAddClick = () => {
        router.push("/persona/anadir");
    };

    const handleEditClick = (dni: number) => {
        router.push(`/persona/edit/?persona_id=${dni}`);
    };

    return (
        <div>
            <Tabs />
            <div className="flex justify-center space-x-4 mt-10">
                <CustomButton
                    title="Añadir"
                    containerStyles="bg-emerald-600 text-black rounded-full"
                    handleClick={handleAddClick}
                />
            </div>
            {renderTablePersonas()}
        </div>
    );
}
