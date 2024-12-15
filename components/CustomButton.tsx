"use client";

import { CustomButtonProps } from "../types";

// Main hero

const CustomButton = ({ title, containerStyles, handleClick}: CustomButtonProps) => {
    return (
        <button
        disabled = {false}
        type = {"submit"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}>
            <span className={'flex-1'}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton