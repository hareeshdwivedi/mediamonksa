import React from "react";

const SliderContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <div className="slider-container">
            {children}
        </div>
    );

}

export default SliderContainer;