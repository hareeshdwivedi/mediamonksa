import React, { useContext, useEffect } from "react";
import { SliderBackgroundProps } from "../../../../types/Slider";
import { SliderContext } from "../Context/SliderContext";

const SliderBackground:React.FC<SliderBackgroundProps> = ({url}):JSX.Element => {

    const { pages, view } = useContext(SliderContext);

    const translateToBgPageView = () => {

        const image = document.querySelector(".slider-bg img") as HTMLImageElement;
        
        const viewport = window.visualViewport.width;

        let viewportOffset = 0;
        let imageOffset = 0;

        if (view > 0 && view < pages) {
            viewportOffset = viewport / pages * (view + 1);
            imageOffset = 100 / pages * (view + 1);
        } else if (view === pages) {
            imageOffset = 100;
        }

        image.style.transform = `translateX(calc(-${imageOffset}% + ${viewportOffset}px))`

    }

    useEffect(() => translateToBgPageView(), [pages, view]);

    return(
        <div className="slider-bg">
            <img src={url}/>
        </div>
    );

}

export default SliderBackground;