import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const PoweredByCarousel = () => {

    const [poweredByCarouselRef, poweredByCarouselApi] = useEmblaCarousel({
        axis: "x",
        dragFree: true,
        align: "center",
        //loop: true,
    });

    return (<>
        <div 
            className="w-full bg-[#1c1c1d] text-blue-500 overflow-hidden p-5"
            ref={poweredByCarouselRef}
        >
            <div className="w-full flex flex-row gap-5">
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test1</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test2</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test3</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test4</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test5</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test6</p>
                <p className="flex-[0_0_30%] h-[300px] flex flex-row flex-wrap justify-center items-center">test7</p>
            </div>
        </div>
    </>);
};

export default PoweredByCarousel;