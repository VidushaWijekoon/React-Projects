import { useEffect, useRef } from "react";

const Hooks = () => {
    const currentValue = useRef(0);
    const diveRefElement = useRef();
    const inputRefElement = useRef();

    const handleClick = () => {
        currentValue.current++;
        console.log(currentValue.current);
    };

    useEffect(() => {
        const getDivReference = diveRefElement.current;
        inputRefElement.current.focus()
        console.log(getDivReference);
        getDivReference.style.color = "red";

        setTimeout(() => (getDivReference.style.color = "green"), 2000);

    }, []);

    return (
        <div>
            <h1>React Use Ref Hook</h1>
            <button onClick={handleClick}>Click Me</button>
            <div className="" ref={diveRefElement}>
                Some Readom Text
            </div>
            <input
                type="text"
                name="name"
                ref={inputRefElement}
                placeholder="enter your name"
            />
        </div>
    );
};

export default Hooks;
