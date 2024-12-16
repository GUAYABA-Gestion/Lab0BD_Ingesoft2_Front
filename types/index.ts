import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export type FormProps = {
    submit: () => void;
    del: () => void;
    update: () => void;
};

export interface Personas {
    id: number;
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