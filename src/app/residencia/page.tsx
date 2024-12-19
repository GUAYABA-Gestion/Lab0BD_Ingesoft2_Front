"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CampoResidencia } from "../../../components";

const ResidenciaPage = () => {
    const searchParams = useSearchParams();
    const residenciaid = searchParams.get("residencia_id");

    const [residenciaidData, setresidenciaidData] = useState<any>(null);

    useEffect(() => {
        if (residenciaid) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}viviendas/${residenciaid}`
                    );
                    const data = await response.json();
                    setresidenciaidData(data);
                } catch (error) {
                    console.error("Error al cargar datos:", error);
                }
            };

            fetchData();
        }
    }, [residenciaid]);

    if (!residenciaid) {
        return <p className="text-red-500">Error: No existe esa residencia.</p>;
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Información de Residencia:</h1>
            {residenciaidData ? (
                <CampoResidencia id={residenciaidData.id} municipio_id={residenciaidData.municipio_id} tipo_vivienda={residenciaidData.tipo_vivienda} direccion={residenciaidData.direccion} pisos={residenciaidData.pisos} tamano={residenciaidData.tamano} estrato={residenciaidData.estrato} avaluo={residenciaidData.avaluo}/>
            ) : (
                <p className="text-gray-500">Cargando datos...</p>
            )}
        </div>
    );
};

export default ResidenciaPage;