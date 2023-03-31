import React from "react";
import { SliderProps } from "../../../types/Slider";
import SliderBackground from "./Components/SliderBackground";
import SliderContainer from "./Components/SliderContainer";
import SliderControl from "./Components/SliderControl";
import SliderNav from "./Components/SliderNav";
import SliderPagesContainer from "./Components/SliderPagesContainer";
import { SliderProvider } from "./Context/SliderContext";

const Slider:React.FC<SliderProps> = ({children, url}):JSX.Element => {

    return(
        <SliderContainer>
            <SliderProvider>

                <SliderBackground url={url}/>

                <SliderControl direction="left"/>
                <SliderControl direction="right"/>

                <SliderNav/>

                <SliderPagesContainer>
                    {children}
                </SliderPagesContainer>

            </SliderProvider>
        </SliderContainer>
    );

}

export default Slider;