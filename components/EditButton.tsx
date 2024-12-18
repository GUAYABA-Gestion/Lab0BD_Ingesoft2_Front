"use client";

import { CustomButtonProps } from "../types";

// Main hero

const EditButton = ({ title, containerStyles, handleClick}: CustomButtonProps) => {
    return (
        <button
        disabled = {false}
        type = {"submit"}
        className={`edit-btn ${containerStyles}`}
        onClick={handleClick}>
            <span className={'flex-1'}>
                {title}
            </span>
        </button>
    )
}

export default EditButton