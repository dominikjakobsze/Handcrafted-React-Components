import React from "react";

const Header = ({text}) => {

    //styles
    const additionalStyles = {
        textAlign: "center",
    }

    //return
    return (<>
        <div 
            className="text-[#007AFF] text-5xl font-bold w-full"
        >
            {text}
        </div>
    </>);
};

export default Header;