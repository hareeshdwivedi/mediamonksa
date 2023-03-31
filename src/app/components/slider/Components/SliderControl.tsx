import React, { useContext } from "react";
import { SliderControlProps } from "../../../../types/Slider";
import { SliderContext } from "../Context/SliderContext";

const SliderControl:React.FC<SliderControlProps> = ({direction}):JSX.Element => {

    const { pages, view, setView } = useContext(SliderContext);

    const moveTo = () => {

        if (direction === "right") {
            if (view < pages) setView(view + 1);
        } else {
            if (view > 0) setView(view - 1);
        }

    }

    const element = (
        <div 
            className={`slider-control ${direction}`}
            onClick={moveTo}
        >
            <span></span>
        </div>
    );

    return(
        <>
            {
            direction === "left" && view > 0
                ? element
                : direction === "right" && view < pages
                    ? element
                    : null
            }
        </>
    );

}

export default SliderControl;