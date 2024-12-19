"use client";
import { useState, useEffect } from "react";
import { TablaPropiedades } from "../../../types";
import { Tabs } from "../../../components";
import { CustomButton } from "../../../components";
import { useRouter } from "next/navigation";

export default function Propiedades() {
    const [propiedades, setPropiedades] = useState<TablaPropiedades | null>(null);
    // Fetch propiedades from backend
    const fetchPropiedades = async () => {
  
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}propiedades`);
          if (!response.ok) throw new Error("Failed to fetch propiedades.");
          const data: TablaPropiedades = await response.json();
          setPropiedades(data);
        } catch (error) {
          console.error();
        }
        };
    // Ejecutar fetch
    useEffect(() => {
        fetchPropiedades();
    }, []);
    // Crear la tabla de personas con los datos ya fetched
    const renderTablePropiedades = () => {
        if (!propiedades || propiedades.length === 0) return <p>No hay datos disponibles.</p>;
        
            return (
              <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2 dark:bg-gray-700">ID Vivienda:</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">ID Propietario:</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {propiedades.map((propiedad) => (
                    <tr key={propiedad.id}>
                      <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/residencia?residencia_id=${propiedad.vivienda_id}`)}
                            >
                                    {propiedad.vivienda_id}
                      </td>
                      <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/dueno?dueno_id=${propiedad.propietario_id}`)}
                            >
                                    {propiedad.propietario_id}
                      </td>
                      <td className="border px-4 py-2">
                                <CustomButton
                                    title="Edit"
                                    containerStyles="bg-emerald-600 text-black rounded-full"
                                    handleClick={() => handleEditClick(propiedad.id)}
                                />
                            </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          };
    
    const router = useRouter();
    const handleAddClick = () => {
        router.push("/propiedades/anadir");
    };
    const handleEditClick = (pid: number) => {
      router.push(`/propiedades/edit/?propiedad_id=${pid}`);
  };
    return( 
        //Contrucción de la página como tal
        <div>   
            <Tabs/>
                <div className="flex justify-center space-x-4 mt-10">
                <CustomButton
                title="Añadir"
                containerStyles="bg-emerald-600 text-black rounded-full"
                handleClick={handleAddClick}
                >
                </CustomButton>
                </div>
            {renderTablePropiedades()}
        </div>
        
    );
}