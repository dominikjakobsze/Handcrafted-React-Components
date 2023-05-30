import React from "react";

const Text = ({textAlign, marginTop, marginBottom, width, padding, children}) => {

    //styles
    const additionalStyles = {
        textAlign: textAlign || "center",
        marginTop: marginTop || "0px",
        marginBottom: marginBottom || "0px",
        width: width || "100%",
        padding: padding || "0px",
    };


    return (<>
        <div
            style={additionalStyles}
            className="text-[#ffffff] text-sm self-stretch bg-[#1c1c1d] rounded-xl"
        >
        {children}
        </div>
    </>);
};

export default Text;