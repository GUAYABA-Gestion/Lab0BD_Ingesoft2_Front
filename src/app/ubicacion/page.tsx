"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CampoUbicacion } from "../../../components";

const UbicacionPage = () => {
    const searchParams = useSearchParams();
    const UbicacionId = searchParams.get("ubicacion_id");

    const [UbicacionData, setUbicacionData] = useState<any>(null);

    useEffect(() => {
        if (UbicacionId) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}municipios/${UbicacionId}`
                    );
                    const data = await response.json();
                    setUbicacionData(data);
                } catch (error) {
                    console.error("Error al cargar datos:", error);
                }
            };

            fetchData();
        }
    }, [UbicacionId]);

    if (!UbicacionId) {
        return <p className="text-red-500">Error: No existe ese municipio.</p>;
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Información del Municipio:</h1>
            {UbicacionData ? (
                <CampoUbicacion id={UbicacionData.id} nombre={UbicacionData.nombre} gobernador_id={UbicacionData.gobernador_id} habitantes={UbicacionData.habitantes} area={UbicacionData.area}/>
            ) : (
                <p className="text-gray-500">Cargando datos...</p>
            )}
        </div>
    );
};

export default UbicacionPage;