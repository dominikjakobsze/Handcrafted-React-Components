import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";

const MainContainer = () => {
    return (<>
        <div 
            className="p-5 gap-5 w-full flex flex-row flex-wrap justify-center items-start bg-[#000000]"
        >
            <Header text="Handcrafted React Components" marginTop={"1rem"} marginBottom={"1rem"}/>
            <Text width="48%" padding={"1.25rem"}>Handcrafted React components are reusable UI elements that are meticulously crafted with a focus on flexibility and reusability. These components are designed to be easily copied from the source code and seamlessly integrated into any React application.</Text>
            <Text width="48%" padding={"1.25rem"}>Developed with the goal of enhancing developer productivity and providing consistent user experiences, handcrafted React components offer a range of benefits. By encapsulating specific functionality and styling into self-contained modules, these components enable developers to build complex user interfaces more efficiently.</Text>
            <Header text="Powered by GSAP, React Icons, Tailwind CSS" fontSize={"2rem"} textAlign={"left"}/>
        </div>
    </>);
};

export default MainContainer;