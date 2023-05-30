import React from "react";

const Text = ({textAlign, marginTop, marginBottom, width, padding, children, bg = true, color}) => {

    //styles
    const additionalStyles = {
        textAlign: textAlign || "center",
        marginTop: marginTop || "0px",
        marginBottom: marginBottom || "0px",
        width: width || "100%",
        padding: padding || "0px",
        color: color || "#ffffff",
    };


    return (<>
        <div
            style={additionalStyles}
            className={`text-sm self-stretch rounded-xl ${bg ? "bg-[#1c1c1d]" : ""}`}
        >
        {children}
        </div>
    </>);
};

export default Text;