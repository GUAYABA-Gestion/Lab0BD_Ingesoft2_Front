"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { TablaMunicipios } from "../../../types";
import { Tabs } from "../../../components";

export default function Municipio() {
    const [municipios, setMunicipios] = useState<TablaMunicipios | null>(null);
    const router = useRouter();

    // Fetch municipios from backend
    const fetchMunicipios = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}municipios`);
            if (!response.ok) throw new Error("Failed to fetch municipios.");
            const data: TablaMunicipios = await response.json();
            setMunicipios(data);
        } catch (error) {
            console.error("Error fetching municipios:", error);
        }
    };

    useEffect(() => {
        fetchMunicipios();
    }, []);

    // Create the table of municipios with fetched data
    const renderTableMunicipios = () => {
        if (!municipios || municipios.length === 0) {
            return <p>No hay datos disponibles.</p>;
        }

        return (
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2 dark:bg-gray-700">ID:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Nombre:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">ID Gobernador:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Habitantes:</th>
                        <th className="border px-4 py-2 dark:bg-gray-700">Área:</th>
                    </tr>
                </thead>
                <tbody>
                    {municipios.map((municipio) => (
                        <tr key={municipio.id}>
                            <td className="border px-4 py-2">{municipio.id}</td>
                            <td className="border px-4 py-2">{municipio.nombre}</td>
                            <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/dueno?dueno_id=${municipio.gobernador_id}`)}
                            >
                                    {municipio.gobernador_id}
                            </td>
                            <td className="border px-4 py-2">{municipio.habitantes}</td>
                            <td className="border px-4 py-2">{municipio.area}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };


    return (
        <div>
            <Tabs />
            <div className="flex justify-center space-x-4 mt-10">
            </div>
            {renderTableMunicipios()}
        </div>
    );
}