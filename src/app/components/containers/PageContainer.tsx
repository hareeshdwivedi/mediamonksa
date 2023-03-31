import React from "react";

const PageContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <div className="page-container">
            {children}
        </div>
    )

}

export default PageContainer;