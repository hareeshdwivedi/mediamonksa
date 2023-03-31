import React, { useContext, useEffect, useState } from "react";
import { SliderContext } from "../Context/SliderContext";
import SliderNavButton from "./SliderNavButton";

const SliderNav:React.FC = ():JSX.Element => {

    const { pages, view } = useContext(SliderContext);

    const [items, setItems] = useState<JSX.Element[]>([]);

    const createNavItems = () => {

        let liItems:JSX.Element[] = [];

        for (let x = 0; x <= pages; x++) {
            liItems.push(<SliderNavButton key={x} page={x}/>);

        }

        setItems(liItems);

    }

    useEffect(() => createNavItems(), [pages]);

    return(
        <div className="slider-nav">
            <ul>
                {items}
            </ul>
            <p>
                {
                view > 0 && view < pages
                    ? `Step ${view} out of ${pages - 1} on the path to digital enlightenment.`
                    : ""
                }
            </p>
        </div>
    );

}

export default SliderNav;