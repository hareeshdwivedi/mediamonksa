import React, { Dispatch } from "react";

export interface SliderBackgroundProps {
    url:string;
}

export interface SliderControlProps {
    direction:"left"|"right";
}

export interface SliderNavButtonProps {
    page:number;
}

export interface SliderPageProps {
    page:number;
    children:React.ReactNode;
}

export interface SliderContextValue {
    view:number;
    pages:number;
    setView:Dispatch<number>
    setPages:Dispatch<number>
}

export interface SliderProps {
    url:string;
}