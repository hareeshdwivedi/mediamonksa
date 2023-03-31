import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes/Home";

const App:React.FC = ():JSX.Element => {

    return(<Home/>)

}

ReactDOM.render(<App/>, document.getElementById("root"));