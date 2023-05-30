import React from "react";

const Header = ({text, textAlign, marginTop, marginBottom, color, fontSize}) => {

    //styles
    const additionalStyles = {
        textAlign: textAlign || "center",
        marginTop: marginTop || "0px",
        marginBottom: marginBottom || "0px",
        color: color || "#ffffff",
        fontSize: fontSize || "3rem"
    };

    //return
    return (<>
        <div 
            className="text-[#ffffff] font-semibold w-full"
            style={additionalStyles}
        >
            {text}
        </div>
    </>);
};

export default Header;