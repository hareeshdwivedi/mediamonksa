import React, { useContext } from "react";
import { SliderNavButtonProps } from "../../../../types/Slider";
import { SliderContext } from "../Context/SliderContext";

const SliderNavButton:React.FC<SliderNavButtonProps> = ({page}):JSX.Element => {

    const { pages, view, setView } = useContext(SliderContext);

    const moveToPage = () => {

        setView(page);

    }

    return(
        <li>
            <div 
                className={view === page ? "active": ""}
                onClick={moveToPage}
            >
                {
                page > 0 && page < pages
                    ? page
                    : ""
                }
            </div>
        </li>
    );

}

export default SliderNavButton;