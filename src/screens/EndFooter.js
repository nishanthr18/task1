import React from "react";
import "./EndFooter.css";
import TopFooter from "./TopFooter";

const EndFooter = ()=>{
    return(
        <div>
            <TopFooter/>
        <div className="footerend">
            <h3 className="fh3">© 2022 NetElixir Inc, All Rights Reserved.</h3>
        </div>
        </div>
    )
}

export default EndFooter;