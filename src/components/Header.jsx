import React from "react";

const Header = ({text, textAlign, marginTop, marginBottom, color, fontSize, fontWeight}) => {

    //styles
    const additionalStyles = {
        textAlign: textAlign || "center",
        marginTop: marginTop || "0px",
        marginBottom: marginBottom || "0px",
        color: color || "#ffffff",
        fontSize: fontSize || "3rem",
        fontWeight: fontWeight || "bold",
    };

    //return
    return (<>
        <div 
            className="text-[#ffffff] w-full"
            style={additionalStyles}
        >
            {text}
        </div>
    </>);
};

export default Header;