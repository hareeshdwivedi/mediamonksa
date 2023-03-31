import React from "react";

const StepTen:React.FC = ():JSX.Element => {

    return(
        <>
            <h1 className="right-top rtl">
                BECOME A MONK
            </h1>
            <div className="right rtl">
                <p>
                    Interested on joining our monastery?<br/>
                    Check out our current openings on <a href="https://media.monks.com/careers" target="_blank" rel="noreferrer">media.monks.com/careers</a>.
                </p>
                <br/>
                <ul className="links-list">
                    <li className="mail">Mail ons</li>
                    <li className="fb">
                        <a href="https://www.facebook.com/meetthemonks" target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                    <li className="twitter">
                        <a href="https://twitter.com/MeetTheMonks" target="_blank" rel="noreferrer">Twitter</a>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default StepTen;