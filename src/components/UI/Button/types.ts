import React from "react";

export interface ButtonProps {
    icon?: any;
    text?: string,
    bgColor: string;
    iconColor: string,
    width: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void | ((email: string, pass: string) => void);
    children?: React.ReactNode;
}
