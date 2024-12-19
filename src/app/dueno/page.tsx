"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CampoDueno } from "../../../components";

const DuenoPage = () => {
    const searchParams = useSearchParams();
    const DuenoId = searchParams.get("dueno_id");

    const [DuenoData, setDuenoData] = useState<any>(null);

    useEffect(() => {
        if (DuenoId) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}personas/${DuenoId}`
                    );
                    const data = await response.json();
                    setDuenoData(data);
                } catch (error) {
                    console.error("Error al cargar datos:", error);
                }
            };

            fetchData();
        }
    }, [DuenoId]);

    if (!DuenoId) {
        return <p className="text-red-500">Error: No existe esa persona.</p>;
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Información de Municipio:</h1>
            {DuenoData ? (
                <CampoDueno dni={DuenoData.dni} residencia_id={DuenoData.residencia_id} cdf_id={DuenoData.cdf_id} nombre_completo={DuenoData.nombre_completo} fecha_nacimiento={DuenoData.fecha_nacimiento} sexo={DuenoData.sexo} email={DuenoData.email} telefono={DuenoData.telefono} celular={DuenoData.celular}/>
            ) : (
                <p className="text-gray-500">Cargando datos...</p>
            )}
        </div>
    );
};

export default DuenoPage;