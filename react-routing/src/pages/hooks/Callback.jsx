import { useCallback, useState } from "react";
import Counter from "./Counter";

const Callback = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memorizeSetCountOneFunc = useCallback(
        () => setCountOne(countOne + 1),
        [countOne]
    );
    const memorizeSetCountTowFunc = useCallback(
        () => setCountTwo(countTwo + 1),
        [countTwo]
    );
    return (
        <>
            <h1>Callback</h1>
            <Counter countValue={countOne} onClick={memorizeSetCountOneFunc} />
            <Counter countValue={countTwo} onClick={memorizeSetCountTowFunc} />
        </>
    );
};

export default Callback;
