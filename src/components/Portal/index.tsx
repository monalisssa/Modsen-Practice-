import {createPortal} from "react-dom";
import React, {ReactNode, useEffect, useLayoutEffect, useState} from "react";
import {PortalProps} from "./types";


export const Portal: React.FC<PortalProps> = ({ children, elementId }) => {
    const [isMounted, setIsMounted] = useState(false);
    useLayoutEffect(() => {
        const mount = document.getElementById(elementId);
        if (mount) {
            const el = document.createElement('div');
            mount.appendChild(el);
            setIsMounted(true);
            return () => {
                mount.removeChild(el);
            };
        }
    }, [elementId]);

    if (!isMounted) return null;
    return createPortal(children, document.getElementById(elementId)!);
};