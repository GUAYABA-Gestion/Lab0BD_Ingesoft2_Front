"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CampoCdf } from "../../../components";

const CdfPage = () => {
    const searchParams = useSearchParams();
    const cdfId = searchParams.get("cdf_id");

    const [cdfData, setCdfData] = useState<any>(null);

    useEffect(() => {
        if (cdfId) {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}cabezas-familia/${cdfId}`
                    );
                    const data = await response.json();
                    setCdfData(data);
                } catch (error) {
                    console.error("Error al cargar datos:", error);
                }
            };

            fetchData();
        }
    }, [cdfId]);

    if (!cdfId) {
        return <p className="text-red-500">Error: No existe ese CDF.</p>;
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Información de CIF</h1>
            {cdfData ? (
                <CampoCdf cdf_id={cdfData.cdf_id} persona_id={cdfData.persona_id} />
            ) : (
                <p className="text-gray-500">Cargando datos...</p>
            )}
        </div>
    );
};

export default CdfPage;