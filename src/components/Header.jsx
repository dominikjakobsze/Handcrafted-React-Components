import React from "react";

const Header = ({text, textAlign, marginTop, marginBottom, color}) => {

    //styles
    const additionalStyles = {
        textAlign: textAlign || "center",
        marginTop: marginTop || "0px",
        marginBottom: marginBottom || "0px",
        color: color || "#ffffff",
    };

    //return
    return (<>
        <div 
            className="text-[#ffffff] text-5xl font-semibold w-full"
            style={additionalStyles}
        >
            {text}
        </div>
    </>);
};

export default Header;