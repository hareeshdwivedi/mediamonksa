import React, { useContext, useRef } from "react";
import { SliderPageProps } from "../../../../types/Slider";
import { SliderContext } from "../Context/SliderContext";

const SliderPage:React.FC<SliderPageProps> = ({children, page}):JSX.Element => {

    const { view } = useContext(SliderContext);

    const pageRef = useRef<number>(page);

    return(
        <div 
            className={`slider-page ${view === pageRef.current ? "show" : "hidden"}`}
        >
            {children}
        </div>
    );

}

export default SliderPage;