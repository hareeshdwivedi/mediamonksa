import React from "react";

const Intro:React.FC = ():JSX.Element => {

    return(
        <div className="intro">
            <div>
                <img
                    src="./assets/media/monk.png"
                    alt="Monk"
                />
                <p>Patience, young padawan...</p>
            </div>
        </div>
    )

}

export default Intro;