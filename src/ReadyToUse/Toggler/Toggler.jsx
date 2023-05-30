import React from "react";

const Toggler = ({onToggle}) => {

    const [toggler, setToggler] = React.useState(false);

    React.useEffect(() => {
        onToggle(toggler);
    }, [toggler]);

    return (<>
        <div className="w-[75px] h-[30px] rounded-full bg-[#39393d] relative">
            <div className="rounded-full cursor-pointer
            w-[35px] h-[35px] bg-white absolute top-[50%]
            left-[20%] translate-x-[-50%] translate-y-[-50%]"
            onClick={() => setToggler((prev) => !prev)}
            ></div>
        </div>
    </>);
};

export default Toggler;