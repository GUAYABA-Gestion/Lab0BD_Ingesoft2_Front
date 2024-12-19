"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "../../../components";
import { useState, useEffect } from "react";
import { TablaNegocios } from "../../../types";
import { Tabs } from "../../../components";

export default function Negocio() {
    const [negocios, setNegocios] = useState<TablaNegocios | null>(null);
    const router = useRouter();

    // Fetch negocios from backend
    const fetchNegocios = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}negocios`);
            if (!response.ok) throw new Error("Failed to fetch negocios");
            const data: TablaNegocios = await response.json();
            setNegocios(data);
        } catch (error) {
            console.error("Error fetching negocios:", error);
        }
    };

    useEffect(() => {
        fetchNegocios();
    }, []);

    // Create the table of negocios with fetched data
    const renderTableNegocios = () => {
        if (!negocios || negocios.length === 0) {
            return <p>No hay datos disponibles.</p>;
        }

        return (
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2 dark:bg-gray-700">NIT:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">ID Propietario:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">ID Municipio:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Tipo Negocio:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Nombre:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Direccion:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Teléfono:</th>
                    </tr>
                </thead>
                <tbody>
                    {negocios.map((negocio) => (
                        <tr key={negocio.nit}>
                            <td className="border px-4 py-2">{negocio.nit}</td>
                            <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/dueno?dueno_id=${negocio.propietario_id}`)}
                            >
                                    {negocio.propietario_id}
                            </td>
                            <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/ubicacion?ubicacion_id=${negocio.municipio_id}`)}
                            >
                                    {negocio.municipio_id}
                            </td>
                            <td className="border px-4 py-2">{negocio.tipo_negocio}</td>
                            <td className="border px-4 py-2">{negocio.nombre}</td>
                            <td className="border px-4 py-2">{negocio.direccion}</td>
                            <td className="border px-4 py-2">{negocio.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const handleAddClick = () => {
        router.push("/negocio/anadir");
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
            {renderTableNegocios()}
        </div>
    );
}
