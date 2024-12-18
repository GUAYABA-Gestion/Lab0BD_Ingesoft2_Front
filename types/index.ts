import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type FormProps = {
    submit: () => void;
    del: () => void;
    update: () => void
};

export interface Personas {
    dni: number;
    residencia_id: number;
    cdf_id: number | null
    nombre_completo: string;
    fecha_nacimiento: string;
    sexo: string;
    email: string;
    telefono: string;
    celular: string;
  };

export type TablaPersonas = Personas[];

export interface Cdf {
    cdf_id: number;
    persona_id: number;
};

export interface Viviendas {
    id: number;
    municipio_id: number;
    tipo_vivienda: string;
    direccion: string;
    pisos: number;
    tamano: number;
    estrato: number;
    avaluo: number;
}

export type TablaViviendas = Viviendas[];