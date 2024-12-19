"use client";
import { useState, useEffect } from "react";
import { TablaViviendas } from "../../../types";
import { Tabs } from "../../../components";
import { CustomButton } from "../../../components";
import { useRouter } from "next/navigation";

export default function Vivienda() {
    const [viviendas, setViviendas] = useState<TablaViviendas | null>(null);
    // Fetch viviendas from backend
    const fetchViviendas = async () => {
  
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}viviendas`);
          if (!response.ok) throw new Error("Failed to fetch viviendas");
          const data: TablaViviendas = await response.json();
          setViviendas(data);
        } catch (error) {
          console.error();
        }
        };
    // Ejecutar fetch
    useEffect(() => {
        fetchViviendas();
    }, []);
    // Crear la tabla de personas con los datos ya fetched
    const renderTableViviendas = () => {
        if (!viviendas || viviendas.length === 0) return <p>No hay datos disponibles.</p>;
        
            return (
              <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2 dark:bg-gray-700">ID</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">ID Municipio</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Tipo Vivienda</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Dirección</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Pisos</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Tamaño</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Estrato</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Avaluo</th>
                    <th className="border px-4 py-2 dark:bg-gray-700">Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {viviendas.map((vivienda) => (
                    <tr key={vivienda.id}>
                      <td className="border px-4 py-2">{vivienda.id}</td>
                      <td
                                className="selectable border px-4 py-2 "
                                onClick={() => router.push(`/ubicacion?ubicacion_id=${vivienda.municipio_id}`)}
                            >
                                    {vivienda.municipio_id}
                            </td>
                      <td className="border px-4 py-2">{vivienda.tipo_vivienda}</td>
                      <td className="border px-4 py-2">{vivienda.direccion}</td>
                      <td className="border px-4 py-2">{vivienda.pisos}</td>
                      <td className="border px-4 py-2">{vivienda.tamano}</td>
                      <td className="border px-4 py-2">{vivienda.estrato}</td>
                      <td className="border px-4 py-2">{vivienda.avaluo}</td>
                      <td className="border px-4 py-2">
                                <CustomButton
                                    title="Edit"
                                    containerStyles="bg-emerald-600 text-black rounded-full"
                                    handleClick={() => handleEditClick(vivienda.id)}
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
        router.push("/vivienda/anadir");
    };
    const handleEditClick = (vid: number) => {
      router.push(`/vivienda/edit/?vivienda_id=${vid}`);
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
            {renderTableViviendas()}
        </div>
        
    );
}