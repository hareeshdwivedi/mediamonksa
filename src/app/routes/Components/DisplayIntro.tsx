import React, { useEffect, useState } from "react";
import Intro from "../../components/intro/Intro";

const DisplayIntro:React.FC = ():JSX.Element => {

    const [loading, setLoading] = useState<boolean>(true);

    const disableLoading = () => {

        setTimeout(() => {
            setLoading(false);
        }, 4000);

    }

    useEffect(() => { disableLoading() }, []);

    return(
        <>
            {
            loading
                ? <Intro/>
                : null
            }
        </>
    )

}

export default DisplayIntro;