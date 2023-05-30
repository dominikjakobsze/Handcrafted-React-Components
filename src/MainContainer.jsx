import React from "react";
import Header from "./components/Header";

const MainContainer = () => {
    return (<>
        <div 
            className="p-5 w-full flex flex-row flex-wrap justify-start items-start bg-gray-900"
        >
            <Header text="Handcrafted React Components"/>
        </div>
    </>);
};

export default MainContainer;