import React from "react";
import { gsap } from "gsap";

const Toggler = ({onToggle}) => {
    const [toggler, setToggler] = React.useState(false);
    const togglerContainerRef = React.useRef(null);
    const togglerButtonRef = React.useRef(null);

    const onToggleAnimation = () => {
        return new Promise((resolve) => {
            const togglerTimeline = gsap.timeline({
                onComplete: () => {
                    console.log("animation completed");
                    resolve();
                },
                paused: true,
            });
            togglerTimeline.to(togglerButtonRef.current, {
                duration: 0.25,
                ease: "back",
                x: toggler ? "125%" : "0%",
            });
            togglerTimeline.to(togglerContainerRef.current, {
                duration: 0.25,
                ease: "power4",
                backgroundColor: toggler ? "#007aff" : "#39393d",
            }, "-=0.20");
            console.log(togglerTimeline.duration());
            console.log(togglerTimeline.isActive());
            console.log(togglerTimeline.isActive());
            
        });
    };

    const onToggleInside = async (toggler) => {
        await onToggleAnimation()
        onToggle(toggler);
    };
    React.useEffect(() => {
        onToggleInside(toggler);
    }, [toggler]);

    return (<>
        <div 
            className="w-[75px] h-[30px] rounded-full bg-[#39393d] relative cursor-pointer"
            ref={togglerContainerRef}
            onClick={() => setToggler((prev) => !prev)}
        >
            <div 
                className="rounded-full
                w-[35px] h-[35px] bg-white absolute top-[50%]
                left-[20%] translate-x-[-50%] translate-y-[-50%]"
                ref={togglerButtonRef}
            ></div>
        </div>
    </>);
};

export default Toggler;