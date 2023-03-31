import React, { createContext, useState } from "react";
import { SliderContextValue } from "../../../../types/Slider";

export const SliderContext = createContext({} as SliderContextValue);

export const SliderProvider:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const [pages, setPages] = useState<number>(0);
    const [view, setView] = useState<number>(0);

    return(
        <SliderContext.Provider
            value={{
                pages,
                view,
                setPages,
                setView
            }}
        >
            {children}
        </SliderContext.Provider>
    );

}