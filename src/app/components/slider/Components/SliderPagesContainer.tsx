import React, { useContext, useEffect } from "react";
import { SliderContext } from "../Context/SliderContext";

const SliderPagesContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const { setPages, setView } = useContext(SliderContext);

    const setPagesCountAndView = () => {

        const container = document.querySelectorAll(".slider-pages-container .slider-page");

        setPages(container.length - 1);
        setView(0);

    }

    useEffect(() => setPagesCountAndView(), []);

    return(
        <div className="slider-pages-container">
            <div>
                {children}
            </div>
        </div>
    );

}

export default SliderPagesContainer;